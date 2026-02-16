# Team Workflow: Issues → PRs → Vercel Preview → Merge

## 1) Create role-specific issues
Open one issue per track using templates in `.github/ISSUE_TEMPLATE/`:
- UX/UI brief
- Frontend implementation
- Backend/API
- SEO & Performance
- QA validation

### Example prompts by role
- **UX/UI**: "Design a luxury homepage narrative for Algarve villa owners with trust signals and premium CTAs."
- **Frontend**: "Implement services pages and reusable cards with responsive behavior and reduced-motion-friendly transitions."
- **Backend**: "Create `/api/contact` with validation, honeypot, and rate limit-lite; email provider optional via env vars."
- **SEO/Perf**: "Add per-page metadata, sitemap, robots, and JSON-LD for LocalBusiness + services."
- **QA**: "Validate mobile nav, contact flow, keyboard-only navigation, and Lighthouse baseline."

## 2) Implement in focused PRs
- Branch naming: `feat/<scope>` etc.
- Keep one concern per PR when possible.
- Use `.github/pull_request_template.md` and complete all checklists.

## 3) Review Vercel preview
- Open PR preview URL.
- Validate critical routes: `/`, `/services`, `/projects`, `/about`, `/contact`.
- Confirm no visual regressions on mobile + desktop.

## 4) Run manual Lighthouse workflow
Because preview URLs and tokens vary by setup, Lighthouse is provided as a manual workflow.

Steps:
1. Open **Actions → Lighthouse Manual → Run workflow**.
2. Paste the Vercel preview URL as `target_url`.
3. Run and inspect scores/artifacts.
4. Add findings to PR comments if below target.

## 5) Merge gate
Merge only if:
- CI is green.
- Lighthouse findings are acceptable.
- QA issue confirms no blocking defects.
- PR checklist is complete.

## SEO checklist (quick)
- Unique title + description on each route.
- Canonical and OG metadata configured.
- Structured data present and valid.
- `app/sitemap.ts` and `app/robots.ts` updated.
- Images use `next/image` with appropriate sizing.
- Fonts use `next/font` with `display: swap`.
