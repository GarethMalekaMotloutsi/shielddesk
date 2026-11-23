# ShieldDesk — Product Requirements Document (PRD)

**Version:** 1.0  **Status:** Draft for build  **Owner:** Gareth
**Related:** [BUSINESS.md](../BUSINESS.md) · [IMPLEMENTATION_PLAN.md](../IMPLEMENTATION_PLAN.md)

## 1. Overview

ShieldDesk is a web app that lets small businesses see how resilient their IT is, get problems fixed by real technicians, and prove POPIA readiness. It has a public lead-capture check, a customer portal, a technician workspace and an admin console.

**Product goal:** a business owner can sign up, register a site, complete an audit, receive a score and a fix list, raise and track tickets, and read a monthly report, all on live data.

## 2. Users and roles

| Role | Description | Key goals |
|---|---|---|
| **Visitor** | Unauthenticated | Run the free check, sign up |
| **Owner** | Business owner or office manager | See score, manage sites and assets, raise tickets, read reports |
| **Technician** | ShieldDesk staff | Work assigned tickets, run audits, update assets |
| **Admin** | Founder | Manage customers, plans, technicians, see revenue |

### Permission matrix (enforced by Supabase RLS, not just the UI)

| Resource | Visitor | Owner | Technician | Admin |
|---|---|---|---|---|
| Free check (create lead) | Create | n/a | n/a | Read |
| Own business and sites | n/a | Read/Write | Read (assigned) | Read/Write all |
| Assets | n/a | Read/Write (own) | Read/Write (assigned sites) | Read/Write all |
| Audits and scores | n/a | Read/Create (own) | Read/Create/Review (assigned) | Read all |
| Tickets | n/a | Create/Read/Comment (own) | Read/Update/Comment (assigned) | Read/Assign all |
| Plans and subscriptions | n/a | Read own | none | Read/Write all |
| Reports | n/a | Read own | Read (assigned) | Read all |

## 3. Must features (day-one scope)

### F1. Authentication, roles and RLS
**User stories**
- As an Owner I can sign up and log in with email and password.
- As an Admin I can create Technician accounts and assign them to sites.
- As any user I only see data my role allows.

**Acceptance criteria**
- Email/password auth via Supabase; role stored in `profiles.role`.
- Every table has RLS enabled with policies matching the permission matrix.
- Automated tests prove an Owner cannot read another business's sites, tickets or audits.

### F2. Sites and asset registry
**User stories**
- As an Owner I can add one or more sites and register assets (router/firewall, switch, access point, NAS, DVR/NVR, biometric device, server, M365 tenant).
- As a Technician I can update asset details and notes (model, firmware, location, last backup test).

**Acceptance criteria**
- CRUD for sites and assets with validation.
- Asset types are a fixed list; each asset has status (`ok`, `at_risk`, `down`, `unknown`).
- List and detail views, responsive on mobile.

### F3. Resilience Audit and Score
**User stories**
- As an Owner or Technician I can complete a guided audit.
- As an Owner I see a 0 to 100 score, a breakdown by category and a prioritised fix list.

**Scoring model (v1)**

| Category | Weight | Example checks |
|---|---|---|
| Backups | 25 | Backup exists; tested restore in last 90 days; offsite/cloud copy |
| Microsoft 365 and accounts | 20 | MFA on; no shared admin; leavers removed; admin accounts separated |
| Network | 15 | Firmware current; guest Wi-Fi separated; default passwords changed; firewall in place |
| CCTV and biometrics | 15 | DVR disk health checked; footage retention set; access restricted; admin password changed |
| POPIA readiness | 15 | CCTV signage; information officer named; biometric consent recorded; retention policy |
| Power and connectivity | 10 | UPS on critical kit; failover connection; outage log kept |

- Each check is answered `yes` / `partial` / `no` / `n/a`; the score is the weighted average of applicable checks.
- Every `no` or `partial` generates a **fix item** with severity (high/medium/low) and an option to **create a ticket**.
- Audits are stored with history so the score trend can be shown.

### F4. Service desk (tickets)
**User stories**
- As an Owner I can raise a ticket (category, priority, description) for a site or asset.
- As a Technician I can see my queue, change status, and comment.
- As an Admin I can assign or reassign tickets.

**Acceptance criteria**
- Statuses: `open` → `in_progress` → `waiting_on_customer` → `resolved` → `closed`.
- Priorities: low, normal, high, critical.
- Comment thread with timestamps; first-response time is recorded automatically.
- Owners see only their tickets; Technicians only assigned ones.

### F5. Monthly health report and admin dashboard
**User stories**
- As an Owner I can open a monthly report: score trend, tickets resolved, average response time, open risks, and estimated downtime avoided.
- As an Admin I can see customers, plans, MRR, ticket volume and technician workload.

**Acceptance criteria**
- Report is generated from live data and printable (print stylesheet or PDF via browser).
- Admin dashboard shows MRR (sum of active plan prices), customer count, open critical tickets, and average score across customers.
- Plans (Starter, Growth, Shield) are stored in the database and assigned by Admin; no online payment in v1.

### F0. Free Resilience Check (public growth hook)
- Short 8 to 10 question public quiz.
- Shows an instant indicative score and a call to action to sign up.
- Stores the lead (name, business, email, phone, score) for the Admin to see.

## 4. Out of scope for v1 (known and intentional)

- Online payments or invoicing (manual plan assignment in v1)
- Live device monitoring or agents
- Native mobile apps
- Multi-language support
- Legal or compliance certification of any kind

## 5. Data model (initial)

| Table | Key fields |
|---|---|
| `profiles` | id (auth user), full_name, role, phone, business_id |
| `businesses` | id, name, industry, size, plan_id, created_at |
| `plans` | id, name, price_zar, description |
| `sites` | id, business_id, name, address, assigned_technician_id |
| `assets` | id, site_id, type, name, model, firmware, status, last_backup_test_at, notes |
| `audits` | id, site_id, created_by, score, created_at |
| `audit_answers` | id, audit_id, check_key, answer, category |
| `fix_items` | id, audit_id, check_key, severity, title, ticket_id |
| `tickets` | id, site_id, asset_id, created_by, assigned_to, category, priority, status, title, description, created_at, first_response_at, resolved_at |
| `ticket_comments` | id, ticket_id, author_id, body, created_at |
| `leads` | id, name, business, email, phone, score, created_at |
| `outage_log` | id, site_id, started_at, ended_at, cause, estimated_cost_zar |

## 6. Non-functional requirements

- **Security:** RLS on every table; no service-role key in the client; input validation; secrets only in environment variables.
- **Performance:** first load under 3 s on 4G; main pages under 200 KB of JS after gzip where possible.
- **Responsive:** designed mobile-first, verified at 375 px, 768 px and 1280 px.
- **Accessibility:** semantic HTML, labelled inputs, sufficient contrast, keyboard-navigable.
- **Quality:** lint, typecheck, tests and build run in CI on every PR; PRs required to merge.
- **Privacy:** minimal personal data; clear purpose for each field (POPIA-aware).

## 7. Success metrics

- Product: an Owner completes signup → first audit → score in under 10 minutes.
- Business: free-check-to-signup conversion; audit-to-ticket conversion; 90-day average score uplift.
- Capstone: all five Must features work on the live link with real data.

## 8. Screens (inputs for Stitch designs)

**Public:** Landing page · Free Resilience Check · Result and signup · Login
**Owner:** Dashboard (score ring, top risks, open tickets) · Sites list/detail · Asset detail · Audit wizard · Audit result and fix list · Tickets list/detail · Monthly report
**Technician:** My queue · Ticket detail (with site and asset context) · Audit review
**Admin:** Overview (MRR, customers, critical tickets) · Customers · Technicians and assignments · Leads · Plans

**Design direction:** a calm, confident security-product feel. Dark navy and teal, with amber/red reserved for risk. Large score ring as the hero element, card-based layout, plain language, no jargon without explanation. Mobile and desktop versions of every screen above.

## 9. Open questions

- Which email provider for notifications (v1 may skip email and use in-app status only)?
- Do Technicians belong to one Admin organisation or can they be freelancers later?
- What is the minimum asset set to require at onboarding?
