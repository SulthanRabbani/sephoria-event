# Chronologie Figma cache notes

This file documents the minimal local cache created from the Chronologie Figma file so future slicing/native refactors can avoid unnecessary API calls.

## Source file
- Figma file: `Chronologie`
- File key: `h4k9Y3XhfrLXVtjgk5hTkX`
- Cached structure JSON: `.figma-full-cache/chronologie-file-depth2.json`
- Cached route map: `.figma-full-cache/route-node-map.json`

## Current frame → route map

| Figma frame | Node ID | Size | Route | Runtime render |
| --- | --- | --- | --- | --- |
| Homepage | `1:251` | 1440×5601 | `/` | `/chronologie/renders/homepage.png` |
| Collection | `1:488` | 1440×2519 | `/collection` | `/chronologie/renders/collection.png` |
| Collection > Product Detail | `14:2` | 1440×2719 | `/collection/submariner-no-date` | `/chronologie/renders/product-detail.png` |
| Brand | `1:655` | 1440×1982 | `/maisons` | `/chronologie/renders/brand.png` |
| Brand > Brand Detail | `20:3` | 1440×2244 | `/maisons/aerowatch` | `/chronologie/renders/brand-detail.png` |
| News | `1:821` | 1440×1858 | `/journal` | `/chronologie/renders/news.png` |
| News > Detail | `23:4` | 1440×2264 | `/journal/the-art-of-collecting-vintage-rolex` | `/chronologie/renders/news-detail.png` |
| About | `6:2` | 1440×2967 | `/about` | `/chronologie/renders/about.png` |
| Contact | `1:922` | 1440×1299 | `/contact` | `/chronologie/renders/contact.png` |

## Cached design-system boards

Saved once via a single batched image export call:
- Colors board (`88:42`) → `.figma-full-cache/design-system-images/colors.png`
- Typography board (`88:282`) → `.figma-full-cache/design-system-images/typography.png`

## Practical design tokens inferred from the design-system boards

### Colors
Suggested brand-oriented tokens:
- `background`: `#FAFAFA`
- `surface`: `#F4F3F2`
- `ink`: `#2B2622`
- `muted`: `#8B857F`
- `accent`: `#A08F6D`
- `border`: `#D9D7D5`

Visible palette families from the board:
- Black: `#050505`
- White: `#FAFAFA`
- Primary/khaki: `#2B2622`, `#3A332E`, `#4A433D`, `#6A635C`, `#8B857F`, `#B1ADA9`, `#D9D7D5`, `#F4F3F2`
- Secondary/beige: `#6F6148`, `#8A7A5A`, `#A08F6D`, `#B5A582`, `#CBBCA0`, `#DED7C4`, `#EEEAE0`, `#F8F6F2`

### Typography
Likely system from the board:
- Display serif: `Cormorant Garamond`
- UI/body sans: `Inter`

Visible scale:
- `H1`: 96
- `H2`: 60
- `H3`: 48
- `H4`: 38
- `Title`: 18/28
- `Body`: 16/28
- `Subtitle`: 12/16
- `Button`: 12/16

Visible weights:
- 300 Light
- 400 Regular
- 500 Medium
- 600 Semi Bold

## Efficiency note
The cache above was created to minimize repeat Figma API usage on the user's free-tier account. Prefer local cache + existing runtime renders before making additional Figma API requests.