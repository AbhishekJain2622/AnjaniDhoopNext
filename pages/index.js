import Head from 'next/head';
import { useEffect, useState } from 'react';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Collection from '../components/Collection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
  }, []);

  return (
    <>
      <Head>
        <title>Sugandhit — Sacred Fragrances | Premium Indian Incense</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading screen */}
      <Loader />

      {/* Custom cursor — desktop only */}
      {!isMobile && <Cursor />}

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Collection />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
