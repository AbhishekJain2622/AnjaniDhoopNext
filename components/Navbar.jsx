import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10, 5, 5, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,55,0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-3 group"
          >
            <span className="text-2xl" style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' }}>
              🪔
            </span>
            <div>
              <div
                className="font-cinzel text-lg tracking-[0.25em] leading-none"
                style={{ color: 'var(--gold)' }}
              >
                Sugandhit
              </div>
              <div
                className="font-cormorant italic text-xs tracking-[0.2em]"
                style={{ color: 'rgba(212,175,55,0.5)' }}
              >
                Sacred Fragrances
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('#collection')}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gold"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--gold)' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center"
            style={{ background: 'rgba(10,5,5,0.98)', backdropFilter: 'blur(30px)' }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6"
              style={{ color: 'var(--gold)' }}
            >
              <X size={28} />
            </button>

            {/* Brand */}
            <div className="mb-12 text-center">
              <span className="text-4xl">🪔</span>
              <div
                className="font-cinzel text-2xl tracking-[0.3em] mt-3"
                style={{ color: 'var(--gold)' }}
              >
                Sugandhit
              </div>
            </div>

            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-cinzel text-xl tracking-[0.2em] uppercase"
                    style={{ color: 'var(--cream)' }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <button
                onClick={() => handleNav('#collection')}
                className="btn-primary"
              >
                Shop Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
