import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from './productsData';
import { Filter } from 'lucide-react';

const categories = ['All', 'Floral', 'Sacred', 'Nocturnal', 'Resin', 'Musk', 'Herbal', 'Exotic', 'Signature'];

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--black-rich)' }}
    >
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 10% 50%, rgba(123,28,28,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 50%, rgba(91,44,111,0.1) 0%, transparent 50%)
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
            style={{ color: 'var(--saffron)' }}
          >
            ✦ Our Fragrances ✦
          </span>
          <h2
            className="font-playfair text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--cream)' }}
          >
            The Sacred{' '}
            <span className="gradient-text-gold">Collection</span>
          </h2>
          <p
            className="font-cormorant text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(245,237,214,0.55)' }}
          >
            Twelve unique fragrances, each a story of devotion and nature's finest essences
          </p>
          <div className="line-deco" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <Filter size={14} style={{ color: 'rgba(212,175,55,0.5)', alignSelf: 'center' }} />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-cinzel text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, var(--gold), var(--saffron))'
                  : 'rgba(255,255,255,0.04)',
                color: activeCategory === cat ? 'var(--black-rich)' : 'rgba(245,237,214,0.5)',
                border: activeCategory === cat
                  ? '1px solid transparent'
                  : '1px solid rgba(212,175,55,0.15)',
                fontWeight: activeCategory === cat ? '600' : '400',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <p
            className="font-cormorant italic text-xl mb-6"
            style={{ color: 'rgba(245,237,214,0.5)' }}
          >
            Looking for gift packs & wholesale orders?
          </p>
          <button
            className="btn-outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us for Bulk Orders
          </button>
        </motion.div>
      </div>
    </section>
  );
}
