import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import { ChevronDown, Sparkles } from 'lucide-react';

// Smoke particle component
function SmokeParticle({ style }) {
  return (
    <div
      className="absolute smoke-particle pointer-events-none"
      style={style}
    />
  );
}

// Floating gold particle
function GoldParticle({ delay, left, size, duration }) {
  const [screenHeight, setScreenHeight] = useState(800);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight);
    }
  }, []);

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${left}%`,
        bottom: '-10px',
        width: size,
        height: size,
        background: 'rgba(212, 175, 55, 0.6)',
        boxShadow: '0 0 6px rgba(212, 175, 55, 0.8)',
      }}
      animate={{
        y: [0, -screenHeight],
        x: [0, Math.random() > 0.5 ? 60 : -60],
        opacity: [0, 0.8, 0.4, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  delay: (i * 0.7) % 8,
  left: (i * 5.3) % 100,
  size: `${Math.random() * 4 + 2}px`,
  duration: 8 + (i % 5) * 2,
}));

const smokeParticles = [
  {
    width: '30px',
    height: '60px',
    bottom: '20%',
    left: '50%',
    animationDuration: '6s',
    animationDelay: '0s',
  },
  {
    width: '20px',
    height: '40px',
    bottom: '22%',
    left: '48%',
    animationDuration: '7s',
    animationDelay: '2s',
  },
  {
    width: '25px',
    height: '50px',
    bottom: '21%',
    left: '52%',
    animationDuration: '8s',
    animationDelay: '1s',
  },
];

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.4,
        delay: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const handleScroll = () => {
    document
      .querySelector('#about')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShop = () => {
    document
      .querySelector('#collection')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[92vh] pt-28 md:pt-36 flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--black-rich)' }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(123,28,28,0.5) 0%, transparent 70%)',
              'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(165,32,32,0.4) 0%, transparent 70%)',
              'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(123,28,28,0.5) 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 20% 20%, rgba(91,44,111,0.2) 0%, transparent 60%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 30% at 80% 80%, rgba(212,175,55,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Mandala pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 60px, rgba(212,175,55,0.05) 61px, transparent 62px),
            repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 100px, rgba(212,175,55,0.03) 101px, transparent 102px),
            repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 150px, rgba(212,175,55,0.02) 151px, transparent 152px)
          `,
        }}
      />

      {/* Floating gold particles */}
      {particles.map((p) => (
        <GoldParticle key={p.id} {...p} />
      ))}

      {/* Smoke particles */}
      {smokeParticles.map((s, i) => (
        <SmokeParticle key={i} style={s} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={80}
            className="object-contain"
            priority
          />

        
        </motion.div>

        {/* Main title */}
        <div ref={titleRef} style={{ opacity: 0 }}>
          <h1 className="font-playfair font-bold leading-none mb-4">
            <span
              className="block text-5xl md:text-7xl lg:text-8xl gradient-text-gold"
              style={{ lineHeight: 1.05 }}
            >
             Anjani Dhoop
            </span>

            <span
              className="block text-5xl md:text-7xl lg:text-8xl"
              style={{
                color: 'var(--cream)',
                lineHeight: 1.05,
              }}
            >
              Fragrances
            </span>

            <span
              className="block text-3xl md:text-4xl lg:text-5xl italic"
              style={{
                color: 'var(--petal)',
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              of the Sacred
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-cormorant text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(245,237,214,0.7)' }}
        >
          Crafted from the purest flowers, resins, and sacred woods —
          each fragrance is a devotion in itself. Let the ancient aromas
          elevate your spirit.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleShop}
            className="btn-primary flex items-center gap-2"
          >
            <Sparkles size={16} />
            Explore Collection
          </motion.button>

          {/* <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline"
            onClick={() =>
              document
                .querySelector('#about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Our Story
          </motion.button> */}
        </motion.div>

        {/* Product badges */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          {[
            'Shahi Gulab',
            'Jasmine',
            'Raat Rani',
            'Dev Darshan',
            'Kasturi',
          ].map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 + i * 0.1 }}
              className="glass px-4 py-1.5 rounded-full font-jost text-xs tracking-widest uppercase"
              style={{ color: 'rgba(212,175,55,0.8)' }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div> */}
      </div>
      {/* Large incense stick visual */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.3, scaleY: 1 }}
        style={{ originY: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.5,
          ease: 'easeOut',
        }}
      >
        <div
          className="w-0.5 h-40 mx-auto"
          style={{
            background:
              'linear-gradient(to top, var(--gold), transparent)',
          }}
        />

        <div
          className="w-2 h-2 rounded-full mx-auto -mt-1"
          style={{
            background: 'var(--gold)',
            boxShadow:
              '0 0 20px rgba(212,175,55,0.9), 0 0 40px rgba(212,175,55,0.5)',
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ color: 'rgba(212,175,55,0.5)' }}
      >
        {/* <span
          className="font-cinzel text-xs tracking-[0.3em] uppercase"
          style={{ color: 'rgba(212,175,55,0.4)' }}
        >
          Scroll
        </span> */}

        <ChevronDown size={16} />
      </motion.button>
      
    </section>
  );
}