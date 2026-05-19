import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Star, Shield, Heart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Pure Ingredients',
    desc: 'Sourced from sacred gardens across India — jasmine fields, sandalwood forests, and rose valleys.',
  },
  {
    icon: Star,
    title: 'Ancient Recipes',
    desc: 'Formulas passed down through generations, blending tradition with modern precision.',
  },
  {
    icon: Shield,
    title: 'No Chemicals',
    desc: 'Free from harmful chemicals. Only natural masala, resins, and aromatic wood powders.',
  },
  {
    icon: Heart,
    title: 'Made with Devotion',
    desc: 'Every stick is rolled with care and reverence in our time-honored workshops.',
  },
];

function ValueCard({ icon: Icon, title, desc, delay }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: 'easeOut',
      }}
      className="
        flex
        gap-4
        group
        p-4
        rounded-2xl
        transition-all
        duration-300
        hover:bg-[rgba(255,255,255,0.02)]
      "
    >
      <div
        className="
          flex-shrink-0
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          group-hover:scale-110
        "
        style={{
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.18)',
        }}
      >
        <Icon
          size={20}
          style={{
            color: 'var(--gold)',
          }}
        />
      </div>

      <div>
        <h4
          className="
            font-cinzel
            text-sm
            tracking-[0.18em]
            uppercase
            mb-2
          "
          style={{
            color: 'var(--gold)',
          }}
        >
          {title}
        </h4>

        <p
          className="
            font-cormorant
            text-lg
            leading-relaxed
          "
          style={{
            color: 'rgba(245,237,214,0.65)',
          }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{
        background:
          'linear-gradient(180deg, var(--black-rich) 0%, #130707 50%, var(--black-rich) 100%)',
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at right, rgba(91,44,111,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="
              font-cinzel
              text-xs
              tracking-[0.45em]
              uppercase
              mb-4
              block
            "
            style={{
              color: 'var(--gold)',
            }}
          >
            ✦ Our Heritage ✦
          </span>

          <h2
            className="
              font-playfair
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              mb-6
            "
            style={{
              color: 'var(--cream)',
            }}
          >
            Crafted with
            <span
              className="block"
              style={{
                color: 'var(--gold)',
              }}
            >
              Sacred Tradition
            </span>
          </h2>

          <div className="line-deco mx-auto" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 xl:gap-14 items-center">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="relative"
          >
            <div
              className="
                relative
                rounded-[30px]
                overflow-hidden
              "
              style={{
                background:
                  'linear-gradient(135deg, rgba(123,28,28,0.25) 0%, rgba(91,44,111,0.18) 50%, rgba(26,92,58,0.18) 100%)',

                border:
                  '1px solid rgba(212,175,55,0.15)',

                minHeight: '400px',

                backdropFilter: 'blur(20px)',

                boxShadow:
                  '0 0 50px rgba(212,175,55,0.06)',
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at top left, rgba(212,175,55,0.12), transparent 35%),
                    radial-gradient(circle at bottom right, rgba(232,164,184,0.10), transparent 35%)
                  `,
                }}
              />

              {/* Blur Effects */}
              <div
                className="
                  absolute
                  -top-20
                  -left-20
                  w-52
                  h-52
                  rounded-full
                  blur-3xl
                "
                style={{
                  background:
                    'rgba(212,175,55,0.08)',
                }}
              />

              <div
                className="
                  absolute
                  -bottom-20
                  -right-20
                  w-52
                  h-52
                  rounded-full
                  blur-3xl
                "
                style={{
                  background:
                    'rgba(232,164,184,0.08)',
                }}
              />

              {/* Center Content */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                {/* Rotating Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    w-[200px]
                    h-[200px]
                    rounded-full
                  "
                  style={{
                    border:
                      '1px dashed rgba(212,175,55,0.18)',
                  }}
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    w-[140px]
                    h-[140px]
                    rounded-full
                  "
                  style={{
                    border:
                      '1px dashed rgba(212,175,55,0.12)',
                  }}
                />

                {/* Logo */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10"
                >
                  <img
                    src="/logo.png"
                    alt="Sugandhit Logo"
                    className="
                      w-28 h-28
                      md:w-36 md:h-36
                      object-contain
                    "
                    style={{
                      filter:
                        'drop-shadow(0 0 35px rgba(212,175,55,0.45))',
                    }}
                  />
                </motion.div>
              </div>

              {/* Floating Stats */}
              {[
                {
                  value: '12+',
                  label: 'Fragrances',
                  top: '8%',
                  right: '5%',
                },
                {
                  value: '40yr',
                  label: 'Heritage',
                  bottom: '8%',
                  left: '5%',
                },
                {
                  value: '100%',
                  label: 'Natural',
                  top: '8%',
                  left: '5%',
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.8 + i * 0.2,
                  }}
                  className="
                    absolute
                    rounded-2xl
                    px-4
                    py-3
                    text-center
                    backdrop-blur-xl
                  "
                  style={{
                    ...stat,

                    minWidth: '90px',

                    background:
                      'rgba(20,10,10,0.45)',

                    border:
                      '1px solid rgba(212,175,55,0.15)',
                  }}
                >
                  <div
                    className="
                      font-playfair
                      text-xl
                      font-bold
                    "
                    style={{
                      color: 'var(--gold)',
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      font-jost
                      text-[10px]
                      tracking-[0.15em]
                      uppercase
                      mt-1
                    "
                    style={{
                      color:
                        'rgba(245,237,214,0.55)',
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: 'easeOut',
            }}
          >
            <p
              className="
                font-cormorant
                text-2xl
                md:text-3xl
                leading-relaxed
                mb-8
              "
              style={{
                color: 'rgba(245,237,214,0.8)',
              }}
            >
              For over four decades, Sugandhit has
              carried the sacred art of Indian
              incense-making into homes, temples,
              and hearts across the nation.
            </p>

            <p
              className="
                font-cormorant
                text-lg
                leading-relaxed
                mb-12
              "
              style={{
                color: 'rgba(245,237,214,0.55)',
              }}
            >
              Every fragrance is handcrafted using
              sacred flowers, resins, aromatic
              woods, and ancient rituals inspired by
              Vedic traditions.
            </p>

            {/* Cards */}
            <div className="space-y-5">
              {values.map((val, i) => (
                <ValueCard
                  key={val.title}
                  {...val}
                  delay={0.4 + i * 0.12}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                inView ? { opacity: 1 } : {}
              }
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <button
                className="
                  btn-outline
                  px-8
                  py-4
                  rounded-sm
                "
                onClick={() =>
                  document
                    .querySelector('#collection')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    })
                }
              >
                Discover Collection
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}