# Definition of Done (DoD)

A task is DONE only when all required checks are satisfied.

## Required for every task
- [ ] PR opened with Task ID + checklist
- [ ] CI passes: lint, typecheck, build
- [ ] Vercel preview link attached
- [ ] Mobile sanity check (iOS Safari + Android Chrome if possible)
- [ ] Accessibility basics: keyboard focus visible, labels for inputs, no motion-only meaning
- [ ] Docs updated if the task changes IA/components/motion/content model

## Required for launch
- [ ] All routes in `docs/IA_SITEMAP.md` exist
- [ ] Contact flow works end-to-end (email/CRM delivery + spam protection)
- [ ] Image pipeline in place (AVIF/WebP + sizes + lazy loading)
- [ ] Core Web Vitals sanity: Hero LCP not excessive; no massive layout shift
- [ ] Privacy + cookie policy present (and consent banner if tracking cookies used)
- [ ] SEO: titles/descriptions, OG images, sitemap.xml, robots.txt, canonical URLs
- [ ] Analytics (optional) validated: events for form submit, WhatsApp click, call click
