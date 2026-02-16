# Repository Working Agreement

## Definition of Done
A change is done only when all applicable checks pass:

- **Performance**
  - Keep bundles/assets lean; avoid unnecessary dependencies.
  - Lighthouse targets (for key routes):
    - Performance >= 90
    - Best Practices >= 95
- **Accessibility**
  - Keyboard navigable flows for changed UI.
  - Semantic HTML, labels, alt text, and visible focus states.
  - Respect `prefers-reduced-motion` for motion changes.
- **SEO**
  - Metadata present and accurate for changed pages.
  - No blocked crawling regressions (robots/sitemap sanity).
  - Proper heading hierarchy and meaningful link text.
- **Security**
  - No secrets committed.
  - Input/output handling reviewed for new integrations.
  - Keep dependencies minimal and trusted.

## PR Etiquette
- Keep PRs focused, small, and reviewable.
- Link issue(s) and describe user-visible impact.
- Include a **preview URL** (Vercel) when UI behavior changes.
- Include screenshots/GIFs for visual diffs.
- Mention tradeoffs and follow-ups explicitly.

## Local Checks
Run from repository root:

1. `npm install`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test --if-present`
5. `npm run build`

For Lighthouse baseline (manual):
- `npm run dev`
- `npx lighthouse http://localhost:3000 --view --only-categories=performance,accessibility,best-practices,seo`
