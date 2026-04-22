import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const resendApiKey = env.RESEND_API_KEY;
  const resendFromEmail = env.RESEND_FROM_EMAIL || 'Erika <onboarding@resend.dev>';
  const toEmail = env.RESEND_TO_EMAIL || '';
  const toEmails = toEmail
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
  const web3FormsAccessKey = env.WEB3FORMS_ACCESS_KEY || '';
  const hasWeb3FormsConfig = Boolean(web3FormsAccessKey);
  const formSubmitEmail = env.FORMSUBMIT_EMAIL || toEmails[0] || '';
  const hasFormSubmitConfig = Boolean(formSubmitEmail);
  const smtpService = env.SMTP_SERVICE || '';
  const smtpHost = env.SMTP_HOST || '';
  const smtpPort = Number(env.SMTP_PORT || 587);
  const smtpSecure = String(env.SMTP_SECURE || 'false').toLowerCase() === 'true';
  const smtpUser = env.SMTP_USER || '';
  const smtpPass = env.SMTP_PASS || '';
  const smtpFromEmail = env.SMTP_FROM_EMAIL || smtpUser;
  const hasSmtpConfig = Boolean(smtpUser && smtpPass && (smtpService || smtpHost));
  const fixedSubject = 'Nuevo lead desde tu Portafolio | Revisar y agendar reunion';

  const isSuccessValue = (value) => value === true || value === 'true' || value === 1 || value === '1';

  const sendWithSmtp = async ({ correo, subject, html, text }) => {
    const transport = smtpService
      ? {
          service: smtpService,
          auth: { user: smtpUser, pass: smtpPass },
        }
      : {
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: { user: smtpUser, pass: smtpPass },
        };

    const transporter = nodemailer.createTransport(transport);
    const info = await transporter.sendMail({
      from: smtpFromEmail,
      to: toEmails,
      replyTo: correo,
      subject,
      html,
      text,
    });

    return { provider: 'smtp', id: info.messageId || null };
  };

  const sendWithResend = async ({ correo, subject, html, text }) => {
    const resend = new Resend(resendApiKey);
    const { data, error: resendError } = await resend.emails.send({
      from: resendFromEmail,
      to: toEmails,
      replyTo: correo,
      subject,
      html,
      text,
    });

    if (resendError) {
      throw new Error(resendError.message || 'Resend returned an unknown error');
    }

    return { provider: 'resend', id: data?.id || null };
  };

  const sendWithFormSubmit = async ({ nombre, empresa, correo, celular, mensaje, fechaRecepcion }) => {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(formSubmitEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: fixedSubject,
        nombre,
        empresa: empresa || 'No indicada',
        correo,
        celular: celular || 'No indicado',
        mensaje,
        recibido: fechaRecepcion,
        fuente: 'Formulario ErikaPortafolio',
      }),
    });

    let payload = {};
    try {
      payload = await response.json();
    } catch {
      payload = {};
    }

    if (!response.ok || !isSuccessValue(payload?.success)) {
      throw new Error(payload?.message || 'FormSubmit rejected the request');
    }

    return { provider: 'formsubmit', id: payload?.message || null };
  };

  const sendWithWeb3Forms = async ({ nombre, empresa, correo, celular, mensaje, fechaRecepcion }) => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: web3FormsAccessKey,
        subject: fixedSubject,
        from_name: nombre,
        email: correo,
        nombre,
        empresa: empresa || 'No indicada',
        celular: celular || 'No indicado',
        mensaje,
        recibido: fechaRecepcion,
        fuente: 'Formulario ErikaPortafolio',
      }),
    });

    let payload = {};
    try {
      payload = await response.json();
    } catch {
      payload = {};
    }

    if (!response.ok || !isSuccessValue(payload?.success)) {
      throw new Error(payload?.message || 'Web3Forms rejected the request');
    }

    return { provider: 'web3forms', id: payload?.message || null };
  };

  return {
    plugins: [
      react(),
      {
        name: 'local-contact-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (!req.url?.startsWith('/api/contact')) {
              return next();
            }

            if (req.method === 'OPTIONS') {
              res.statusCode = 204;
              res.end();
              return;
            }

            if (req.method === 'GET') {
              json(res, 200, {
                ok: true,
                status: 'contact-api-ready',
                hasResendApiKey: Boolean(resendApiKey),
                hasSmtpConfig,
                hasWeb3FormsConfig,
                hasFormSubmitConfig,
              });
              return;
            }

            if (req.method !== 'POST') {
              json(res, 405, { ok: false, error: 'Method not allowed' });
              return;
            }

            if (!hasSmtpConfig && !hasWeb3FormsConfig && !hasFormSubmitConfig && !resendApiKey) {
              json(res, 500, {
                ok: false,
                error: 'Missing mail provider configuration in .env.local',
                details: 'Configura SMTP_*, WEB3FORMS_ACCESS_KEY, FORMSUBMIT_EMAIL o RESEND_API_KEY.',
              });
              return;
            }

            let payload;

            try {
              payload = await readBody(req);
            } catch {
              json(res, 400, { ok: false, error: 'Invalid JSON body' });
              return;
            }

            const nombre = (payload?.nombre || '').trim();
            const empresa = (payload?.empresa || '').trim();
            const correo = (payload?.correo || '').trim();
            const celular = (payload?.celular || '').trim();
            const mensaje = (payload?.mensaje || '').trim();

            if (!nombre || !correo || !mensaje) {
              json(res, 400, {
                ok: false,
                error: 'Nombre, correo y mensaje son obligatorios.',
              });
              return;
            }

            const fechaRecepcion = new Date().toLocaleString('es-PE', {
              dateStyle: 'medium',
              timeStyle: 'short',
            });

            const nombreSafe = escapeHtml(nombre);
            const empresaSafe = escapeHtml(empresa || 'No indicada');
            const correoSafe = escapeHtml(correo);
            const celularSafe = escapeHtml(celular || 'No indicado');
            const mensajeSafe = escapeHtml(mensaje).replace(/\n/g, '<br/>');
            const fechaSafe = escapeHtml(fechaRecepcion);

            const html = `
              <!doctype html>
              <html lang="es">
                <body style="margin:0;padding:0;background:#eef2ed;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2ed;padding:24px 10px;">
                    <tr>
                      <td align="center">
                        <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid #e7e7e7;border-radius:14px;overflow:hidden;font-family:Arial,sans-serif;color:#311f2a;">
                          <tr>
                            <td style="background:#f04e0c;padding:20px 24px;">
                              <p style="margin:0;font-size:12px;letter-spacing:0.12em;color:#ffd8c9;text-transform:uppercase;">Portafolio Erika</p>
                              <h1 style="margin:8px 0 0;font-size:25px;line-height:1.2;color:#ffffff;">Te enviaron un nuevo mensaje</h1>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:20px 24px 10px;">
                              <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#3c2b34;">
                                <strong>${nombreSafe}</strong> de <strong>${empresaSafe}</strong> se contacto desde tu portafolio.
                              </p>
                              <p style="margin:0 0 6px;font-size:14px;"><strong>Correo:</strong> ${correoSafe}</p>
                              <p style="margin:0 0 14px;font-size:14px;"><strong>Celular:</strong> ${celularSafe}</p>
                              <div style="background:#fff7f3;border:1px solid #ffd8ca;border-radius:10px;padding:12px 14px;">
                                <p style="margin:0 0 8px;font-size:12px;color:#8d4a2d;text-transform:uppercase;letter-spacing:0.08em;">Mensaje</p>
                                <p style="margin:0;font-size:14px;line-height:1.65;color:#3b2c34;">${mensajeSafe}</p>
                              </div>
                              <p style="margin:14px 0 0;font-size:13px;color:#6a5a64;">Recibido: ${fechaSafe}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </body>
              </html>
            `;

            const text = [
              fixedSubject,
              '',
              `Nombre: ${nombre}`,
              `Empresa: ${empresa || 'No indicada'}`,
              `Correo: ${correo}`,
              `Celular: ${celular || 'No indicado'}`,
              '',
              'Mensaje:',
              mensaje,
              '',
              `Recibido: ${fechaRecepcion}`,
            ].join('\n');

            try {
              let delivery;
              let smtpError = null;
              let web3FormsError = null;
              let formSubmitError = null;

              if (hasSmtpConfig) {
                try {
                  delivery = await sendWithSmtp({ correo, subject: fixedSubject, html, text });
                } catch (error) {
                  smtpError = error;
                }
              }

              if (!delivery && hasWeb3FormsConfig) {
                try {
                  delivery = await sendWithWeb3Forms({ nombre, empresa, correo, celular, mensaje, fechaRecepcion });
                } catch (error) {
                  web3FormsError = error;
                }
              }

              if (!delivery && hasFormSubmitConfig) {
                try {
                  delivery = await sendWithFormSubmit({ nombre, empresa, correo, celular, mensaje, fechaRecepcion });
                } catch (error) {
                  formSubmitError = error;
                }
              }

              if (!delivery && resendApiKey) {
                delivery = await sendWithResend({ correo, subject: fixedSubject, html, text });
              }

              if (!delivery && formSubmitError) {
                throw formSubmitError;
              }

              if (!delivery && web3FormsError) {
                throw web3FormsError;
              }

              if (!delivery && smtpError) {
                throw smtpError;
              }

              if (!delivery) {
                throw new Error('No mail provider available');
              }

              json(res, 200, { ok: true, provider: delivery.provider, id: delivery.id });
            } catch (error) {
              const details = error?.message || 'Unknown error';
              const lowerDetails = String(details).toLowerCase();
              const sandboxHint =
                lowerDetails.includes('forbidden') || lowerDetails.includes('domain') || lowerDetails.includes('sandbox');
              const smtpHint =
                lowerDetails.includes('invalid login') ||
                lowerDetails.includes('authentication') ||
                lowerDetails.includes('535') ||
                lowerDetails.includes('username and password not accepted');
              const formSubmitHint =
                lowerDetails.includes('activate') ||
                lowerDetails.includes('verify') ||
                lowerDetails.includes('formsubmit');
              const web3FormsHint = lowerDetails.includes('web3forms') || lowerDetails.includes('access key');

              json(res, 500, {
                ok: false,
                error: 'No se pudo enviar el correo.',
                details: smtpHint
                  ? 'SMTP rechazó las credenciales. Si usas Gmail, activa verificacion en dos pasos y genera un App Password para SMTP_PASS.'
                  : web3FormsHint
                    ? 'Web3Forms rechazó el envio. Revisa que WEB3FORMS_ACCESS_KEY sea valido y esté configurado en .env.local/Vercel.'
                  : formSubmitHint
                    ? 'FormSubmit requiere activacion inicial del correo destino. Revisa la bandeja del correo configurado en FORMSUBMIT_EMAIL y confirma el enlace de activacion.'
                    : sandboxHint
                      ? 'Resend bloqueó el envío. Estás en modo sandbox o con dominio no verificado: usa como remitente onboarding@resend.dev y como destino el correo del owner de la cuenta Resend (o verifica dominio para enviar a externos).'
                      : details,
              });
            }
          });
        },
      },
    ],
    css: {
      postcss: {
        plugins: [tailwindcss({ config: './tailwind.config.cjs' }), autoprefixer()],
      },
    },
  };
});