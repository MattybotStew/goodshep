# AGENTS.md — Good Shepherd Manor

Instructions for any LLM or agent working in this repo or on the production site.

## What this project is

Good Shepherd Manor (GSM) is a residential care community in Momence, IL for men with intellectual and developmental disabilities. This repo is a **wireframe prototype only** (Vite + React). It is not the production frontend.

The production site is **WordPress on WP Engine**: **Astra + Elementor**, built from one official Astra starter template with as little customization as possible.

Agency: CloudMellow. SOW cap: **15 main pages**. Blog posts and newsletter archive items do not count.

## North star

Prefer the starter template’s layout over the React wires.

- The wires decide **what pages exist, what each page says, and which URLs to use**.
- The starter decides **how it looks**.
- If a wire asks for a layout the starter does not already have, **drop the wire**. Do not add custom CSS, custom theme files, or Elementor Theme Builder work to chase the prototype.
- Do not embed, port, or deploy this Vite app on WordPress.

## Locked stack

| Layer | Choice |
|---|---|
| Host | WP Engine (staging first, then production) |
| Theme | Astra (free). Astra Pro is optional. |
| Page builder | Elementor (free). Elementor Pro is optional. |
| Starter | **Non-Profit Organization** — `non-profit-organization-04` (premium) |
| Demo | https://websitedemos.net/non-profit-organization-04/ |
| Listing | https://wpastra.com/templates/non-profit-organization-04/ |

Import the **Elementor** version of Non-Profit Organization 04 on a **clean** WP Engine staging site. One import. Do not mix starters. This starter requires Premium Starter Templates (Astra paid plan).

The React wires in this repo now follow that starter’s section patterns (hero + 01/02/03, about split, impact counters, donate CTA band, story cards, partner row).

### Why Non-Profit Organization 04

Chosen as the production starter. It ships Home, About Us, Our Work, Stories, Donate, and Contact — enough layouts to duplicate for the 15-page SOW without designing new templates.

### Do not use these starters

- `elderly-care-02` — earlier candidate; do not mix it with 04
- `charity-02` — handwritten type, campaign colors, wrong voice
- `communities-02` — donate band on every page
- `general-hospital-04` — clinic/appointment site; Health is one program, not the brand

## Import rules

1. Fresh WP Engine staging. Never import a starter onto a site that already has pages.
2. Install Astra, then Premium Starter Templates. Choose Non-Profit Organization 04 → Elementor.
3. Decline plugins you will not use (SureCart, LatePoint, etc.) unless GSM is actually taking donations or bookings on-site.
4. After import, change only: logo, colors, type, menus, and content.
5. Duplicate existing layouts. Do not design new page templates.

## What goes where

**Astra Customizer (once, site-wide)**

- Colors, typography, container width
- Header: logo + nav + Donate button → `/ways-to-give`
- Above-header bar: “Now Hiring — Direct Service Providers. Apply Today →” `/careers`
- Footer: contact, quick links, newsletter, Facebook, Privacy, Accessibility, copyright
- Sticky header

Do **not** rebuild header or footer in Elementor.

**Elementor (page canvases only)**

- Home, About, Programs landing, four program pages, Support GSM cluster, Events, Newsletters, Careers, Contact
- Reuse imported layouts: Our Work for program pages, Stories for News, Donate for Ways to Give / Endowment, Contact for Careers extras as needed

**WordPress native**

- News & Updates = Posts + category archive (`/news`)
- Jobs = Careers page sections, or posts in a `jobs` category — not a custom plugin unless required
- Contact + newsletter = starter/Elementor forms wired to a real destination
- Privacy = a simple page (does not count against the 15)

**Astra Pro** — buy only for above-header banner, Programs dropdown, or header button if free Astra cannot do them cleanly.

**Elementor Pro** — skip unless Theme Builder or popup forms become necessary. They should not.

## The 15 pages (SOW)

Canonical source in this repo: `src/pages/SitemapPage.jsx`.

| # | Page | Slug | Notes |
|---|---|---|---|
| 1 | Home | `/` | Gateway |
| 2 | About Us | `/about` | Sections: History; Mission, Vision & Values; Affiliations; Accessibility |
| 3 | Programs & Services | `/programs` | Landing |
| 4 | Community Day Services | `/programs/community-day-services` | Section: Digital Den |
| 5 | Vocational Program | `/programs/vocational` | Client TBD — cheapest scope cut |
| 6 | Residential Living | `/programs/residential-living` | |
| 7 | Health & Well Being | `/programs/health-well-being` | Sections: nursing, clinic, pharmacy, supports, transportation |
| 8 | GSM Foundation | `/support-gsm` | |
| 9 | Ways to Give / Donate | `/ways-to-give` | Header Donate target |
| 10 | Shepherd Endowment Society | `/shepherd-endowment-society` | |
| 11 | Events | `/events` | Sections: Fall Festival, Golf Invitational, Family Events |
| 12 | News & Updates | `/news` | Blog hub (counts as a page) |
| 13 | Newsletters & Family Resources | `/newsletters` | Archive + signup |
| 14 | Careers | `/careers` | Job openings + benefits |
| 15 | Contact Us | `/contact` | Form, staff directory, map, Thank a Staff Member |

Utility (not in the 15): `/privacy`. Accessibility lives on About (`/about#accessibility`) and in the footer.

Programs is a **parent page** with four children so breadcrumbs read `Home › Programs › Health & Well Being`.

Do **not** publish the React `/sitemap` diagram. It is a project artifact.

### Sections vs pages

These are sections, not extra pages: History, Mission/Values, Affiliations, Accessibility, Digital Den, Health subtopics, event types, job openings/benefits, contact form/directory/map/thank-a-staff.

Phase 2 may promote a section to a page. Keep the original hash when promoting so old links still work.

## Starter page remap

| Imported 04 page | Becomes |
|---|---|
| Home | Home — swap copy and photos only |
| About Us | About Us |
| Our Work | Programs landing, then **duplicate four times** for the four programs |
| Stories | News & Updates |
| Donate | Ways to Give |
| Contact | Contact Us |

Duplicate those same layouts for GSM Foundation, Endowment, Events, Newsletters, and Careers. Do not start blank Elementor canvases.

Home section order (match the demo):

1. Hero + Donate Now
2. Numbered 01 Programs / 02 Get involved / 03 Donate
3. About split + Read More
4. Impact counters
5. Dark “better tomorrow” donate band
6. Two story cards
7. Partners / affiliations

## URLs that must not be used

The React prototype has leftover hash URLs. They are wrong. Use the table above.

| Wrong (prototype) | Right |
|---|---|
| `/programs#health` | `/programs/health-well-being` |
| `/programs#community-day` | `/programs/community-day-services` |
| `/programs#vocational` | `/programs/vocational` |
| `/programs#residential` | `/programs/residential-living` |
| `/support-gsm#events` | `/events` |

## Global chrome

Header nav (6 items): About, Programs, Support GSM, News, Careers, Contact. Plus Donate button.

Footer: phone `(815) 472-3700`, P.O. Box 260, 4129 N. State Route 1-17, Momence, IL 60954; quick links; newsletter (real list, labeled field); real GSM Facebook URL; Privacy; Accessibility; `© 2026 The Good Shepherd Manor`.

## Design tokens (Astra Customizer only)

Set once. Do not restyle per page in Elementor.

| Token | Value |
|---|---|
| Primary / navy | `#002A4E` |
| Secondary navy | `#033761` |
| Accent | `#0089DF` |
| Body text | `#303336` |
| Page background | `#FAFCFE` |
| Font | Source Sans 3 |

## Content sources in this repo

Use these for copy, section order, and IA. Do not treat their CSS as a spec.

| File | Use for |
|---|---|
| `src/pages/SitemapPage.jsx` | 15-page IA, sections, SOW notes |
| `src/pages/HomePage.jsx` | Home copy and 04 section order |
| `src/pages/*.jsx` | Remaining 15-page wires (About through Contact) |
| `src/data/site.js` | Shared stats, program cards, news, jobs |
| `src/data/programs.js` / `src/data/health.js` | Program page copy and section IDs |
| `src/styles/starter.css` | Shared 04-style layout classes (not a WP spec) |
| `src/components/Layout.jsx` | Nav labels, footer contact, hiring banner, Donate |
| `src/components/ProgramPage.jsx` | Program page **section order** only |
| `design/sitemap-structure.md` | Figma extract (older; SitemapPage wins on conflicts) |

Health & Well Being is the first program to build. Its section IDs: `nursing`, `clinic`, `pharmacy`, `supports`, `transportation`.

## Build order (WordPress)

1. Import Non-Profit Organization 04 on staging
2. Astra globals: colors, type, logo, header, hiring bar, footer, menus
3. Create the 15 pages with the slugs above (empty is fine)
4. Home — swap copy into the imported layout
5. Duplicate Services → Health & Well Being, then the other three programs
6. About, Contact, Careers
7. Support GSM, Ways to Give, Endowment, Events
8. News (posts) + Newsletters
9. Wire forms, real Facebook URL, Accessibility, staging QA
10. 301s on WP Engine if this replaces the current GSM site, then production

## Working in this React repo

This app is a clickable wire. Further React work is optional and should stay thin.

- Keep the 15-page IA and the locked slugs if you add pages.
- Do not polish CSS to match Astra/Elderly Home.
- Do not add routes, components, or comments that invent a different sitemap.
- `/sitemap` is for stakeholders. Production will not have it.
- Do not commit `.env` secrets or copy them into docs.

Local: `npm install` then `npm run dev` (http://localhost:5173).

## Hard rules

- 15 main pages. No more.
- One starter, one import, one inner-page layout reused.
- No custom Astra child-theme CSS unless a real accessibility or header-offset bug requires a few lines.
- No Elementor Theme Builder header/footer.
- No new plugins without a concrete need (donations, jobs board, events calendar). Events is **one page with sections**, not The Events Calendar, unless the client will run many dated events.
- Do not invent pages, slugs, or nav items.
- Vocational is the approved scope cut if the build runs long.
- Purge WP Engine cache after Elementor edits.

## Conflicts

1. This file wins over chat history.
2. `src/pages/SitemapPage.jsx` wins over `design/sitemap-structure.md`.
3. Locked slugs in this file win over hash links in `HomePage.jsx` / `Layout.jsx`.
4. Non-Profit Organization 04 layout wins over React CSS when building WordPress.
