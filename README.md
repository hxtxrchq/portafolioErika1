# Editorial Landing - React + Vite

Landing page premium para portafolio gerencial, consultoría y voz en off.

## Ejecutar

```bash
npm install
npm run dev
```

## Formulario de contacto con Resend (sin backend tradicional)

El proyecto usa una funcion serverless en `api/contact.js` para enviar correos con Resend.

1. Crea una cuenta en Resend y genera tu API key.
2. En local, crea un archivo `.env.local` en la raiz con:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL="Erika <onboarding@resend.dev>"
RESEND_TO_EMAIL=alonsoparedes1@gmail.com
```

3. En Vercel, configura las mismas variables en Project Settings > Environment Variables.
4. Despliega y prueba el formulario desde la URL de Vercel.

Notas:
- `RESEND_FROM_EMAIL` debe ser un remitente permitido por Resend.
- Para produccion profesional, usa un dominio verificado en Resend.
- En desarrollo local con `vite`, la ruta `api/contact` no corre automaticamente. Para probar end-to-end, usa preview en Vercel o `vercel dev`.

## Alternativa sin dominio verificado: SMTP (Gmail u otro)

Si Resend te bloquea por sandbox o dominio en pending, el endpoint ahora intenta enviar por SMTP primero y usa Resend como respaldo.

Variables (Vercel o `.env.local`):

```bash
SMTP_SERVICE=gmail
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_app_password
SMTP_FROM_EMAIL="Erika <tu_correo@gmail.com>"
RESEND_TO_EMAIL=destino@correo.com
```

Notas SMTP:
- Para Gmail necesitas verificacion en dos pasos y App Password (no tu clave normal).
- Tambien puedes usar SMTP_HOST/SMTP_PORT/SMTP_SECURE para otros proveedores.
- Puedes validar estado en `/api/contact` (GET).

## Alternativa ultra rapida sin dominio: FormSubmit

El endpoint tambien intenta enviar con FormSubmit cuando defines `FORMSUBMIT_EMAIL`.

1. Configura `FORMSUBMIT_EMAIL=tu_correo@dominio.com` en Vercel.
2. Haz deploy y envia un formulario.
3. FormSubmit enviara un correo de activacion al destino: debes confirmar una vez.
4. Desde ahi, los formularios siguientes ya llegaran a ese correo.

## Alternativa sin dominio ni activacion por email: Web3Forms

Tambien puedes usar Web3Forms para evitar el paso de activacion de FormSubmit.

1. Crea una key en Web3Forms.
2. Configura `WEB3FORMS_ACCESS_KEY=tu_key` en Vercel.
3. Configura `VITE_WEB3FORMS_ACCESS_KEY=tu_key` para habilitar fallback directo desde navegador.
3. Haz deploy y prueba el formulario.

Orden actual de envio: SMTP -> Web3Forms -> FormSubmit -> Resend.

Nota: en plan gratis de Web3Forms las llamadas server-to-server pueden bloquearse; por eso se agregó fallback directo desde frontend con `VITE_WEB3FORMS_ACCESS_KEY`.

## Stack

- React + Vite
- CSS Modules
- Framer Motion
- Resend (email)

## Estructura

- `src/components/*` componentes reutilizables de secciones
- `src/data/services.js`
- `src/data/portfolio.js`
- `src/data/testimonials.js`
