# AGENTS: Delivery Protocol for This Repository

## Definition of Done (DoD)
A change is done only when all are true:
- UX is mobile-first, premium, and consistent with brand tokens.
- Accessibility basics are covered (semantic headings, keyboard/focus states, labels, color contrast, reduced motion support).
- SEO metadata is added or updated (title/description/OG/canonical where applicable).
- Performance is protected (minimal client JS, optimized images/fonts, no avoidable heavy dependencies).
- Security hygiene is respected (validated inputs, no secret leakage, safe defaults).
- CI checks pass (lint, typecheck, build, tests when present).
- Docs and templates affected by process changes are updated.

## Review Guidelines
Review each PR against these gates:

### Performance
- Avoid unnecessary client components and large libraries.
- Verify image sizing/loading priorities and font strategy.
- Check Lighthouse metrics and Core Web Vitals impact.

### Accessibility
- Keyboard navigation and visible focus rings.
- Proper form labels/aria usage.
- `prefers-reduced-motion` respected for animations.

### SEO
- Unique metadata per route.
- Valid structured data where relevant.
- Sitemap/robots remain correct.

### Security
- Validate/sanitize user inputs.
- Avoid exposing credentials in logs/responses.
- Use rate limiting/spam mitigation for public forms.

## Branch and PR conventions
- Branch naming: `feat/<scope>`, `fix/<scope>`, `chore/<scope>`, `docs/<scope>`.
- Keep PRs focused and reviewable.
- PR title format: `<type>: <short summary>`.
- Reference the issue in PR body and include verification checklist.

## Local checks
Run from repo root:
- `npm install`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run dev`

Optional/manual audit:
- `npm run lighthouse:ci` (after setting `LHCI_TARGET_URL`)
