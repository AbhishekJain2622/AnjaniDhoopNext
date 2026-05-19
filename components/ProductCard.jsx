import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="relative group cursor-none"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setFlipped(false); }}
      data-cursor="hover"
    >
      {/* Card */}
      <div
        className="relative overflow-hidden rounded-xl transition-all duration-500"
        style={{
          background: product.theme.bg,
          border: `1px solid ${hovered ? 'rgba(212,175,55,0.3)' : 'rgba(212,175,55,0.08)'}`,
          boxShadow: hovered
            ? `0 20px 60px ${product.theme.glow}, 0 0 1px rgba(212,175,55,0.2)`
            : '0 4px 20px rgba(0,0,0,0.5)',
          transform: hovered ? 'translateY(-8px)' : 'none',
          minHeight: '340px',
        }}
      >
        {/* Glow overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${product.theme.glow} 0%, transparent 60%)`,
              }}
            />
          )}
        </AnimatePresence>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.4)',
              border: `1px solid ${product.theme.accent}40`,
              color: product.theme.accent,
              backdropFilter: 'blur(10px)',
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Main visual */}
        <div className="pt-14 pb-6 px-6 flex flex-col items-center">
          {/* Emoji / product visual */}
          <motion.div
            animate={hovered ? {
              y: [-4, 4, -4],
              rotate: [-3, 3, -3],
            } : { y: 0, rotate: 0 }}
            transition={hovered ? {
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            } : { duration: 0.3 }}
            className="text-7xl mb-4 relative"
            style={{
              filter: hovered
                ? `drop-shadow(0 0 30px ${product.theme.glow})`
                : `drop-shadow(0 0 10px ${product.theme.glow})`,
            }}
          >
            {product.emoji}
          </motion.div>

          {/* Rotating glow ring on hover */}
          {hovered && (
            <motion.div
              className="absolute rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '100px',
                height: '100px',
                top: '50px',
                border: `1px solid ${product.theme.accent}40`,
              }}
            />
          )}

          {/* Product names */}
          <div className="text-center mt-2">
            <div
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-1"
              style={{ color: product.theme.accent + 'AA' }}
            >
              {product.nameHindi}
            </div>
            <h3
              className="font-playfair text-2xl font-bold mb-1"
              style={{ color: '#F5EDD6' }}
            >
              {product.name}
            </h3>
            <div
              className="font-cormorant italic text-sm"
              style={{ color: product.theme.accent + '99' }}
            >
              {product.subtitle}
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-12 h-px my-4"
            style={{
              background: `linear-gradient(to right, transparent, ${product.theme.accent}, transparent)`,
            }}
          />

          {/* Description (visible on hover) */}
          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="font-cormorant text-sm text-center leading-relaxed mb-4"
                style={{ color: 'rgba(245,237,214,0.65)' }}
              >
                {product.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Scent notes */}
          <div className="flex flex-wrap gap-1.5 justify-center mt-1">
            {product.notes.map(note => (
              <span
                key={note}
                className="font-jost text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: `${product.theme.primary}60`,
                  border: `1px solid ${product.theme.accent}30`,
                  color: `${product.theme.accent}BB`,
                }}
              >
                {note}
              </span>
            ))}
          </div>

          {/* Intensity bar */}
          <div className="w-full mt-5">
            <div className="flex justify-between items-center mb-1.5">
              <span
                className="font-cinzel text-xs tracking-widest"
                style={{ color: 'rgba(245,237,214,0.4)' }}
              >
                INTENSITY
              </span>
              <span
                className="font-jost text-xs font-medium"
                style={{ color: product.theme.accent }}
              >
                {product.intensity}%
              </span>
            </div>
            <div
              className="w-full h-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${product.intensity}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                style={{
                  background: `linear-gradient(to right, ${product.theme.primary}, ${product.theme.accent})`,
                }}
              />
            </div>
          </div>

          {/* Mood tag */}
          <div className="mt-4 flex items-center gap-2">
            <span
              className="font-cinzel text-xs tracking-widest uppercase"
              style={{ color: 'rgba(245,237,214,0.3)' }}
            >
              Mood:
            </span>
            <span
              className="font-cormorant italic text-sm"
              style={{ color: product.theme.accent }}
            >
              {product.mood}
            </span>
          </div>
        </div>

        {/* Hover CTA */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="px-6 pb-6 flex gap-3"
            >
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-cinzel text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${product.theme.primary}, ${product.theme.secondary})`,
                  color: '#F5EDD6',
                  border: `1px solid ${product.theme.accent}30`,
                }}
              >
                <ShoppingBag size={14} />
                Add to Cart
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${product.theme.accent}30`,
                  color: product.theme.accent,
                }}
              >
                <Eye size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
