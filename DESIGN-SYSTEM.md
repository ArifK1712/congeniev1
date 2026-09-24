# Congenie design system

## Foundation
- Next.js App Router, TypeScript, Tailwind CSS.
- DM Sans throughout: medium-weight headings with upright purple emphasis; regular body text. Supporting text uses shared 15px and 14px roles, with responsive layouts adjusted to preserve readability. Fonts self-hosted through next/font.
- Global H1–H6 styles and text tokens are defined in src/app/globals.css. Use semantic heading levels rather than selecting headings for size.
- Section padding: 96px desktop, 72px tablet, 48px mobile. Hero has an intentional introductory spacing adjustment.
- Shared maximum content width: 1200px. Horizontal gutters: 32px / 24px / 20px.
- Use Section and Heading from src/components/ui.tsx for future sections. Use the existing color and typography variables instead of adding independent styles.
- Product illustrations intentionally use small text to reproduce dashboard scale. Main page content follows the body typography system.

## Preview scope
The seven supplied sections are implemented. The page is intentionally open for additional sections; no footer has been added. Statistics and product content reproduce the supplied concept and need business verification before public launch. Dashboard and chart values are illustrative. The chart range control switches illustrative series.

Navigation points to implemented sections. Sales/team CTAs currently navigate to Enterprise; replace with the approved contact destination when supplied. No authentication or lead-submission backend is configured. Search indexing stays disabled during development.

## Asset provenance
Replacement event photos, pending original brand assets:
- Conference: https://unsplash.com/s/photos/conference-attendees — image https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2
- Hybrid: Samuel Pereira / Unsplash, used by Rice Alliance: https://alliance.rice.edu/get-involved
- Virtual: Tampere Universities: https://www.tuni.fi/en/news/eye-contact-activates-autonomic-nervous-system-even-during-video-calls
Review photo reuse rights or replace with licensed brand assets before public publication. Official logo supplied by the user: https://congenie.com/assets/images/logo-next.png; stored locally without alteration.

## Development and verification
npm run dev
npm run lint
npm run typecheck
npm run build



Section headings use DM Sans bold (700), including purple emphasis text.

Event experiences now uses user-supplied in-person-event.png, virtual-event.png, and hybrid-event.png assets. The earlier replacement photographs are no longer used in that section.
