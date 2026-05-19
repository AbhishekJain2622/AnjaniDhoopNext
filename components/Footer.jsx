import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Twitter, Heart, ArrowUp } from 'lucide-react';

const footerLinks = {
  'Quick Links': ['Home', 'About Us', 'Collection', 'Why Choose Us', 'Testimonials', 'Contact'],
  'Fragrances': ['Shahi Gulab', 'Dev Darshan', 'Raat Rani', 'Jasmine', 'Kasturi', 'Lavender'],
  'Company': ['Our Story', 'Purity Promise', 'Wholesale', 'Gift Packs', 'Privacy Policy', 'Terms'],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A0808 0%, #0A0505 100%)',
        borderTop: '1px solid rgba(212,175,55,0.1)',
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, var(--gold), var(--saffron), var(--gold), transparent)',
        }}
      />

      {/* Background ornament */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(212,175,55,0.5) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-3xl"
                style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.6))' }}
              >
                🪔
              </span>
              <div>
                <div
                  className="font-cinzel text-xl tracking-[0.25em]"
                  style={{ color: 'var(--gold)' }}
                >
                  Sugandhit
                </div>
                <div
                  className="font-cormorant italic text-xs tracking-widest"
                  style={{ color: 'rgba(212,175,55,0.4)' }}
                >
                  Sacred Fragrances
                </div>
              </div>
            </div>
            <p
              className="font-cormorant text-lg leading-relaxed mb-6"
              style={{ color: 'rgba(245,237,214,0.5)' }}
            >
              For over 40 years, crafting sacred fragrances that connect hearts
              to the divine. Pure ingredients, ancient traditions, and modern excellence.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    color: 'rgba(212,175,55,0.5)',
                  }}
                  title={label}
                  data-cursor="hover"
                >
                  <Icon size={15} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-cinzel text-xs tracking-[0.3em] uppercase mb-5"
                style={{ color: 'var(--gold)' }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <button
                      className="font-cormorant text-base transition-colors duration-200 hover:text-gold-400 text-left"
                      style={{ color: 'rgba(245,237,214,0.4)' }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(245,237,214,0.4)'}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          className="py-8 px-8 rounded-2xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(123,28,28,0.3) 0%, rgba(91,44,111,0.2) 100%)',
            border: '1px solid rgba(212,175,55,0.1)',
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h4
                className="font-playfair text-2xl font-semibold mb-1"
                style={{ color: 'var(--cream)' }}
              >
                Stay Connected with the Sacred
              </h4>
              <p
                className="font-cormorant text-base italic"
                style={{ color: 'rgba(245,237,214,0.5)' }}
              >
                Receive fragrance wisdom, offers & spiritual stories
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="luxury-input md:w-64"
                style={{ borderRadius: 0 }}
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col md:flex-row gap-4 items-center justify-between"
          style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
        >
          <div
            className="font-jost text-xs tracking-widest"
            style={{ color: 'rgba(245,237,214,0.25)' }}
          >
            © {new Date().getFullYear()} Sugandhit Sacred Fragrances. All rights reserved.
          </div>
          <div
            className="flex items-center gap-2 font-jost text-xs"
            style={{ color: 'rgba(245,237,214,0.25)' }}
          >
            Made with{' '}
            <Heart size={10} fill="var(--petal)" style={{ color: 'var(--petal)' }} />
            {' '}in Kanpur, India
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.2)',
              color: 'var(--gold)',
            }}
            data-cursor="hover"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
