# Congenie

Next.js App Router project with TypeScript, Tailwind CSS, and ESLint.
The homepage implements the seven supplied visual sections with responsive layouts and a reusable design system.

## Development

Requires Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks and production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Structure

- `src/app/page.tsx`: homepage
- `src/app/layout.tsx`: shared layout and metadata
- `src/app/globals.css`: Tailwind and shared styles
- `public/`: images, logos, and other static assets

Typography uses DM Sans through next/font. See DESIGN-SYSTEM.md for shared tokens, component conventions, asset provenance, and preview scope. Additional sections can be appended using the shared Section and Heading components. No backend is required for this visual preview.



