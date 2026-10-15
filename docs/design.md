# Retro CRT terminal portfolio — design specification

Phosphor-green terminal aesthetic for a developer portfolio. Content in the implementation uses the site owner's real profile data; sample names and metrics in early drafts are placeholders only.

## Canvas and atmosphere

- **Background:** pure black `#000000`
- **Ambient glow:** faint green radial blobs — `rgba(57, 255, 122, 0.08)` top-right, `rgba(57, 255, 122, 0.05)` lower-left
- **CRT scanlines:** fixed full-viewport overlay, `repeating-linear-gradient` (transparent 0–2px, `rgba(0, 0, 0, 0.16)` at 3px, transparent 4px), `mix-blend-mode: multiply`, opacity `0.5`, `pointer-events: none`

## Color system

| Role | Hex |
|------|-----|
| Phosphor accent | `#39ff7a` |
| Accent dim | `#2bbf5c` |
| Accent faint | `#1c7a3c` |
| Body text (sage) | `#5f8d68` |
| Headings | `#eafff1` |
| Amber (status, one tag per card) | `#ffd24a` |
| Cyan (prompt `$` only) | `#5cf6ff` |
| Panel | `#050805` / `#070b07` |
| Hairline border | `#143614` / `#1f4d1f` |

- **Accent glow:** `text-shadow: 0 0 8px rgba(57,255,122,.45), 0 0 24px rgba(57,255,122,.18)`
- **Selection:** `rgba(57, 255, 122, 0.30)`

## Typography

- **Fonts:** JetBrains Mono (primary), IBM Plex Mono (secondary) — all monospace
- Hierarchy via size, weight, and glow — no sans-serif display fonts

## UI primitives

- Panels with 3–8px radius, hairline green borders
- ASCII `[x]` list bullets
- Blinking block cursor: `animation: blink 1.1s step-end infinite`

## Terminal window chrome

- Max width ~`1120px`, `8px` radius, green outer glow
- **Title bar** (`#070b07`): traffic lights `#ff5f56`, `#ffbd2e`, `#27c93f`
- Path label: `user@portfolio: ~/dev`
- Nav links: `~/work`, `~/stack`, `~/contact` — brighten on hover
- Amber status: `available for work` (or equivalent)

## Sections (each led by `user~/dev $ <command>`)

1. **`whoami --full`** — Hero: ~60px/800 name with glowing cursor; green role line; sage intro with green highlights; `[x]` meta (location + UTC, experience, availability); CTAs `$ ls ~/projects →` and `./contact --hire`
2. **`neofetch`** — ASCII avatar column (~230px) + `user@dev`; KV block (OS, Host, Role, Uptime, Shell, Stack, Focus, Status); 8 terminal color swatches
3. **`ls -la ~/projects`** — `> selected work`; project grid with `dirname/`, badge (`live` / `src` / `shipped` — no fake star counts), `-rwxr-xr-x`, tags (one amber), `live demo` / `source` links; card opens detail modal
4. **`cat stack.txt | sort -r`** — Proficiency bars: 150px label, 9px gradient track, honest percentages
5. **`./contact --hire`** — Centered panel, copyable `$ mail <email>`, social pills with `→`
6. **Footer** — `$ echo "(c) YYYY <name>…"` + decorative git status line

Additional real content (experience log, awards, education) may appear as extra prompted sections while keeping the same visual language.

## Layout rules

- Thin green gradient rules between major blocks
- Responsive: title bar and grids stack; neofetch avatar above info on narrow viewports
- **Avoid:** purple/indigo palettes, Inter/system UI for body, emoji headings, stock hero photos
- Left-aligned, command-driven copy

## Implementation notes (this repo)

- Next.js App Router; styles in `app/globals.css`
- Project media URLs in `config/media.ts` (demo videos optional)
- Owner content in `data/site.ts`, `data/projects.ts`, etc.
