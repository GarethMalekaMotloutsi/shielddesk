---
name: "ShieldDesk — Design System"
description: "Calm, trustworthy light-mode design system for ShieldDesk, a B2B security and IT-care platform for South African small businesses."
---

## Overview

ShieldDesk is a modern B2B security and IT-care web application built for small and medium-sized businesses in South Africa. The interface feels calm, confident, and trustworthy—like a reliable IT partner who explains things clearly rather than a noisy cybersecurity alarm.

The visual direction pairs **Corporate / Modern** clarity with **Minimalist** breathing room: generous whitespace, a crisp card-based layout with `12px` rounded corners, soft ambient shadows, and a restrained palette anchored by Deep Navy (`#0B1F3A`) for authoritative headers and dark surfaces, and vibrant Teal (`#14B8A6`) for primary actions. Status colors are reserved strictly for risk indicators so owners and office managers can read their business resilience at a glance.

## Colors

ShieldDesk uses a light-first palette with white (`#FFFFFF`) and very light gray (`#F5F7FA`) backgrounds, anchored by Deep Navy (`#0B1F3A`) for navigation headers, dark feature bands, and high-trust typography. Teal (`#14B8A6`) serves exclusively as the primary action color.

- **Brand & Action:** `primary` (`#14B8A6`) drives primary calls to action and active focus states, paired with `on-primary` (`#0B1F3A`) for crisp, accessible contrast. `primary-hover` (`#00A392`) and `primary-container` (`#E5F4F0`) provide subtle interactive and tinted states.
- **Navy Surfaces:** `navy` (`#0B1F3A`) anchors headers, dark hero/CTA bands, and footer surfaces, paired with `on-navy` (`#FFFFFF`) and `navy-muted` (`#B5C7EA`) for secondary text on dark backgrounds.
- **Light Surfaces:** `surface` (`#FFFFFF`) for elevated cards and `surface-subtle` (`#F5F7FA`) for page canvas backgrounds, paired with `on-surface` (`#0B1F3A`) and `on-surface-muted` (`#44474A`).
- **Risk Status Only:** `status-good` (`#22C55E`), `status-at-risk` (`#F59E0B`), and `status-critical` (`#EF4444`)—along with their accessible container and text pairs—are reserved strictly for Resilience Score rings, category health chips, and risk alerts. Never use status colors decoratively.

```yaml
colors:
  primary: "#14B8A6"
  on-primary: "#0B1F3A"
  primary-hover: "#00A392"
  primary-container: "#E5F4F0"
  on-primary-container: "#003731"
  navy: "#0B1F3A"
  on-navy: "#FFFFFF"
  navy-surface-elevated: "#1F314D"
  on-navy-surface-elevated: "#FFFFFF"
  navy-muted: "#B5C7EA"
  surface: "#FFFFFF"
  on-surface: "#0B1F3A"
  surface-subtle: "#F5F7FA"
  on-surface-subtle: "#0B1F3A"
  on-surface-muted: "#44474A"
  outline: "#C4C7CA"
  outline-subtle: "#E0E3E6"
  status-good: "#22C55E"
  on-status-good: "#002109"
  status-good-container: "#C5FFC9"
  on-status-good-container: "#003915"
  status-good-text: "#006E2F"
  status-at-risk: "#F59E0B"
  on-status-at-risk: "#2A1700"
  status-at-risk-container: "#FFEEDE"
  on-status-at-risk-container: "#472A00"
  status-at-risk-text: "#855300"
  status-critical: "#EF4444"
  on-status-critical: "#410004"
  status-critical-container: "#FFEDEB"
  on-status-critical-container: "#68000A"
  status-critical-text: "#B91A24"
```

## Typography

**Inter** is used across all roles—display, headlines, body, and UI labels—creating a clean, approachable, and highly legible hierarchy. Large, friendly tabular numerals (`tabular-nums`) give Resilience Scores and ZAR pricing immediate clarity.

Simple, uniform-weight line icons (**Material Symbols Outlined**, weight 400, unfilled) accompany status chips, feature cards, and navigation actions without visual clutter.

```yaml
typography:
  display-xl:
    fontFamily: "Inter"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 62px
    letterSpacing: -1px
  display-xl-mobile:
    fontFamily: "Inter"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Inter"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 50px
    letterSpacing: -0.75px
  display-lg-mobile:
    fontFamily: "Inter"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.5px
  headline-lg:
    fontFamily: "Inter"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: -0.5px
  headline-md:
    fontFamily: "Inter"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.25px
  headline-sm:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.15px
  title-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Inter"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  label-md:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.2px
```

## Layout & Spacing

ShieldDesk uses a **Fixed-Max-Width 12-Column Grid** (`max-w-7xl`, 1280px) on desktop with `24px` page gutters and generous vertical section padding (`64px` to `96px`) so every band breathes. On tablet (`768px`) and mobile (`390px`), multi-column grids collapse cleanly to 2 or 1 column with `16px` gutters.

All spacing follows a strict `4px` / `8px` rhythm. Internal component padding (`16px`–`24px`) stays distinct from section-level gaps (`48px`–`80px`) so cards never feel cramped or detached.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section-sm: 48px
  section-md: 64px
  section-lg: 80px
  page-margin: 24px
```

## Elevation & Depth

Hierarchy is established primarily through **tonal surface contrast** (white `#FFFFFF` cards resting on `#F5F7FA` light gray bands) paired with **soft ambient shadows** (`0 4px 20px -2px rgba(11, 31, 58, 0.06)`) and subtle `1px` `outline-subtle` (`#E0E3E6`) borders. Never use heavy drop shadows or glassmorphism blur effects.

## Shapes

ShieldDesk uses a consistent, approachable `12px` (`rounded-md`) corner radius for cards, pricing panels, and feature containers. Buttons and inputs use `8px` (`rounded-DEFAULT`) or `12px`, while status chips and category pills use `9999px` (`rounded-full`).

```yaml
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
```

## Motion & Micro-interaction

Motion is calm, crisp, and purposeful. Hover and focus transitions on buttons and cards complete within `150ms` using `ease-out`, while larger state changes use `250ms`. Nothing bounces, pulses decoratively, or animates layout properties. Respect `prefers-reduced-motion`.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 250ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

- **Tone of voice:** Calm, plain-spoken, and reassuring. Speak like a trusted local IT advisor—never use fear-mongering or dense cybersecurity jargon ("zero-trust telemetry", "endpoint SIEM"). Say "Untested backups" instead of "Unverified disaster recovery snapshots".
- **Capitalisation:** Sentence case for all headlines, subheadings, card titles, buttons, and status chips.
- **Button labels:** Clear verb-led outcomes ("Get my free Resilience Check", "Log in", "Start with Growth").
- **Numbers & currency:** South African Rand formatted as `R899`, `R1,999`, `R3,999` (no decimals for whole-rand monthly fees), with `tabular-nums` on all scores and prices.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Chip** → `@components/chip.html`: `chip-action`, `chip-input`, `chip-with-icon`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
