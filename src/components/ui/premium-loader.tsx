import { motion } from 'motion/react';

interface PremiumLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
  variant?: 'star' | 'rings' | 'burst';
}

export function PremiumLoader({
  size = 'md',
  fullScreen = false,
  text = 'Loading',
  variant = 'star'
}: PremiumLoaderProps) {
  const sizeMap = {
    sm: { container: 'w-12 h-12', text: 'text-xs' },
    md: { container: 'w-20 h-20', text: 'text-sm' },
    lg: { container: 'w-32 h-32', text: 'text-lg' }
  };

  // Variant 1: Star Burst (Logo inspired)
  const StarBurst = () => (
    <div className={`${sizeMap[size].container} relative`}>
      {/* Central pulsing circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-positivus-green/40 to-positivus-green/10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Rotating outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-positivus-green border-r-positivus-green"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      {/* Star points */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-1 h-1 bg-positivus-green rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-2px',
            marginTop: '-2px'
          }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * 30,
            y: Math.sin((angle * Math.PI) / 180) * 30,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: (i * 0.2) % 2
          }}
        />
      ))}

      {/* Center dot */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-positivus-green rounded-full shadow-lg shadow-positivus-green/60" />
      </motion.div>
    </div>
  );

  // Variant 2: Concentric Rings
  const RingsLoader = () => (
    <div className={`${sizeMap[size].container} relative`}>
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute inset-0 rounded-full border-2 border-positivus-green/40"
          animate={{
            scale: [0.8, 1.2],
            opacity: [1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: ring * 0.3,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Inner rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-3 border-transparent border-t-positivus-green border-r-positivus-green"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-2 h-2 bg-positivus-green rounded-full"
          animate={{ scale: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );

  // Variant 3: Burst Effect
  const BurstLoader = () => (
    <div className={`${sizeMap[size].container} relative`}>
      {/* Radiating lines */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(
        (angle, i) => (
          <motion.div
            key={angle}
            className="absolute left-1/2 top-1/2 w-0.5 h-4 bg-positivus-green origin-center"
            style={{
              transform: `rotate(${angle}deg) translateY(-20px)`
            }}
            animate={{
              scaleY: [0.3, 1, 0.3],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: (i * 0.08) % 1.2
            }}
          />
        )
      )}

      {/* Center circle */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-3 h-3 bg-gradient-to-r from-positivus-green to-positivus-dark rounded-full shadow-lg shadow-positivus-green/70" />
      </motion.div>
    </div>
  );

  const loaderContent = (
    <div className="flex flex-col items-center gap-6">
      <div className={`${sizeMap[size].container}`}>
        {variant === 'star' && <StarBurst />}
        {variant === 'rings' && <RingsLoader />}
        {variant === 'burst' && <BurstLoader />}
      </div>

      {text && (
        <motion.div
          className={`${sizeMap[size].text} font-bold text-positivus-dark tracking-widest uppercase`}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-b from-white to-positivus-grey/20 backdrop-blur-sm flex items-center justify-center z-50"
      >
        {loaderContent}
      </motion.div>
    );
  }

  return <div className="flex items-center justify-center">{loaderContent}</div>;
}
