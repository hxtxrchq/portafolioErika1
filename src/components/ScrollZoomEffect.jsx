import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollZoomEffect({ children, isFirst = false, className = '' }) {
  const containerRef = useRef(null);

  // We track the scroll progress of this specific section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Define scale:
  // If it's the first section (Hero), we want it to start fully scaled (1.0) and stay at 1.0.
  // For other sections, they enter at 0.97 and scale up to 1.0 by the time they reach 35% of their scroll path.
  const scaleTarget = isFirst
    ? [1, 1, 0.98, 0.95]
    : [0.97, 1, 1, 0.95];

  const opacityTarget = isFirst
    ? [1, 1, 0.5, 0]
    : [0, 1, 1, 0];

  // Direct scroll-linked values for maximum performance and fluid rendering without physics overhead
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.65, 1], scaleTarget);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], opacityTarget);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className={className}
    >
      {isFirst ? (
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ width: '100%', height: '100%' }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
