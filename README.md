# Stellar Robotics Hub

Project brief: Modern one-page marketing site for a robotics/STEM team organization

Build a clean, professional, single-page (with linked sub-pages) website for a youth robotics competition team. The site should feel polished, trustworthy, and community-driven — like a small but serious nonprofit/sports-team hybrid. Use entirely original branding, imagery placeholders, and copy (do not use any real team names, logos, or content).

1. Overall Design Style & Aesthetic

Clean, modern, "flat-with-depth" style: soft shadows, subtle gradients, generous white space

Professional but approachable — not corporate-stiff, not overly playful

Card-based content blocks with rounded corners

High-contrast hero section with a strong focal image on the right and text-left layout

Minimalist iconography (line icons, 1.5–2px stroke)

2. Color Palette (original — do not reuse source site colors)

Primary: Deep Indigo #3730A3

Secondary/Accent: Warm Amber #F59E0B

Background (light): Off-white #FAFAF9

Background (dark sections): Slate #111827

Text primary: #1F2937

Text secondary/muted: #6B7280

Success/positive accent: Emerald #10B981

Borders/dividers: #E5E7EB

Use Indigo→Violet gradients (#3730A3 → #6D28D9) sparingly on CTA buttons and hero backgrounds

3. Typography

Headings: a modern geometric sans-serif (e.g., "Poppins" or "Space Grotesk"), semi-bold to bold weights

Body: a highly legible humanist sans-serif (e.g., "Inter" or "Public Sans")

Type scale: Hero H1 ~48–64px desktop / 32–36px mobile; Section H2 ~32–36px; Body 16–18px; small print 13–14px

Line height 1.5–1.6 for body, 1.1–1.2 for headings

Use letter-spacing +0.02em on all-caps eyebrow labels (e.g., small tags above headings)

4. Layout Structure

Announcement bar (optional, dismissible)

Thin top banner with accent background, scrolling/marquee or static text with an icon and a link — used for a timely announcement

Sticky navigation header

Left: logo mark + wordmark

Center/right: horizontal nav links (Home, About, Programs, Projects, Awards, Get Involved, Blog/Podcast)

Right-aligned prominent "Donate" or "Join Us" button (filled, accent color, rounded-full or rounded-lg)

Transparent on load, transitions to solid white/shadow on scroll

Collapses into a hamburger menu + slide-in drawer on mobile

Hero section

Two-column layout (60/40 or 55/45 split): left = eyebrow label, large headline, supporting paragraph, two CTAs (primary filled + secondary outline); right = large product/team photo or illustration with soft drop shadow and rounded corners, optionally floating on a subtle gradient blob background

Below hero: a horizontal stats strip (3–4 stat cards: big animated number + label), separated by thin vertical dividers or placed in bordered/shadowed cards

Mission/Program section

Centered eyebrow + heading + short paragraph

Supporting image or illustration

Single CTA link with arrow icon

Support/Donate callout section

Full-width or contained card with contrasting background (dark or accent-tinted), heading, short description, and a strong single CTA button

Optional icon or illustration accent

Partners/Sponsors section

Small "Supported by" label

Logo grid, grayscale by default, color on hover, evenly spaced, responsive wrap

Footer

Dark background (Slate)

Column 1: logo + short tagline

Column 2: nav links

Column 3: social icons (row of circular icon buttons) + contact email

Bottom bar: phone/email/copyright in muted small text, separated by a thin top border

5. Spacing & Visual Hierarchy

Section vertical padding: 80–120px desktop, 48–64px mobile

Max content width: 1200–1280px, centered, with 24px side gutters on mobile

Consistent 8px spacing scale (8/16/24/32/48/64/96)

Clear hierarchy via size + weight + color (not just size) — eyebrow text in accent color, headings in dark text, body in muted gray

6. Component Styles

Buttons: rounded-lg (8–12px radius) or pill-shaped; primary = solid gradient/fill with white text and soft shadow; secondary = outline with 1.5px border, transparent fill; hover = slight lift (translateY(-2px)) + shadow increase + 150ms ease transition

Cards: white background, 12–16px border radius, subtle 1px border or soft box-shadow (0 4px 12px rgba(0,0,0,0.06)), hover = shadow deepens + slight scale (1.02)

Stat blocks: large bold number (animated count-up on scroll into view), small uppercase label beneath

Nav links: underline-on-hover animation (expanding from center or left), active state in accent color

Forms (apply/contact): floating or top-aligned labels, rounded input fields with 1px border, focus state = accent-colored border + soft glow ring, clear error states in red-600

7. Animation & Micro-interactions

Fade-up + slight translateY on scroll-into-view for section content (staggered for grouped items like stat cards or sponsor logos)

Smooth scroll for in-page anchor links

Sticky nav shadow/background transition on scroll

Button hover lift + shadow

Logo grayscale-to-color transition on hover (300ms)

Count-up number animation for stats when scrolled into view

Mobile menu slide-in with backdrop fade

Keep all animations subtle, 150–400ms, ease-out timing — avoid anything flashy or distracting

8. Responsive Behavior

Desktop (≥1024px): multi-column layouts as described, nav fully horizontal

Tablet (768–1023px): hero stacks to single column with image below text; stats grid becomes 2x2; sponsor logos wrap in rows of 3

Mobile (<768px): all sections single-column, nav collapses to hamburger + full-screen or drawer menu, buttons full-width or centered, stat cards stack vertically, footer columns stack with center-aligned text

Touch targets minimum 44x44px on mobile

Test text scaling and image scaling at all breakpoints; use clamp() for fluid typography where possible

9. Accessibility (WCAG 2.1 AA)

Minimum 4.5:1 contrast ratio for body text, 3:1 for large text/headings

Visible focus states on all interactive elements (2px outline, accent color, offset)

Semantic HTML5 landmarks: <header>, <nav>, <main>, <section>, <footer>

All images include descriptive alt text; decorative images use alt=""

Proper heading hierarchy (single H1 per page, logical H2/H3 nesting)

Buttons and links have accessible names (no "click here")

Form inputs have associated <label> elements and aria-describedby for error messages

Ensure animations respect prefers-reduced-motion

Keyboard navigable menu, including mobile drawer with focus trapping

10. Modern HTML/CSS Practices

Semantic, clean markup — avoid div-soup, use <article>, <figure>, <nav>, <address> where appropriate

CSS custom properties for the entire color/spacing/typography system (--color-primary, --space-4, --radius-lg, etc.)

CSS Grid for section layouts, Flexbox for component-level alignment

Mobile-first media queries

Use clamp(), min(), max() for fluid type and spacing

Lazy-load below-the-fold images (loading="lazy")

Optimize for Core Web Vitals: minimal layout shift (reserve image dimensions), defer non-critical JS

Component-based file/code organization (separate partials/components for Nav, Hero, StatBlock, Card, Footer, etc. if using a framework)

11. SEO-Friendly Structure

Descriptive <title> and <meta name="description">

Open Graph and Twitter Card meta tags

One clear H1 describing the organization's purpose

Descriptive link text and image alt attributes

Structured data (JSON-LD, Organization schema) with name, logo, sameAs (social links), and contact info

Clean, crawlable URL structure for sub-pages (About, Programs, Awards, Apply, Contact)

Fast-loading, mobile-friendly (Google mobile-first indexing)

12. Suggested Page/Section Order

Announcement bar (dismissible)

Sticky nav header

Hero (headline + CTA + image)

Stats strip

Mission/programs overview

Support/donate callout

Partners/sponsors logo strip

Footer

Deliver clean, well-commented, production-ready HTML/CSS (or React components if the target tool supports it), fully responsive, accessible, and using only the original color palette and typography specified above — no copied text, logos, or imagery from any existing organization.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://innovate-inspire-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cd4cb54a-1f44-46ca-a76f-e1772a891e41).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
