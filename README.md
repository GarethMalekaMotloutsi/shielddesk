# 🛡️ ShieldDesk

**The IT department small businesses can't afford.**
ShieldDesk keeps small businesses online, backed up and POPIA-ready for a fixed monthly fee, with a live Resilience Score that shows exactly what is at risk and what to fix first.

| | |
|---|---|
| **Live app** | _Coming Tuesday 24 Nov_ |
| **Stitch designs** | [View the ShieldDesk designs in Stitch](https://stitch.google.com/projects/1154292544097062411) |
| **Loom pitch and demo** | _Coming Wednesday 25 Nov_ |
| **Test logins** | _Added when the live app is deployed_ |

## The problem

Small South African businesses with 5 to 50 staff depend on IT but have no IT person. Backups are never tested, CCTV and biometric systems fail silently, Microsoft 365 and network security are weak, POPIA exposure is unmanaged, and every outage is a surprise.

## The solution

ShieldDesk gives each business a **Resilience Score** (0 to 100), a **service desk** with real technicians, and a **monthly health report**, for a fixed monthly fee.

## Must features

1. **Login and roles**: Owner, Technician and Admin, enforced with database-level security (Supabase RLS)
2. **Sites and asset registry**: routers, NAS, DVR/NVR, biometric devices, M365
3. **Resilience Audit and Score**: guided audit, weighted score, prioritised fix list
4. **Service desk**: tickets with assignment, status and comments
5. **Monthly health report and admin dashboard**: score trend, response times, MRR
6. **Free Resilience Check**: public lead-capture quiz

## Designs

The Stitch exports are in [`docs/designs/`](./docs/designs/).

## Screenshots

_Added once the UI is built._

## Tech stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS, React Router
- **Backend:** Supabase (Postgres, Auth, Row Level Security)
- **Testing:** Vitest and Testing Library
- **CI/CD:** GitHub Actions (lint, typecheck, test, build on every PR), Vercel for hosting
- **Design:** Stitch

## Architecture

```
Browser (React + Vite SPA)
        │  supabase-js
        ▼
Supabase
 ├─ Auth (email/password, roles in profiles.role)
 ├─ Postgres (businesses, sites, assets, audits, tickets, leads…)
 └─ Row Level Security (Owner / Technician / Admin policies)
```

## Run it locally

```bash
git clone <this-repo-url>
cd shielddesk
npm install
cp .env.example .env   # add your Supabase URL and anon key
npm run dev
```

## Run the tests

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Known issues

_None recorded yet. This section is updated as the build progresses._

## Documentation

- [BUSINESS.md](./BUSINESS.md): problem, customer, solution, impact, model, go-to-market, competition
- [docs/PRD.md](./docs/PRD.md): product requirements
- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md): phased build plan _(added Monday afternoon)_

## Author

Built by **Gareth** as the Melsoft Academy final capstone.