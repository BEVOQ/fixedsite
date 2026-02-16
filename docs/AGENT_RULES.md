# Agent Rules (Option A — reliable parallel workflow)

This project runs on **strict contracts** so multiple agents can work in parallel without chaos.

## Single source of truth
- Specs live in `/docs/*`
- Work state lives in GitHub Issues + the Project board (mirrored in `/TODO.md`)
- Code lives in `main` (only via PRs)
- Images live in `/public` and follow naming rules in `docs/BRAND.md`

## Output contract for every task/PR
Every PR must include:
1) **Task ID** (e.g., T20)
2) **Scope** (what files changed, what did not)
3) **Acceptance criteria checklist** (checked)
4) **How to test** locally + preview link
5) **Docs updated** (if you touched components/motion/IA)

## Boundaries by role
- Producer: owns priorities + dependencies; does not implement features.
- UX/Copy: owns IA + copy; cannot change motion patterns without Motion sign-off.
- UI/Motion: owns tokens + component states + animation rules.
- Frontend: implements; cannot change tokens without updating docs and Producer sign-off.
- QA: verifies; does not implement features (only files issues + requests changes).

## Merge gates (required)
No merge unless:
- CI passes (lint, typecheck, build)
- Vercel preview reviewed
- QA checklist signed off
- Relevant docs updated

## Reduced motion policy
All motion components must respect `prefers-reduced-motion`. If unsure, default to no animation.
