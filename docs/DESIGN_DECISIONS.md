# VentiBA — Design Decisions Log

> Every significant design choice is recorded here with reasoning.
> New decisions are appended at the bottom.

---

## DD-001: White base theme over dark theme

**Date:** 2025-03-10
**Decision:** Use a white/light-gray page background instead of the current dark slate theme.
**Alternatives:** Keep dark theme; use a split dark/light approach.
**Rationale:** Ventilation = air, cleanliness, openness. A white base communicates those values. The dark theme felt heavy for this industry. The navbar stays dark as a strong contrast anchor.

---

## DD-002: Blue primary, red secondary (not equal)

**Date:** 2025-03-10
**Decision:** Blue (`#2563EB`) is the primary action color. Red (`#DC2626`) is a secondary accent only.
**Alternatives:** Equal blue/red usage; single brand color; gradient-heavy.
**Rationale:** Blue = trust + cooling (the dominant service). Red symbolizes heating but must not compete visually. Red appears in gradient accents, thin lines, and icon highlights — never as a CTA color.

---

## DD-003: DM Sans + Plus Jakarta Sans typography

**Date:** 2025-03-10
**Decision:** DM Sans for headlines, Plus Jakarta Sans for body.
**Alternatives:** Inter, Roboto, Montserrat, Outfit.
**Rationale:** More distinctive than Inter/Roboto (which feel generic at this point). DM Sans is geometric and confident — fits a technical premium brand. Plus Jakarta Sans is clean and highly legible. Both are variable-weight Google Fonts.

---

## DD-004: Dark navbar on white page (reference image style)

**Date:** 2025-03-10
**Decision:** Navbar uses a solid dark background (`#1A1A2E`) with white text, modeled after the provided reference image.
**Alternatives:** White/transparent navbar; gradient navbar.
**Rationale:** The reference image shows a strong, professional dark header with logo left, centered links, and a CTA right. This creates a visual anchor and immediate premium feel. The contrast against the white page is striking.

**Reference:** Navbar styled after the Robo Labs reference image — dark bg, uppercase links, text-based CTA on the right.

---

## DD-005: Spline for 3D (start), R3F upgrade path

**Date:** 2025-03-10
**Decision:** Start with Spline for the 3D AC unit model; migrate to React Three Fiber later if needed.
**Alternatives:** R3F from day one; static image only; video only; Lottie animation.
**Rationale:** Spline gives the fastest design iteration — visual editor, easy exports, React component. R3F is more powerful but requires manual shader/lighting work. Start simple, upgrade when needed.

---

## DD-006: Passive-only 3D, no interactivity

**Date:** 2025-03-10
**Decision:** The 3D model auto-rotates passively. No drag, zoom, or required user interaction.
**Alternatives:** Interactive configurator; scroll-driven animation; click-to-explore.
**Rationale:** Users visit to request a service, not to play with 3D. Interactive elements add friction, hurt mobile performance, and distract from the conversion goal.

---

## DD-007: 3 scroll-stops maximum (hero → tjenester → form)

**Date:** 2025-03-10
**Decision:** The page has exactly 3 major sections. A visitor who scrolls twice should see the form.
**Alternatives:** Longer page with testimonials, about us, team, etc.
**Rationale:** Fewer sections = less drop-off = faster conversion. Additional sections (testimonials, about) can be added later once the core flow is validated.

---

## DD-008: Tjenester as one-liners, no detail pages

**Date:** 2025-03-10
**Decision:** Each service card shows a title and a single sentence. No "read more" links or subpages.
**Alternatives:** Expandable cards; individual service pages; tabbed details.
**Rationale:** Redirecting to subpages increases friction. The user just needs to know what VentiBA offers, then fill out the form. Details are handled in the follow-up conversation after the lead is captured.

---

## DD-009: No footer for now

**Date:** 2025-03-10
**Decision:** Omit the footer section in the initial build.
**Alternatives:** Minimal footer with org.nr/phone; full footer with sitemap.
**Rationale:** Content for the footer is undecided. The form is the natural end of the page. A footer can be added later once contact info, legal details, and social links are defined.

---

## DD-010: 3D/video concept — AC unit with pipes (behavior TBD)

**Date:** 2025-03-10
**Decision:** The visual centerpiece is an air conditioning unit. Pipe/ductwork may extend from it as a storytelling device. The exact scroll behavior (static, following, transitioning to video) is to be decided during implementation.
**Alternatives:** Abstract particle effects; static photography; animated illustrations.
**Rationale:** A real AC unit grounds the brand in its actual product. Pipes create a visual narrative ("where does the air go?"). The behavior will be prototyped and evaluated — starting with a simple hero placement.

---

<!-- Append new decisions below this line -->
