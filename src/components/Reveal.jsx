import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Fades and slides content up into view once, the first time it enters the
 * viewport — a drop-in replacement for the original CSS `.reveal` class,
 * which relied on an IntersectionObserver toggling an `.in` class.
 */
export default function Reveal({ as = 'div', className = '', delay = 0, children, ...props }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
