# VentiBA — Brand Guidelines

> Living document. Updated as design decisions are made.

---

## Brand Identity

**Company:** VentiBA (Venti · Bygg & Anlegg)
**Industry:** Ventilation, air conditioning, and indoor climate services
**Region:** Akershus, Norway
**Language:** Norwegian (Bokmål)
**Brand promise:** Professional, modern, and trustworthy climate solutions.

---

## Color System

### Base

| Token | Hex | Role |
|-------|-----|------|
| `--white` | `#FFFFFF` | Page background |
| `--surface` | `#F5F7FA` | Cards, form backgrounds, subtle sections |
| `--text-primary` | `#1A1A2E` | Headlines, navbar background |
| `--text-secondary` | `#6B7280` | Body text, descriptions |
| `--border` | `#E5E7EB` | Card borders, input borders |

### Accents

| Token | Hex | Role |
|-------|-----|------|
| `--blue` | `#2563EB` | Primary CTA, links, "cooling" cues |
| `--blue-hover` | `#1D4ED8` | Button/link hover states |
| `--red` | `#DC2626` | Secondary accent, "heating" cues |
| `--red-hover` | `#B91C1C` | Warm hover states |

### Gradient

```css
/* Accent gradient — use sparingly for thin lines, dividers, micro-effects */
background: linear-gradient(135deg, #2563EB, #DC2626);
```

> **Rule:** Blue is the dominant action color. Red is used sparingly — thin accent lines, gradient touches, icon highlights. They never compete for attention.

---

## Typography

### Font Stack

| Role | Family | Weight | Google Fonts |
|------|--------|--------|-------------|
| **Headlines** | DM Sans | 700, 800 | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Body** | Plus Jakarta Sans | 400, 500, 600 | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |

### Scale

| Element | Size (desktop) | Size (mobile) | Weight |
|---------|---------------|---------------|--------|
| Hero h1 | 56–64px | 36–40px | 800 |
| Section h2 | 36–40px | 28–32px | 700 |
| Card h3 | 20–24px | 18–20px | 600 |
| Body | 16–18px | 16px | 400 |
| Small / labels | 14px | 13px | 500 |
| Navbar links | 14px | 14px | 500 (uppercase, tracked) |

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section gap | 120–160px | Between major page sections |
| Card padding | 24–32px | Internal card padding |
| Content max-width | 1200px | Page content container |
| Form max-width | 560px | Contact form container |
| Border radius | 12px | Cards, buttons, inputs |
| Button padding | 16px 32px | CTA buttons |

---

## Navbar Reference

Based on the reference image:

- **Background:** Solid dark (`#1A1A2E` / near-black)
- **Height:** ~64px
- **Layout:** Logo (left) · Navigation links (center) · CTA button (right)
- **Links:** Uppercase, 14px, letter-spacing 0.05em, `Plus Jakarta Sans` 500
- **CTA:** "// KONTAKT OSS ↗" style — text-based, not a filled button
- **Behavior:** Sticky on scroll, `z-index: 50`

---

## 3D / Visual Media Direction

### Concept
An air conditioning unit as the hero visual. Potential for pipes/ductwork extending from the unit as a visual storytelling element.

### Behavior Options (TBD — to be decided during implementation)
- **Option A:** Static hero placement — AC unit auto-rotates slowly on the right side of the hero
- **Option B:** Scroll-following — unit or pipes subtly follow the user down the page (parallax-like, but lightweight)
- **Option C:** Hybrid — 3D model in hero, transitions to video footage for deeper sections

### Technical Rules
- 3D loads async — text and CTA render first
- Fallback to static image on WebGL failure
- Model size < 2MB
- Hidden or replaced with static image on mobile (< 768px)
- No drag/zoom/interaction required
- No scroll-jacking

### Tooling
- **Start with:** Spline (`@splinetool/react-spline`) for rapid iteration
- **Upgrade path:** React Three Fiber for custom shader/lighting control

---

## Voice & Tone (Copy)

- Professional but approachable
- Short sentences, no jargon
- Norwegian bokmål, not nynorsk
- Action-oriented CTAs: "Kontakt oss", "Send forespørsel"
- Avoid superlatives ("best", "cheapest") — let quality speak

---

## Do's and Don'ts

### ✅ Do
- Use generous whitespace
- Keep text scannable (one-liners for services)
- Let the 3D element be ambient, not demanding
- Use blue for actions, red for subtle warmth accents
- Keep the form minimal (4 fields max)

### ❌ Don't
- Use dark backgrounds for the main page (navbar is the exception)
- Make 3D interactive (no dragging/zooming)
- Add pages that redirect away from the main flow
- Use generic stock photography
- Mix blue and red equally — blue leads, red accents
