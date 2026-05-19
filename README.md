# Sugandhit — Sacred Fragrances
## Premium Incense & Fragrance Brand Website

A world-class luxury single-page Next.js website for a premium Indian incense and fragrance brand.

---

## 🪔 Features

- **Cinematic Loading Screen** — Animated progress bar with brand reveal
- **Custom Gold Cursor** — Luxury cursor with follower effect (desktop)
- **Hero Section** — Fullscreen with floating gold particles, smoke effects, animated headline
- **About Section** — Split-screen storytelling with rotating mandala visual and value cards
- **Product Collection** — 12 premium fragrance cards with per-product color themes, intensity bars, hover effects
- **Why Choose Us** — 8 animated feature cards + statistics row
- **Testimonials** — Infinite horizontal auto-scroll carousel with glassmorphism cards
- **Contact Section** — Floating label form + contact info + social links
- **Footer** — Newsletter strip, quick links, social icons

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Maroon | `#7B1C1C` | Primary brand color |
| Royal Gold | `#D4AF37` | Accents, CTAs |
| Saffron | `#FF6B00` | Highlights |
| Floral Pink | `#E8A4B8` | Decorative accents |
| Royal Purple | `#5B2C6F` | Secondary backgrounds |
| Cream White | `#F5EDD6` | Body text |
| Matte Black | `#0A0505` | Background |

---

## 🛠 Tech Stack

- **Next.js 14** — React framework with SSR/SSG
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations & transitions
- **GSAP** — Advanced headline animations
- **Lucide React** — Icon library

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd incense-brand

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
incense-brand/
├── pages/
│   ├── _app.js          # App wrapper with global CSS
│   ├── _document.js     # Custom HTML head with SEO meta
│   └── index.js         # Main page (assembles all sections)
├── components/
│   ├── Cursor.jsx        # Custom gold cursor
│   ├── Loader.jsx        # Cinematic loading screen
│   ├── Navbar.jsx        # Sticky premium navigation
│   ├── Hero.jsx          # Fullscreen hero with particles
│   ├── About.jsx         # Brand storytelling section
│   ├── productsData.js   # All 12 fragrance data
│   ├── ProductCard.jsx   # Individual product card
│   ├── Collection.jsx    # Product grid with filter
│   ├── WhyUs.jsx         # Feature cards + stats
│   ├── Testimonials.jsx  # Auto-scroll testimonials
│   ├── Contact.jsx       # Luxury contact form
│   └── Footer.jsx        # Premium footer
├── styles/
│   └── globals.css       # Design tokens + global styles
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 📦 All 12 Fragrances

| # | Name | Category | Mood |
|---|------|----------|------|
| 1 | Shahi Gulab | Floral | Devotional |
| 2 | Phulwari | Floral | Joyful |
| 3 | Raat Rani | Nocturnal | Mystical |
| 4 | Dev Darshan | Sacred | Spiritual |
| 5 | Jasmine | Floral | Fresh & Pure |
| 6 | Guggal | Resin | Purifying |
| 7 | Divya Chandan | Sacred | Serene |
| 8 | Kevda Classic | Exotic | Exotic |
| 9 | Rajnigandha | Floral | Romantic |
| 10 | Kasturi | Musk | Sensual |
| 11 | Lavender | Herbal | Calming |
| 12 | Sugandhit | Signature | Transcendent |

---

## ✨ Customization

### Adding Products
Edit `components/productsData.js` — each product supports:
- `name`, `nameHindi`, `subtitle`, `description`
- `category`, `mood`, `notes`, `intensity`
- `theme` — custom `primary`, `secondary`, `accent`, `bg`, `glow` colors
- `emoji` — visual representation

### Changing Brand Colors
Edit `styles/globals.css` CSS variables:
```css
:root {
  --maroon: #7B1C1C;
  --gold: #D4AF37;
  --saffron: #FF6B00;
  /* ... */
}
```

### Contact Information
Update `components/Contact.jsx` — contactInfo array with phone, email, address.

---

## 📱 Responsive Design

- Mobile-first responsive across all breakpoints
- Touch-optimized (custom cursor auto-disabled on mobile)
- Horizontal scroll testimonials work with touch drag
- Adaptive grid layouts (1 → 2 → 3 → 4 columns)

---

*Built with devotion. © 2024 Sugandhit Sacred Fragrances.*
