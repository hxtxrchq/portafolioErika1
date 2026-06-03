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
  // For other sections, they enter at 0.88 and scale up to 1.0 by the time they reach 35% of their scroll path.
  const scaleTarget = isFirst
    ? [1, 1, 0.95, 0.9]
    : [0.88, 1, 1, 0.9];

  const opacityTarget = isFirst
    ? [1, 1, 0.5, 0]
    : [0, 1, 1, 0];

  // We map the scroll progress (from 0 to 1) to our target scale and opacity values
  // By spreading the transition from 0 to 0.45, it happens more gradually as you scroll.
  const scaleRaw = useTransform(scrollYProgress, [0, 0.45, 0.65, 1], scaleTarget);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], opacityTarget);

  // Adjusted spring values (lower stiffness, higher mass, appropriate damping) for a slower, very smooth "floaty" look
  const scale = useSpring(scaleRaw, { stiffness: 45, damping: 22, mass: 0.8 });
  const opacity = useSpring(opacityRaw, { stiffness: 45, damping: 22, mass: 0.8 });

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className={className}
    >
      {isFirst ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
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
