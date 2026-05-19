import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube, Twitter, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null); // Ref added specifically for the HTML form element
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // Handles loading/disabled state during submission

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these placeholder strings with your actual EmailJS keys from your EmailJS Dashboard
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          setSubmitted(true);
          setFormState({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          setIsSending(false);
          alert('Failed to send message. Please try again or reach out directly via email.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6265854399, 8109313338',
      sub: 'Mon–Sat, 9am–6pm IST',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ajanidhoop@gmail.com',
      sub: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Kishori Sadan Ratanganj',
      sub: 'Bijawar Dist. Chhatarpur, 471405, Madhya Pradesh, India',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--black-rich) 0%, #1A0808 100%)',
      }}
    >
      {/* BG radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(123,28,28,0.2) 0%, transparent 60%)',
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
            style={{ color: 'var(--gold)' }}
          >
            ✦ Reach Out ✦
          </span>
          <h2
            className="font-playfair text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--cream)' }}
          >
            Connect <span className="gradient-text-gold">With Us</span>
          </h2>
          <p
            className="font-cormorant text-xl max-w-xl mx-auto"
            style={{ color: 'rgba(245,237,214,0.55)' }}
          >
            For wholesale inquiries, gifting orders, or just to share your fragrance story
          </p>
          <div className="line-deco" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h3
              className="font-playfair text-3xl font-semibold mb-8"
              style={{ color: 'var(--cream)' }}
            >
              Let's Begin a <em style={{ color: 'var(--petal)' }}>Sacred Conversation</em>
            </h3>
            <p
              className="font-cormorant text-xl leading-relaxed mb-10"
              style={{ color: 'rgba(245,237,214,0.6)' }}
            >
              Whether you're seeking bulk orders for your temple, personalized gift sets,
              or simply wish to share your experience with our fragrances — we are always
              here to listen and assist you.
            </p>

            {/* Contact cards */}
            <div className="space-y-5">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex items-start gap-4 glass-maroon rounded-xl p-4 group transition-all duration-300 hover:border-gold-500"
                    style={{ border: '1px solid rgba(212,175,55,0.1)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(212,175,55,0.1)',
                        border: '1px solid rgba(212,175,55,0.2)',
                      }}
                    >
                      <Icon size={18} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div>
                      <div
                        className="font-cinzel text-xs tracking-widest uppercase mb-0.5"
                        style={{ color: 'rgba(212,175,55,0.5)' }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="font-cormorant text-lg"
                        style={{ color: 'var(--cream)' }}
                      >
                        {item.value}
                      </div>
                      <div
                        className="font-jost text-xs mt-0.5"
                        style={{ color: 'rgba(245,237,214,0.4)' }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="mt-10">
              <div
                className="font-cinzel text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(212,175,55,0.4)' }}
              >
                Follow Our Journey
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Youtube, label: 'YouTube' },
                  { icon: Twitter, label: 'Twitter' },
                ].map(({ icon: SocIcon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(212,175,55,0.08)',
                      border: '1px solid rgba(212,175,55,0.15)',
                      color: 'rgba(212,175,55,0.6)',
                    }}
                    title={label}
                    data-cursor="hover"
                  >
                    <SocIcon size={16} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div
              className="glass-dark rounded-2xl p-8"
              style={{ border: '1px solid rgba(212,175,55,0.1)' }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    🪔
                  </motion.div>
                  <h3
                    className="font-playfair text-3xl font-bold mb-3"
                    style={{ color: 'var(--gold)' }}
                  >
                    Thank You!
                  </h3>
                  <p
                    className="font-cormorant text-xl"
                    style={{ color: 'rgba(245,237,214,0.6)' }}
                  >
                    Your message has been received. We will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <h3
                    className="font-cinzel text-lg tracking-widest uppercase mb-6"
                    style={{ color: 'var(--gold)' }}
                  >
                    Send a Message
                  </h3>

                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder=" "
                        value={formState.name}
                        onChange={handleChange}
                        className="luxury-input"
                        required
                      />
                      <label htmlFor="name" className="floating-label">
                        Your Name
                      </label>
                    </div>
                    <div className="floating-label-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        value={formState.email}
                        onChange={handleChange}
                        className="luxury-input"
                        required
                      />
                      <label htmlFor="email" className="floating-label">
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="floating-label-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder=" "
                      value={formState.subject}
                      onChange={handleChange}
                      className="luxury-input"
                      required
                    />
                    <label htmlFor="subject" className="floating-label">
                      Subject
                    </label>
                  </div>

                  {/* Message */}
                  <div className="floating-label-group relative">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder=" "
                      value={formState.message}
                      onChange={handleChange}
                      className="luxury-input resize-none"
                      required
                    />
                    <label
                      htmlFor="message"
                      className="floating-label floating-label-textarea"
                      style={{ top: '1.2rem', transform: 'none' }}
                    >
                      Your Message
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={!isSending ? { scale: 1.02 } : {}}
                    whileTap={!isSending ? { scale: 0.98 } : {}}
                    className={`btn-primary w-full flex items-center justify-center gap-2 ${
                      isSending ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p
                    className="font-cormorant italic text-sm text-center"
                    style={{ color: 'rgba(245,237,214,0.3)' }}
                  >
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}