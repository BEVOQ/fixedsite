# Creative Direction Pack

## Brand Adjectives
- **Quiet luxury**: restrained confidence, never flashy.
- **Craft**: precise detailing, material honesty, intentional composition.
- **Mediterranean**: sun-softened palette, natural textures, indoor-outdoor flow.
- **Architectural**: geometric balance, clean lines, editorial whitespace.

## Typography System
Use a three-layer type system with strong hierarchy and generous breathing room.

### Families
- **Display**: high-contrast serif for hero statements and section openers.
- **Body**: modern sans-serif for readability and UI clarity.
- **Mono accents (optional)**: technical labels, coordinates, small metadata.

### Scale + Rhythm
- Display XL: `clamp(3rem, 8vw, 7rem)` / line-height `0.95–1.02` / letter-spacing `-0.02em`.
- Display L: `clamp(2.2rem, 5vw, 4.2rem)` / line-height `1.0–1.08` / letter-spacing `-0.01em`.
- H2: `clamp(1.6rem, 2.5vw, 2.4rem)` / line-height `1.15`.
- Body L: `1.125rem` / line-height `1.7`.
- Body: `1rem` / line-height `1.7`.
- Caption/Meta: `0.85rem` / line-height `1.4` / letter-spacing `0.04em`.

### Typography Rules
- Keep paragraph width at `60–75ch`.
- Avoid more than 3 text styles in one viewport block.
- Prefer sentence case over all-caps, except small mono/meta accents.

## Spacing + Layout Rules
- Use a **12-column grid** on desktop, collapsing to 6/4 on tablet/mobile.
- Standard content max width: `1200px`; text-heavy max width: `760px`.
- Global horizontal padding: `clamp(1rem, 3vw, 3rem)`.
- Vertical section rhythm: `clamp(4rem, 9vw, 10rem)`.
- Keep one dominant focal block per section (media or text), not both competing.
- Preserve strong negative space around luxury messaging and gallery transitions.

## Color System
Use minimal neutrals with one controlled accent.

### Core Tokens (Light)
- `--color-bg`: `#F7F5F1` (warm plaster)
- `--color-surface`: `#EFEBE4`
- `--color-ink`: `#1E1E1A`
- `--color-muted`: `#6F6A60`
- `--color-accent`: `#A08A6A` (olive-stone bronze)

### Core Tokens (Dark)
- `--color-bg-dark`: `#131311`
- `--color-surface-dark`: `#1D1C19`
- `--color-ink-dark`: `#EEE8DC`
- `--color-muted-dark`: `#B8B19F`
- `--color-accent-dark`: `#C1AE8F`

### Usage Rules
- Accent should occupy **<10%** of any page.
- Prioritize tonal depth via texture/light before adding new colors.
- Ensure AA contrast for body text in both themes.

## Motion Rules
Motion should feel cinematic, subtle, and intentional.

- Micro transitions: `180–260ms`, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Section reveals/parallax: `500–900ms`, easing `cubic-bezier(0.2, 0.65, 0.2, 1)`.
- Avoid stacking unrelated animations in one viewport event.
- Home page **signature moments ≤ 4** total.

### Signature Moments (Home)
1. Hero media settle/reveal.
2. One sticky storytelling sequence.
3. One material-detail transition.
4. One CTA emphasis moment.

## Scroll Philosophy
- Smooth scroll should support narrative flow, never cause disorientation.
- Use sticky media storytelling for key project/process segments.
- Keep scroll-linked effects gentle and performance-aware.
- **Must respect `prefers-reduced-motion`**:
  - Disable non-essential transforms/parallax.
  - Keep opacity transitions short or static.
  - Preserve content order and full readability.

## Photography Guidance
- Favor **microcement texture** closeups with directional shadow.
- Capture **landscaping detail shots** (stone edges, irrigation geometry, plant layering).
- Prioritize **warm Algarve light** (golden hour, soft sun gradients, natural highlights).
- Avoid over-processed HDR and excessive saturation.
- Compose for architectural balance: clean verticals, deliberate negative space.
