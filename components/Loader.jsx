import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'var(--black-rich)' }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(123,28,28,0.3) 0%, transparent 70%)',
            }}
          />

          {/* Ornamental circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute w-48 h-48 rounded-full"
            style={{ border: '1px solid rgba(212,175,55,0.1)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute w-64 h-64 rounded-full"
            style={{ border: '1px solid rgba(212,175,55,0.06)' }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-80 h-80 rounded-full"
            style={{ border: '1px solid rgba(212,175,55,0.04)' }}
          />

          {/* Brand mark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative z-10 text-center mb-8"
          >
            {/* Flame icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-5xl mb-4"
              style={{ filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.8))' }}
            >
              🪔
            </motion.div>
            <div
              className="font-cinzel text-2xl tracking-[0.4em] uppercase mb-1"
              style={{ color: 'var(--gold)' }}
            >
              Sugandhit
            </div>
            <div
              className="font-cormorant italic text-sm tracking-[0.3em]"
              style={{ color: 'rgba(212,175,55,0.5)' }}
            >
              Sacred Fragrances
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 w-48">
            <div
              className="w-full h-px"
              style={{ background: 'rgba(212,175,55,0.15)' }}
            >
              <motion.div
                className="h-full loader-bar"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div
              className="mt-2 text-center font-jost text-xs tracking-widest"
              style={{ color: 'rgba(212,175,55,0.4)' }}
            >
              {Math.min(Math.round(progress), 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
