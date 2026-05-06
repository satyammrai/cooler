import { motion } from 'motion/react';

interface KapsunLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

export function KapsunLoader({ size = 'md', fullScreen = false }: KapsunLoaderProps) {
  const sizeMap = {
    sm: { container: 'w-12 h-12', star: 'w-8 h-8', inner: 'w-4 h-4' },
    md: { container: 'w-20 h-20', star: 'w-16 h-16', inner: 'w-8 h-8' },
    lg: { container: 'w-32 h-32', star: 'w-28 h-28', inner: 'w-14 h-14' }
  };

  const Star = ({ delay = 0 }: { delay?: number }) => (
    <motion.svg
      className={`absolute ${sizeMap[size].star} text-positivus-green`}
      viewBox="0 0 100 100"
      initial={{ rotate: 0, opacity: 0.3 }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'linear' }}
    >
      <g fill="currentColor">
        {/* Outer star points */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 40 * Math.cos(rad);
          const y1 = 50 + 40 * Math.sin(rad);
          return (
            <polygon
              key={angle}
              points={`50,50 ${x1},${y1} ${50 + 30 * Math.cos(rad + 0.4)},${
                50 + 30 * Math.sin(rad + 0.4)
              }`}
              opacity="0.8"
            />
          );
        })}
      </g>
    </motion.svg>
  );

  const content = (
    <div className={`${sizeMap[size].container} relative flex items-center justify-center`}>
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-full h-full rounded-full border-3 border-transparent border-t-positivus-green border-r-positivus-green"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      {/* Middle rotating ring - counter direction */}
      <motion.div
        className="absolute w-3/4 h-3/4 rounded-full border-2 border-transparent border-b-positivus-green border-l-positivus-green"
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner pulsing dot */}
      <motion.div
        className={`${sizeMap[size].inner} rounded-full bg-gradient-to-r from-positivus-green to-positivus-dark shadow-lg shadow-positivus-green/50`}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 20px rgba(185, 255, 102, 0.5)',
            '0 0 40px rgba(185, 255, 102, 0.8)',
            '0 0 20px rgba(185, 255, 102, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Rotating star elements */}
      <Star delay={0} />
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <Star delay={1} />
      </motion.div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return <div className="flex items-center justify-center">{content}</div>;
}
