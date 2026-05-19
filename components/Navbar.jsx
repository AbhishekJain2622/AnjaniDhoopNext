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

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: 'easeOut',
        }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10, 5, 5, 0.96)'
            : 'transparent',

          backdropFilter: scrolled ? 'blur(20px)' : 'none',

          borderBottom: scrolled
            ? '1px solid rgba(212,175,55,0.12)'
            : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[90px] flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center group"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="
                w-14 h-14
                sm:w-16 sm:h-16
                md:w-20 md:h-20
                lg:w-24 lg:h-24
                object-contain
                transition-all
                duration-300
                group-hover:scale-105
              "
              style={{
                filter:
                  'drop-shadow(0 0 18px rgba(212,175,55,0.45))',
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="
                    nav-link
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav('#collection')}
              className="
                btn-primary
                text-sm
                px-7
                py-3
                rounded-sm
              "
            >
              Shop Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--gold)' }}
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-[110]
              flex
              flex-col
              items-center
              justify-center
            "
            style={{
              background: 'rgba(10,5,5,0.98)',
              backdropFilter: 'blur(30px)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6"
              style={{ color: 'var(--gold)' }}
            >
              <X size={30} />
            </button>

            {/* Mobile Brand */}
            <div className="mb-12 text-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24 object-contain mx-auto"
                style={{
                  filter:
                    'drop-shadow(0 0 18px rgba(212,175,55,0.45))',
                }}
              />
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="
                      font-cinzel
                      text-xl
                      tracking-[0.2em]
                      uppercase
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                    style={{
                      color: 'var(--cream)',
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <button
                onClick={() => handleNav('#collection')}
                className="
                  btn-primary
                  px-8
                  py-3
                  rounded-sm
                "
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