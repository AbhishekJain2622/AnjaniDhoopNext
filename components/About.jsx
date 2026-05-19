import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Star, Shield, Heart } from 'lucide-react';

const values = [
  { icon: Leaf, title: 'Pure Ingredients', desc: 'Sourced from sacred gardens across India — jasmine fields, sandalwood forests, and rose valleys.' },
  { icon: Star, title: 'Ancient Recipes', desc: 'Formulas passed down through generations, blending tradition with modern precision.' },
  { icon: Shield, title: 'No Chemicals', desc: 'Free from harmful chemicals. Only natural masala, resins, and aromatic wood powders.' },
  { icon: Heart, title: 'Made with Devotion', desc: 'Every stick is rolled with care and reverence in our time-honored workshops.' },
];

function ValueCard({ icon: Icon, title, desc, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className="flex gap-4 group"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'rgba(212,175,55,0.1)',
          border: '1px solid rgba(212,175,55,0.3)',
        }}
      >
        <Icon size={20} style={{ color: 'var(--gold)' }} />
      </div>
      <div>
        <h4
          className="font-cinzel text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--gold)' }}
        >
          {title}
        </h4>
        <p
          className="font-cormorant text-lg leading-relaxed"
          style={{ color: 'rgba(245,237,214,0.65)' }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--black-rich) 0%, #1A0808 50%, var(--black-rich) 100%)',
      }}
    >
      {/* BG Ornament */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right, rgba(91,44,111,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4 block"
            style={{ color: 'var(--gold)' }}
          >
            ✦ Our Heritage ✦
          </span>
          <h2
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--cream)' }}
          >
            Where{' '}
            <em
              className="italic"
              style={{ color: 'var(--petal)' }}
            >
              Tradition
            </em>{' '}
            Meets
            <span className="gradient-text-gold block">
              Pure Divinity
            </span>
          </h2>
          <div className="line-deco" />
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main visual card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(123,28,28,0.3) 0%, rgba(91,44,111,0.2) 50%, rgba(26,92,58,0.2) 100%)',
                border: '1px solid rgba(212,175,55,0.15)',
                minHeight: '480px',
              }}
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 20%, rgba(212,175,55,0.3) 0%, transparent 40%),
                    radial-gradient(circle at 80% 80%, rgba(232,164,184,0.3) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 60%)
                  `,
                }}
              />

              {/* Central visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-64 h-64 rounded-full"
                  style={{ border: '1px dashed rgba(212,175,55,0.2)' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-44 h-44 rounded-full"
                  style={{ border: '1px dashed rgba(212,175,55,0.15)' }}
                />

                {/* Center icon */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    filter: [
                      'drop-shadow(0 0 20px rgba(212,175,55,0.6))',
                      'drop-shadow(0 0 40px rgba(212,175,55,0.9))',
                      'drop-shadow(0 0 20px rgba(212,175,55,0.6))',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-8xl relative z-10"
                >
                  🪔
                </motion.div>

                <motion.div
                  className="relative z-10 mt-8 text-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div
                    className="font-cinzel text-3xl font-bold"
                    style={{ color: 'var(--gold)' }}
                  >
                    1985
                  </div>
                  <div
                    className="font-cormorant italic text-base mt-1"
                    style={{ color: 'rgba(245,237,214,0.5)' }}
                  >
                    Founded in Kanpur, India
                  </div>
                </motion.div>
              </div>

              {/* Floating stats */}
              {[
                { value: '12+', label: 'Fragrances', top: '10%', right: '5%' },
                { value: '40yr', label: 'Heritage', bottom: '10%', left: '5%' },
                { value: '100%', label: 'Pure', top: '10%', left: '5%' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="absolute glass-maroon rounded-xl p-3 text-center"
                  style={{ ...stat, minWidth: '80px' }}
                >
                  <div
                    className="font-playfair text-xl font-bold"
                    style={{ color: 'var(--gold)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-jost text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(245,237,214,0.5)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative corner elements */}
            <div
              className="absolute -top-3 -left-3 w-12 h-12"
              style={{ border: '2px solid var(--gold)', borderRight: 'none', borderBottom: 'none', opacity: 0.4 }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-12 h-12"
              style={{ border: '2px solid var(--gold)', borderLeft: 'none', borderTop: 'none', opacity: 0.4 }}
            />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <p
              className="font-cormorant text-xl md:text-2xl leading-relaxed mb-8"
              style={{ color: 'rgba(245,237,214,0.8)' }}
            >
              For over four decades, Sugandhit has carried the sacred art of Indian
              incense-making into homes, temples, and hearts across the nation. We believe
              that fragrance is the{' '}
              <em style={{ color: 'var(--petal)' }}>
                purest bridge between the earthly and the divine.
              </em>
            </p>
            <p
              className="font-cormorant text-lg leading-relaxed mb-12"
              style={{ color: 'rgba(245,237,214,0.55)' }}
            >
              Each stick is hand-rolled using masalas prepared from fresh flowers, sacred
              resins, aromatic bark, and mineral-rich soils — following rituals that
              date back to the Vedic era. No chemicals. No shortcuts. Only purity.
            </p>

            <div className="space-y-7">
              {values.map((val, i) => (
                <ValueCard key={val.title} {...val} delay={0.4 + i * 0.12} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <button
                className="btn-outline"
                onClick={() => document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover Our Collection
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
