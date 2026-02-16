# Workflow

## Router Baseline
This project uses the **Next.js App Router** (`/app` directory). New route work should follow App Router conventions (segment-based folders, `layout.tsx`, route handlers, `generateMetadata`, `sitemap.ts`, `robots.ts`).

## How to use Codex here

### 1) Open an Issue
Choose the appropriate issue template:
- UX/UI
- Frontend
- Backend
- SEO/Performance
- QA

Define clear acceptance criteria and link relevant docs (`docs/CREATIVE_DIRECTION.md`, `docs/DEFINITION_OF_DONE.md`, etc.).

### 2) Implement in a focused PR
- Keep scope small and reviewable.
- Reference the issue.
- Include tradeoffs and follow-up notes.
- Keep dependencies minimal.

### 3) Validate with CI + preview
- Open PR to trigger CI checks (lint, typecheck, tests-if-present, build).
- Use Vercel Preview for stakeholder review.
- Attach screenshots for visual changes.

### 4) Lighthouse validation
Because preview-URL auth/secrets and dynamic URLs vary by environment, Lighthouse is configured as a **manual workflow** plus local instructions.

- Local quick check:
  1. `npm run dev`
  2. `npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo`

- GitHub manual run:
  - Run **Manual Lighthouse** workflow.
  - Provide target URL (preview or production).
  - Review uploaded report artifacts.

### 5) Merge discipline
- Merge when Definition of Done is met.
- Prefer squash merges for clean history.
- Carry follow-ups into `docs/BACKLOG.md` or new issues.

## Example issue prompts by role

### UX/UI
"Refine home hero composition and spacing rhythm to better align with quiet luxury direction; preserve current information architecture; include reduced-motion behavior for all motion changes."

### Frontend
"Implement centralized metadata helper usage for all top-level routes and verify no regressions in title/description output."

### Backend
"Create contact form API endpoint contract for PR3 provider integration with spam mitigation and error states documented."

### SEO/Performance
"Benchmark home and services pages with Lighthouse, identify top two LCP contributors, and propose low-risk optimizations compatible with Vercel deployment."

### QA
"Run regression on navigation, sticky sections, and forms across desktop/mobile; validate keyboard navigation and reduced-motion mode behavior."
