import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Award, Flame, Wind, Globe, Heart, Star, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Pure Natural Ingredients',
    desc: 'We use only unprocessed natural masalas — fresh flowers, sacred resins, aromatic bark and mineral-rich soils.',
    color: '#1A5C3A',
    accent: '#5A8C5A',
  },
  {
    icon: Award,
    title: '40+ Years of Excellence',
    desc: 'Over four decades of mastery in the art of Indian incense-making, trusted by millions of families.',
    color: '#7B5A1A',
    accent: '#D4AF37',
  },
  {
    icon: Flame,
    title: 'Long-Lasting Fragrance',
    desc: 'Each stick burns evenly for 30–45 minutes, releasing a steady, consistent fragrance to fill your space.',
    color: '#7B1C1C',
    accent: '#C4607A',
  },
  {
    icon: Wind,
    title: 'Zero Toxic Smoke',
    desc: 'Made with charcoal-free, chemical-free bamboo sticks that produce no harmful smoke or residue.',
    color: '#1A1A5C',
    accent: '#7A7AE8',
  },
  {
    icon: Globe,
    title: 'Sustainably Sourced',
    desc: 'Our ingredients are ethically harvested from organic farms and pristine forests across India.',
    color: '#1A5C4A',
    accent: '#2A9C7A',
  },
  {
    icon: Heart,
    title: 'Hand-Rolled with Care',
    desc: 'Every single stick is hand-rolled by skilled artisans following time-honored Vedic traditions.',
    color: '#7B3A5C',
    accent: '#B06090',
  },
  {
    icon: Star,
    title: 'Premium Packaging',
    desc: 'Presented in exquisite packaging that makes our incense sticks ideal as spiritual gifts and offerings.',
    color: '#4A2A6B',
    accent: '#7A5AAB',
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    desc: 'ISO certified and approved by quality standards. Our fragrances have zero adulterants or substitutes.',
    color: '#5C2A1A',
    accent: '#9C5040',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-xl p-6 transition-all duration-500 cursor-none"
      style={{
        background: `linear-gradient(135deg, ${feature.color}20 0%, rgba(10,5,5,0.8) 100%)`,
        border: `1px solid ${feature.color}30`,
      }}
      whileHover={{
        scale: 1.03,
        borderColor: `${feature.accent}60`,
        boxShadow: `0 20px 50px ${feature.color}40`,
      }}
      data-cursor="hover"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${feature.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 15, scale: 1.1 }}
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: `${feature.color}40`,
          border: `1px solid ${feature.accent}30`,
        }}
      >
        <Icon size={24} style={{ color: feature.accent }} />
      </motion.div>

      {/* Content */}
      <h3
        className="font-playfair text-xl font-semibold mb-3"
        style={{ color: 'var(--cream)' }}
      >
        {feature.title}
      </h3>
      <p
        className="font-cormorant text-base leading-relaxed"
        style={{ color: 'rgba(245,237,214,0.6)' }}
      >
        {feature.desc}
      </p>

      {/* Accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 rounded-b-xl"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: (index % 4) * 0.1 + 0.4 }}
        style={{
          background: `linear-gradient(to right, transparent, ${feature.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function WhyUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--black-rich) 0%, #120808 50%, var(--black-rich) 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(212,175,55,0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(123,28,28,0.06) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4 block"
            style={{ color: 'var(--petal)' }}
          >
            ✦ Our Promise ✦
          </span>
          <h2
            className="font-playfair text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--cream)' }}
          >
            Why{' '}
            <span className="gradient-text-gold">Choose Us</span>
          </h2>
          <p
            className="font-cormorant text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(245,237,214,0.55)' }}
          >
            We don't just make incense — we craft experiences that connect you to the divine
          </p>
          <div className="line-deco" />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: '40+', label: 'Years of Mastery' },
            { num: '12', label: 'Unique Fragrances' },
            { num: '5M+', label: 'Happy Customers' },
            { num: '100%', label: 'Natural Purity' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center glass-maroon rounded-xl p-6"
            >
              <div
                className="font-playfair text-4xl font-bold gradient-text-gold"
                style={{ lineHeight: 1 }}
              >
                {stat.num}
              </div>
              <div
                className="font-cinzel text-xs tracking-widest uppercase mt-2"
                style={{ color: 'rgba(245,237,214,0.5)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
