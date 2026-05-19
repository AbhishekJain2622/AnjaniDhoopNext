'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi, India',
    role: 'Devotee & Homemaker',
    text: 'Sugandhit\'s Dev Darshan is simply transcendent. Every morning I light one stick before my puja, and the entire home feels sanctified. The sandalwood and camphor blend is so pure — I have never experienced anything like it.',
    rating: 5,
    product: 'Dev Darshan',
    emoji: '🕉️',
  },
  {
    name: 'Rajesh Patel',
    location: 'Ahmedabad, Gujarat',
    role: 'Temple Trustee',
    text: 'We use Sugandhit exclusively at our temple. The Guggal and Divya Chandan varieties are perfect for long rituals — they burn evenly, produce no choking smoke, and fill the sanctum with divine aromas.',
    rating: 5,
    product: 'Guggal',
    emoji: '🌿',
  },
  {
    name: 'Ananya Reddy',
    location: 'Hyderabad, Telangana',
    role: 'Wellness Practitioner',
    text: 'As a yoga and meditation instructor, fragrance is crucial to my practice. Raat Rani during evening sessions creates the most meditative atmosphere I have ever experienced. My students always ask which incense I use.',
    rating: 5,
    product: 'Raat Rani',
    emoji: '🌙',
  },
  {
    name: 'Sunita Mehta',
    location: 'Mumbai, Maharashtra',
    role: 'Interior Designer',
    text: 'I recommend Shahi Gulab to all my clients for their home fragrancing needs. The floral richness is opulent without being overwhelming, and the quality is genuinely premium — unlike cheaper alternatives.',
    rating: 5,
    product: 'Shahi Gulab',
    emoji: '🌹',
  },
  {
    name: 'Arjun Nair',
    location: 'Kochi, Kerala',
    role: 'Ayurvedic Physician',
    text: 'The Kasturi and Lavender varieties demonstrate a rare understanding of therapeutic aromatherapy. The natural masala formulations are authentic and I confidently recommend them to patients seeking calming rituals.',
    rating: 5,
    product: 'Kasturi',
    emoji: '🦌',
  },
  {
    name: 'Kavitha Iyer',
    location: 'Chennai, Tamil Nadu',
    role: 'Classical Dancer',
    text: 'Phulwari accompanies every rehearsal and performance I give. The blend of garden flowers creates a sacred, joyful atmosphere. It is truly fitting for Bharatanatyam — an art that is itself an offering to the divine.',
    rating: 5,
    product: 'Phulwari',
    emoji: '🌸',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < rating ? 'var(--gold)' : 'none'}
          style={{ color: i < rating ? 'var(--gold)' : 'rgba(212,175,55,0.3)' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const trackRef = useRef(null);

  useEffect(() => {
    // Simple auto-scroll testimonials
    const track = trackRef.current;
    if (!track) return;
    let startX = 0;
    let isDragging = false;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.clientX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX);
    };
    const onMouseUp = () => {
      isDragging = false;
      track.style.cursor = 'grab';
    };

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Auto-scroll
    const autoScroll = setInterval(() => {
      if (!isDragging) {
        track.scrollLeft += 1;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
    }, 20);

    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      clearInterval(autoScroll);
    };
  }, []);

  const allTestimonials = [...testimonials, ...testimonials]; // duplicate for infinite scroll

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--black-rich)' }}
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(123,28,28,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            ✦ Beloved by Many ✦
          </span>
          <h2
            className="font-playfair text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--cream)' }}
          >
            Words of{' '}
            <span className="gradient-text-gold">Devotion</span>
          </h2>
          <p
            className="font-cormorant text-xl max-w-xl mx-auto"
            style={{ color: 'rgba(245,237,214,0.5)' }}
          >
            Voices from the hearts that have found divinity in our fragrances
          </p>
          <div className="line-deco" />
        </motion.div>
      </div>

      {/* Testimonials horizontal scroll */}
      <div
        ref={trackRef}
        className="flex gap-6 pb-4 overflow-x-scroll"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
          paddingLeft: '2rem',
          paddingRight: '2rem',
        }}
      >
        {allTestimonials.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.08 }}
            className="flex-shrink-0 glass-dark rounded-2xl p-7 relative"
            style={{
              width: '340px',
              border: '1px solid rgba(212,175,55,0.1)',
            }}
            whileHover={{
              borderColor: 'rgba(212,175,55,0.3)',
              boxShadow: '0 20px 50px rgba(123,28,28,0.3)',
            }}
          >
            {/* Quote icon */}
            <div
              className="absolute top-5 right-6"
              style={{ color: 'rgba(212,175,55,0.15)' }}
            >
              <Quote size={36} />
            </div>

            {/* Product badge */}
            <div
              className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full"
              style={{
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <span className="text-sm">{t.emoji}</span>
              <span
                className="font-cinzel text-xs tracking-widest"
                style={{ color: 'rgba(212,175,55,0.7)' }}
              >
                {t.product}
              </span>
            </div>

            {/* Rating */}
            <StarRating rating={t.rating} />

            {/* Text */}
            <p
              className="font-cormorant text-base leading-relaxed mt-4 mb-6"
              style={{ color: 'rgba(245,237,214,0.75)', fontStyle: 'italic' }}
            >
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--maroon), var(--purple))',
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
              >
                {t.name[0]}
              </div>
              <div>
                <div
                  className="font-cinzel text-sm"
                  style={{ color: 'var(--cream)' }}
                >
                  {t.name}
                </div>
                <div
                  className="font-jost text-xs"
                  style={{ color: 'rgba(245,237,214,0.4)' }}
                >
                  {t.role} · {t.location}
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--black-rich), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--black-rich), transparent)' }}
      />
    </section>
  );
}
