import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Agarbatti & Dhoop — Premium incense, fragrance, and spiritual lifestyle brand. Experience divine fragrances crafted with pure ingredients for sacred rituals and everyday luxury." />
        <meta name="keywords" content="incense, agarbatti, dhoop, fragrance, spiritual, jasmine, gulab, sandalwood, luxury incense, premium agarbatti" />
        <meta property="og:title" content="Sugandhit — Sacred Fragrances" />
        <meta property="og:description" content="Premium incense and fragrance brand rooted in Indian tradition." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0A0505" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
