import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Heart,
  ArrowUp,
} from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    'Home',
    'About Us',
    'Collection',
    'Why Choose Us',
    'Testimonials',
    'Contact',
  ],

  Fragrances: [
    'Shahi Gulab',
    'Dev Darshan',
    'Raat Rani',
    'Jasmine',
    'Kasturi',
    'Lavender',
  ],

  Company: [
    'Our Story',
    'Purity Promise',
    'Wholesale',
    'Gift Packs',
    'Privacy Policy',
    'Terms',
  ],
};

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #1A0808 0%, #0A0505 100%)',

        borderTop:
          '1px solid rgba(212,175,55,0.1)',
      }}
    >
      {/* Top Glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--gold), var(--saffron), var(--gold), transparent)',
        }}
      />

      {/* Background Ornament */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-5
        "
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.5) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div
          className="
            py-16
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            gap-10
          "
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">

            {/* Logo Only */}
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Sugandhit Logo"
                className="
                  w-32
                  md:w-40
                  object-contain
                "
                style={{
                  filter:
                    'drop-shadow(0 0 25px rgba(212,175,55,0.35))',
                }}
              />
            </div>

            {/* Description */}
            <p
              className="
                font-cormorant
                text-lg
                leading-relaxed
                mb-8
                max-w-md
              "
              style={{
                color:
                  'rgba(245,237,214,0.5)',
              }}
            >
              For over 40 years, crafting sacred
              fragrances that connect hearts to
              the divine through purity,
              devotion, and timeless traditions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  icon: Instagram,
                  label: 'Instagram',
                },
                {
                  icon: Facebook,
                  label: 'Facebook',
                },
                {
                  icon: Youtube,
                  label: 'YouTube',
                },
                {
                  icon: Twitter,
                  label: 'Twitter',
                },
              ].map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{
                    scale: 1.12,
                    y: -3,
                  }}
                  className="
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                  "
                  style={{
                    background:
                      'rgba(212,175,55,0.08)',

                    border:
                      '1px solid rgba(212,175,55,0.15)',

                    color:
                      'rgba(212,175,55,0.6)',
                  }}
                  title={label}
                >
                  <Icon size={17} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(
            ([category, links]) => (
              <div key={category}>
                <h4
                  className="
                    font-cinzel
                    text-xs
                    tracking-[0.3em]
                    uppercase
                    mb-5
                  "
                  style={{
                    color: 'var(--gold)',
                  }}
                >
                  {category}
                </h4>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        className="
                          font-cormorant
                          text-base
                          transition-all
                          duration-300
                          text-left
                          hover:translate-x-1
                        "
                        style={{
                          color:
                            'rgba(245,237,214,0.4)',
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.color =
                            'var(--gold)')
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color =
                            'rgba(245,237,214,0.4)')
                        }
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Newsletter */}
        <div
          className="
            py-8
            px-8
            rounded-[28px]
            mb-12
          "
          style={{
            background:
              'linear-gradient(135deg, rgba(123,28,28,0.3) 0%, rgba(91,44,111,0.2) 100%)',

            border:
              '1px solid rgba(212,175,55,0.1)',
          }}
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              gap-6
              items-center
              justify-between
            "
          >
            <div>
              <h4
                className="
                  font-playfair
                  text-2xl
                  font-semibold
                  mb-1
                "
                style={{
                  color: 'var(--cream)',
                }}
              >
                Stay Connected with the Sacred
              </h4>

              <p
                className="
                  font-cormorant
                  text-base
                  italic
                "
                style={{
                  color:
                    'rgba(245,237,214,0.5)',
                }}
              >
                Receive fragrance wisdom,
                spiritual stories & exclusive
                offers.
              </p>
            </div>

            {/* Input */}
            <div
              className="
                flex
                gap-3
                w-full
                md:w-auto
              "
            >
              <input
                type="email"
                placeholder="Your email address"
                className="
                  luxury-input
                  md:w-72
                "
                style={{
                  borderRadius: '6px',
                }}
              />

              <button
                className="
                  btn-primary
                  whitespace-nowrap
                  rounded-sm
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            py-6
            flex
            flex-col
            md:flex-row
            gap-4
            items-center
            justify-between
          "
          style={{
            borderTop:
              '1px solid rgba(212,175,55,0.08)',
          }}
        >
          <div
            className="
              font-jost
              text-xs
              tracking-widest
            "
            style={{
              color:
                'rgba(245,237,214,0.25)',
            }}
          >
            © {new Date().getFullYear()} Anjani Dhoop
      Fragrances. All rights
            reserved.
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              font-jost
              text-xs
            "
            style={{
              color:
                'rgba(245,237,214,0.25)',
            }}
          >
            Made with{' '}
            <Heart
              size={10}
              fill="var(--petal)"
              style={{
                color: 'var(--petal)',
              }}
            />{' '}
            in Bijawar, India
          </div>

          {/* Scroll Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.1,
              y: -2,
            }}
            className="
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
            "
            style={{
              background:
                'rgba(212,175,55,0.1)',

              border:
                '1px solid rgba(212,175,55,0.2)',

              color: 'var(--gold)',
            }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}