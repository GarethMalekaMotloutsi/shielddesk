
# ShieldDesk – Implementation Plan

## 1. Project Overview

ShieldDesk is a lightweight IT management and resilience platform designed for small businesses in South Africa.

The platform will help business owners monitor their IT infrastructure, identify risks, manage support requests and improve their overall IT resilience.

**Technology Stack:**
- Frontend: React, Vite and TypeScript
- Styling: Tailwind CSS
- Routing: React Router
- Backend: Supabase
- Database: PostgreSQL
- Authentication: Supabase Auth
- Database security: Supabase Row Level Security (RLS)
- Testing: Vitest and React Testing Library
- Version Control: Git and GitHub
- CI/CD: GitHub Actions
- Deployment: Vercel

## 2. Development Approach

Development will follow an incremental approach using Test-Driven Development (TDD).

Each feature will be developed through the following process:

1. Create or identify a GitHub Issue.
2. Create a separate feature branch.
3. Write tests for the expected behaviour.
4. Implement the feature.
5. Run linting, typechecking and tests.
6. Commit the changes using clear commit messages.
7. Open a Pull Request for review.
8. Merge the approved Pull Request into main.

All development work will be tracked through GitHub Issues and Pull Requests.

## 3. Implementation Phases

### Phase 1: Project Foundation

**Objective:** Establish the application structure and development environment.

Tasks:
- Configure the React and TypeScript project.
- Set up Tailwind CSS.
- Configure React Router.
- Establish reusable components and layouts.
- Configure ESLint.
- Configure TypeScript checking.
- Install and configure Vitest.
- Create GitHub Actions CI workflow.
- Prepare the Supabase project.

**Expected outcome:** A working application foundation with automated quality checks.

### Phase 2: Authentication and User Roles (F1)

**Objective:** Implement secure authentication and role-based access.

Tasks:
- Configure Supabase authentication.
- Create user profiles.
- Implement Owner, Technician and Admin roles.
- Create protected application routes.
- Implement role-based navigation.
- Configure Row Level Security policies.
- Test access restrictions between users.

**Expected outcome:** Users can log in and access only the features and information permitted by their roles.

### Phase 3: Free Resilience Check (F0)

**Objective:** Allow potential customers to evaluate their IT resilience.

Tasks:
- Build the public resilience questionnaire.
- Implement the scoring calculation.
- Display an indicative resilience score.
- Capture customer contact information.
- Store submitted assessments as leads.

**Expected outcome:** Visitors can complete the assessment and receive an indicative score.

### Phase 4: Sites and Asset Management (F2)

**Objective:** Allow businesses to manage their IT infrastructure.

Tasks:
- Create business site management.
- Implement site registration.
- Create an asset registry.
- Support different asset categories.
- Display asset status.
- Restrict business owners to their own sites and assets.

**Expected outcome:** Business owners can view and manage their registered IT assets.

### Phase 5: Resilience Audits and Scoring (F3)

**Objective:** Identify IT risks and calculate business resilience scores.

Tasks:
- Create the audit questionnaire.
- Implement audit categories and scoring weights.
- Support Yes, Partial, No and Not Applicable responses.
- Calculate the overall resilience score.
- Generate fix items from identified risks.
- Assign severity levels to identified issues.
- Store audit history.

**Scoring categories:**
- Backups: 25%
- Microsoft 365 and Accounts: 20%
- Network: 15%
- CCTV and Biometrics: 15%
- POPIA Readiness: 15%
- Power and Connectivity: 10%

**Expected outcome:** Businesses can complete audits, view their resilience scores and identify areas requiring attention.

### Phase 6: Service Desk (F4)

**Objective:** Provide a central place to manage IT support requests.

Tasks:
- Create support tickets.
- Implement ticket priorities.
- Implement ticket statuses.
- Assign tickets to technicians.
- Add ticket comments.
- Record first-response times.
- Restrict technicians to assigned sites and tickets.

**Expected outcome:** Customers can submit support requests and technicians can manage assigned tickets.

### Phase 7: Reporting and Administration (F5)

**Objective:** Provide business owners and administrators with useful operational information.

Tasks:
- Create monthly health reports.
- Display resilience score trends.
- Display resolved tickets.
- Calculate average response times.
- Display outstanding risks.
- Estimate downtime avoided.
- Create the administrator dashboard.
- Display customer and subscription information.
- Display monthly recurring revenue (MRR).
- Provide printable reports.

**Expected outcome:** Business owners can monitor their IT health while administrators can oversee the platform.

## 4. Database Implementation

Supabase PostgreSQL will be used as the primary database.

The planned database tables are:

- profiles
- businesses
- plans
- sites
- assets
- audits
- audit_answers
- fix_items
- tickets
- ticket_comments
- leads
- outage_log

Database migrations will be used to manage schema changes.

Row Level Security will enforce access permissions at database level.

## 5. Testing Strategy

Testing will be performed throughout development.

The following areas will be tested:

- Authentication and login.
- User role permissions.
- Row Level Security policies.
- Resilience score calculations.
- Form validation.
- Site and asset management.
- Ticket creation and updates.
- Dashboard data.
- Report calculations.

Vitest and React Testing Library will be used for frontend tests.

Database security tests will verify that users cannot access information belonging to other businesses.

## 6. Continuous Integration

GitHub Actions will automatically run checks whenever a Pull Request is created or updated.

The CI pipeline will include:

1. Dependency installation.
2. ESLint checks.
3. TypeScript typechecking.
4. Automated tests.
5. Production build.

A Pull Request should pass all required checks before being merged into the main branch.

## 7. Deployment Strategy

The application will be deployed using Vercel.

Supabase will provide the hosted database and authentication services.

Environment variables will be configured securely for development and production.

The deployed application will be tested to confirm that authentication, database access and the main features work correctly.

## 8. Development Priorities

Development will prioritise the required end-to-end functionality.

The implementation order will be:

1. Project setup and CI.
2. Supabase database and authentication.
3. User roles and database security.
4. Free Resilience Check.
5. Sites and asset management.
6. Resilience audits and scoring.
7. Service desk.
8. Reporting and administration.
9. Final testing and deployment.

## 9. Expected Final Deliverable

The final deliverable will be a deployed, responsive ShieldDesk web application with:

- Working authentication.
- At least two functional user roles.
- A hosted PostgreSQL database.
- Backend-enforced access permissions.
- Working core business features.
- Automated tests.
- GitHub Actions CI.
- A public deployment link.
- Documentation and demonstration video.
