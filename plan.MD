# Catherine McMillan — Personal Website Design Specification

**Domain:** catherine-mcmillan.com
**Tech Stack:** Astro
**Last Updated:** February 14, 2026

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout System](#4-spacing--layout-system)
5. [Global Components](#5-global-components)
6. [Page 1: Home](#6-page-1-home)
7. [Page 2: About](#7-page-2-about)
8. [Page 3: Work With Me](#8-page-3-work-with-me)
9. [Page 4: Writing](#9-page-4-writing)
10. [Page 5: Events](#10-page-5-events)
11. [Interactions & Motion](#11-interactions--motion)
12. [Responsive Behavior](#12-responsive-behavior)
13. [SEO & Metadata](#13-seo--metadata)
14. [Integrations](#14-integrations)
15. [Open Items](#15-open-items)

---

## 1. Design Philosophy

### Aesthetic Direction
**"Editorial Warmth"** — The site should feel like opening a beautifully designed monograph. Every element has earned its place. The experience is warm, unhurried, and confident. It does not try to impress with tricks. It impresses because every detail is considered.

### Reference
The primary design reference is **Anthropic's website** (anthropic.com): clean off-white backgrounds, restrained typography, generous whitespace, confident but never flashy. Apply that same discipline but with more warmth (cream vs. cool white) and editorial personality (serif headlines vs. pure sans-serif).

### Three Words
The site should feel: **world-class, approachable, competent.**

### What This Site Is NOT
- Not a generic Squarespace template
- Not a cluttered LinkedIn profile
- Not a corporate consulting firm site
- Not overly animated or gimmicky
- Not cold or sterile

### Core Design Principles
1. **Generous whitespace everywhere.** If it feels like there's too much space, it's probably right.
2. **Photography as a design element.** Photos should feel like they belong to the layout — asymmetric crops, images that bleed to edges, not boxed into containers.
3. **Micro-interactions, not animations.** Subtle hover states, smooth transitions. No parallax scrolling, no bouncing elements, no scroll-jacking.
4. **One CTA per page section.** Never two competing calls to action. The site funnels toward the intake form on the Work With Me page.
5. **Restraint over decoration.** When in doubt, remove. Every element must justify its presence.

---

## 2. Color System

### Primary Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAF7F2` | Primary page background. Warm off-white, like linen paper. Never stark white. |
| `--bg-warm` | `#F5F0E8` | Secondary background for alternating sections (e.g., About preview, footer). Slightly darker warm tone. |
| `--text-primary` | `#2A2A2A` | Body text, primary headings. Deep charcoal, not pure black. |
| `--text-secondary` | `#8A7E72` | Subheadings, descriptions, secondary body text. Warm gray-brown. |
| `--text-tertiary` | `#B5AA9E` | Captions, metadata, labels, dates. Lightest readable text. |
| `--accent` | `#BF7B5E` | CTAs, hover states, active links, thin rule accents. Warm terracotta/clay. Used sparingly. |
| `--accent-hover` | `#A8694F` | Darker accent for hover/active states on accent-colored elements. |
| `--accent-light` | `rgba(191, 123, 94, 0.08)` | Text selection highlight, subtle accent backgrounds. |
| `--espresso` | `#3D2E1F` | Hero headline, strong emphasis text. Deep warm brown. Used for maximum contrast moments. |
| `--stone` | `#A09484` | Dividers, borders, placeholder text, disabled states. Warm stone. |
| `--rule` | `rgba(42, 42, 42, 0.08)` | Hairline dividers, card borders, nav bottom border. Nearly invisible separation. |

### Usage Rules
- The accent color (`--accent`) should appear no more than 3-4 times per viewport. It draws the eye — use it only for CTAs and intentional highlights.
- Body text is always `--text-primary` or `--text-secondary`. Never pure `#000000`.
- Background alternates between `--bg` and `--bg-warm` to create subtle section separation without hard borders.
- Text selection should use `--accent-light` background with `--espresso` text color.

---

## 3. Typography System

### Font Stack

| Role | Font Family | Fallback | Google Fonts Weight Range |
|---|---|---|---|
| **Display / Headlines** | Cormorant Garamond | Georgia, serif | 300, 400, 500, 600 (+ italic 300, 400, 500) |
| **Body / UI** | DM Sans | -apple-system, BlinkMacSystemFont, sans-serif | 300, 400, 500, 600 (+ italic 300, 400) |

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Color | Notes |
|---|---|---|---|---|---|---|---|
| **Hero Name** | Cormorant Garamond | `clamp(3rem, 5.5vw, 5rem)` | 300 | 1.05 | -0.02em | `--espresso` | Largest text on site. Light weight for elegance. |
| **Hero Positioning** | Cormorant Garamond | `clamp(1.15rem, 1.8vw, 1.4rem)` | 300 italic | 1.6 | 0 | `--text-secondary` | Italic serif, softer than headline. |
| **Section Heading (H2)** | Cormorant Garamond | `clamp(1.8rem, 3vw, 2.5rem)` | 300 | 1.3 | -0.01em | `--espresso` | Used for major section titles. |
| **Card Title (H3)** | Cormorant Garamond | `1.75rem` | 400 | 1.2 | 0 | `--espresso` | Pathway cards, writing titles. |
| **Body Text** | DM Sans | `0.95rem` | 400 | 1.75 | 0 | `--text-secondary` | Primary body paragraphs. |
| **Body Text (emphasis)** | DM Sans | `0.95rem` | 400 | 1.75 | 0 | `--text-primary` | When body text needs more weight (About page prose). |
| **Section Label** | DM Sans | `0.7rem` | 500 | 1.4 | 0.2em | `--text-tertiary` | ALL CAPS. Used above sections: "HOW I WORK", "SELECTED WRITING", etc. |
| **Eyebrow** | DM Sans | `0.75rem` | 500 | 1.4 | 0.15em | `--accent` | ALL CAPS. Hero eyebrow, special callouts. |
| **Nav Links** | DM Sans | `0.825rem` | 400 | 1 | 0.04em | `--text-secondary` | ALL CAPS. Hover → `--text-primary`. |
| **Nav CTA** | DM Sans | `0.8rem` | 500 | 1 | 0.06em | `--accent` | ALL CAPS. Button style. |
| **CTA Link (inline)** | DM Sans | `0.825rem` | 500 | 1 | 0.06em | `--accent` | ALL CAPS. With arrow icon →. |
| **Card Description** | DM Sans | `0.9rem` | 400 | 1.65 | 0 | `--text-secondary` | Pathway cards, event descriptions. |
| **Trust Bar** | DM Sans | `0.75rem` | 400 | 1 | 0.1em | `--text-tertiary` | ALL CAPS. Spaced with dot separators. |
| **Metadata / Date** | DM Sans | `0.8rem` | 400 | 1.4 | 0.02em | `--text-tertiary` | Writing dates, event dates. |
| **Form Label** | DM Sans | `0.8rem` | 500 | 1.4 | 0.04em | `--text-primary` | ALL CAPS. Intake form labels. |
| **Form Input** | DM Sans | `0.95rem` | 400 | 1.5 | 0 | `--text-primary` | Inside form fields. |
| **Form Placeholder** | DM Sans | `0.95rem` | 400 | 1.5 | 0 | `--text-tertiary` | Placeholder text in inputs. |
| **Footer Text** | DM Sans | `0.8rem` | 400 | 1.6 | 0.02em | `--text-tertiary` | Copyright, footer links. |

### Typography Rules
- Never use bold (700+) anywhere on the site. The heaviest weight is 600, and it should be used very rarely.
- Serif (Cormorant Garamond) is for display: hero, headings, card titles, pull quotes.
- Sans-serif (DM Sans) is for everything functional: body, navigation, labels, CTAs, forms, metadata.
- All uppercase text must have letter-spacing ≥ 0.04em. The smaller the text, the wider the spacing.
- Maximum body text width: 65 characters (~520px). Prevents lines from running too long.
- Paragraph spacing: 1rem between paragraphs within a section.

---

## 4. Spacing & Layout System

### Grid
- **Max content width:** 1400px, centered with auto margins.
- **Page padding (horizontal):** 3rem on desktop, 1.5rem on mobile.
- **Column system:** CSS Grid or Flexbox. No framework. Align to a conceptual 12-column grid at 1400px.

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `0.5rem` (8px) | Tight spacing within components. |
| `--space-sm` | `1rem` (16px) | Paragraph gaps, small component gaps. |
| `--space-md` | `1.5rem` (24px) | Nav padding, form field gaps. |
| `--space-lg` | `2.5rem` (40px) | Between components within a section. |
| `--space-xl` | `4rem` (64px) | Between major content blocks. |
| `--space-2xl` | `6rem` (96px) | Between page sections (desktop). |
| `--space-3xl` | `8rem` (128px) | Hero top padding, major section padding (desktop). |

### Section Padding
- Each full-width section: `8rem` top and bottom padding on desktop, `4rem` on mobile.
- Content within sections: `3rem`–`4rem` gaps between major blocks.

### Dividers
- Hairline dividers: 1px solid `var(--rule)`. Used between sections where background color doesn't change.
- Never use thick borders or heavy lines anywhere.

---

## 5. Global Components

### 5a. Navigation Bar

**Behavior:** Fixed to top of viewport. Translucent background with backdrop blur on scroll.

**Structure:**
```
[Catherine McMillan]                    [About]  [Work With Me]  [Writing]  [Events]  [Get in Touch]
     ↑ serif, link to home                  ↑ uppercase sans-serif links              ↑ accent button
```

**Specs:**
- Height: approximately 72px (1.5rem padding top/bottom + content).
- Background: `rgba(250, 247, 242, 0.85)` with `backdrop-filter: blur(20px)`.
- Bottom border: 1px solid `var(--rule)`.
- Left: "Catherine McMillan" — Cormorant Garamond, 1.25rem, weight 500, links to home.
- Right: nav links in DM Sans, 0.825rem, uppercase, `--text-secondary`. Gap: 2.5rem between links.
- Far right: "Get in Touch" — DM Sans, 0.8rem, uppercase, `--accent` color, 1px accent border, 2px border-radius. On hover: fills with `--accent`, text becomes `--bg`.
- Nav link hover: color shifts to `--text-primary`, 1px underline in `--accent` animates from left to right (width: 0 → 100%).

**Mobile (≤768px):**
- Left: "Catherine McMillan" (same style, slightly smaller).
- Right: hamburger icon (three thin lines, `--text-primary`).
- Hamburger opens a full-screen overlay: background `--bg`, nav links centered vertically, Cormorant Garamond at 2rem, stacked. "Get in Touch" at bottom as a full-width button.
- Close icon: simple × in top right.

### 5b. Footer

**Background:** `var(--bg-warm)`
**Padding:** `4rem 3rem`

**Structure:**
```
[Catherine McMillan]                    [About]  [Work With Me]  [Writing]  [Events]

[© 2026 Catherine McMillan]             [LinkedIn]  [Substack]  [Email]
```

**Top row:** Name (serif, same as nav) on left, page links on right (same style as nav links but `--text-tertiary`).
**Divider:** 1px `var(--rule)`, with 2rem top/bottom margin.
**Bottom row:** Copyright in `--text-tertiary` on left, social links on right (text links, not icons, in `--text-tertiary`, hover → `--accent`).

### 5c. CTA Button Styles

**Primary CTA (accent button):**
- Background: `var(--accent)`, text: `var(--bg)`.
- Padding: 0.85rem 2rem.
- Border-radius: 2px.
- Font: DM Sans, 0.8rem, weight 500, uppercase, letter-spacing 0.06em.
- Hover: background darkens to `var(--accent-hover)`.
- Used sparingly — maximum 1 per major section.

**Secondary CTA (text + arrow):**
- No background, no border.
- Font: DM Sans, 0.825rem, weight 500, uppercase, letter-spacing 0.06em, `var(--accent)`.
- Followed by a → arrow character with 0.5rem gap.
- Hover: color shifts to `--accent-hover`, arrow translates 4px right.
- Used for "Learn more", "Read more", "View all" style links.

**Tertiary CTA (outlined button):**
- Background: transparent, 1px border in `var(--accent)`, text: `var(--accent)`.
- Same padding/font as primary.
- Hover: fills with `--accent`, text becomes `--bg`.
- Used in nav "Get in Touch" and form submit.

---

## 6. Page 1: Home

The homepage is the first impression. It should immediately communicate: this person is world-class, approachable, and operating at a high level.

### Section 6a: Hero

**Layout:** Two-column grid. Left column: text. Right column: photo. 50/50 split with 6rem gap.
**Padding:** Top: 8rem (accounts for fixed nav). Bottom: 4rem. Min-height: 100vh (hero fills the viewport).
**Alignment:** Vertically centered within the viewport.

**Left column content (top to bottom):**
1. **Eyebrow:** "Founding Director of Operations, The AI Collective" — DM Sans, 0.75rem, weight 500, uppercase, letter-spacing 0.15em, `--accent`.
2. **Name:** "Catherine McMillan" — Cormorant Garamond, `clamp(3rem, 5.5vw, 5rem)`, weight 300, `--espresso`.
3. **Positioning line:** *[PLACEHOLDER — direction is "making AI legible/accessible to the world" — exact copy TBD. Italic serif, 1-2 lines max.]*  — Cormorant Garamond, `clamp(1.15rem, 1.8vw, 1.4rem)`, weight 300 italic, `--text-secondary`. Max-width: 460px.
4. **CTA:** "Work with me →" — secondary CTA style (text + arrow, accent color).

**Right column:**
- Professional headshot photo.
- Aspect ratio: 3:4 (portrait).
- Border-radius: 2px (barely rounded, not a harsh rectangle).
- Photo should feel editorial — not a corporate headshot box. Consider letting it extend slightly beyond the grid or applying a subtle warm overlay.
- On the photo, apply a very subtle grain texture overlay (SVG noise filter at ~3% opacity) to give it a printed/editorial feel.

**Animation on load:**
- Eyebrow: fades up (translateY 20px → 0, opacity 0 → 1) over 0.8s, delay 0.2s.
- Name: same animation, delay 0.4s.
- Positioning line: same, delay 0.6s.
- CTA: same, delay 0.8s.
- Photo: simple fade in (opacity 0 → 1) over 1s, delay 0.5s.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration).

**Mobile (≤768px):**
- Stack to single column: photo on top (aspect ratio shifts to 4:5 or square, full-width), text below.
- Reduce top padding to 6rem.
- Min-height: auto (not forced full viewport on mobile).

### Section 6b: Pathways

**Purpose:** Quickly orient visitors to the three main things they can do. Three equal cards, side by side.

**Section label:** "How I Can Help" — section label style, positioned above the grid with 3.5rem bottom margin.

**Layout:** Three-column grid, no gaps between columns. Cards separated by vertical 1px `var(--rule)` dividers.

**Each card contains (top to bottom):**
1. **Number:** "01" / "02" / "03" — Cormorant Garamond, 0.85rem, weight 400, `--text-tertiary`.
2. **Title:** Card title in Cormorant Garamond, 1.75rem, weight 400, `--espresso`.
3. **Description:** 1-2 sentences in DM Sans, 0.9rem, `--text-secondary`.
4. **Arrow link:** Secondary CTA style.

**Card content:**

| # | Title | Description | Link |
|---|---|---|---|
| 01 | Strategic Advisory | For early-stage founders building in and around AI. Long-term, equity-based partnerships focused on growth, community, and go-to-market. | Work With Me page (advisory section) |
| 02 | Consulting | For professionals navigating career transitions, building public presence, or developing strategic clarity. Paid engagements. | Work With Me page (consulting section) |
| 03 | Events & Speaking | Find me at AI community events, roundtables, and dinners across 100+ cities worldwide. | Events page |

**Card hover:** Title color transitions to `--accent`. Arrow gap increases from 0.5rem to 0.85rem.

**Card padding:** 2.5rem vertical, 2.5rem between dividers. First card has no left padding, last card has no right padding.

**Mobile (≤768px):** Stack vertically. Remove vertical dividers. Add horizontal 1px dividers between cards instead. Full-width cards with 2rem vertical padding each.

### Section 6c: Trust Bar

**Purpose:** Subtle credibility signals. Not boastful — understated.

**Layout:** Single centered row of text items separated by small dots (3px circles, `--text-tertiary` at 40% opacity).

**Items (in order):**
- Fulbright Scholar
- BCG BrightHouse
- Booz Allen Hamilton
- 150K+ Community Members
- 100+ Cities Worldwide

**Style:** DM Sans, 0.75rem, weight 400, uppercase, letter-spacing 0.1em, `--text-tertiary`. Items wrap on smaller screens.

**Padding:** 4rem top, 6rem bottom. Separated from Pathways by a hairline divider.

### Section 6d: About Preview

**Purpose:** Give a taste of Catherine's story to pull visitors into the full About page.

**Background:** `var(--bg-warm)` — creates a visual break from the sections above.

**Layout:** Two-column grid. Left: candid photo. Right: text. Gap: 6rem.

**Left column:**
- Candid or lifestyle photo of Catherine (speaking, at an event, or editorial portrait).
- Aspect ratio: 4:5.
- Same subtle grain overlay as hero photo.

**Right column (top to bottom):**
1. **Section label:** "About" — section label style.
2. **Heading:** "From Fulbright scholar to building one of the world's largest AI communities." — Cormorant Garamond, section heading size, weight 300, `--espresso`.
3. **Body text:** 2-3 sentences summarizing Catherine's journey. DM Sans, body text style, `--text-secondary`. Max-width: 520px.
4. **Link:** "Read my story →" — secondary CTA, links to About page.

**Mobile (≤768px):** Stack to single column. Photo on top (full-width, 3:4 aspect), text below.

### Section 6e: Writing Preview (Optional)

**Purpose:** Surface 2-3 latest written pieces to establish intellectual credibility.

**Background:** `var(--bg)` (returns to primary background).

**Layout:**
- Header row: "Selected Writing" label on left, "View all →" secondary CTA on right.
- Below: 2-3 writing entries in a minimal list format.

**Each entry:**
- **Date:** DM Sans, metadata style, `--text-tertiary`. (e.g., "February 2026")
- **Title:** Cormorant Garamond, 1.35rem, weight 400, `--espresso`. Links to Substack post.
- **Description:** DM Sans, 0.9rem, `--text-secondary`. One line.
- Entries separated by 1px `var(--rule)` dividers.
- Hover: title color → `--accent`.

**Mobile:** Same layout, just full-width. Entries stack naturally.

### Section 6f: Closing CTA

**Purpose:** Final nudge to take action before the footer.

**Layout:** Centered text block, generous padding (6rem top/bottom).

**Content:**
- **Heading:** "Let's work together." — Cormorant Garamond, ~2rem, weight 300, `--espresso`.
- **Subtext:** "Whether you're building a startup or navigating your next chapter, I'd love to hear what you're working on." — DM Sans, 0.95rem, `--text-secondary`. Max-width: 480px, centered.
- **Button:** "Start a conversation" — primary CTA button (accent background, white text). Links to Work With Me page.

---

## 7. Page 2: About

### Section 7a: Page Header

**Layout:** Full-width section with generous padding (8rem top to clear nav, 4rem bottom).

**Content:**
- **Section label:** "About" — label style.
- **Page title:** "The short version: I build communities that make sense of AI and advise the startups shaping it." — Cormorant Garamond, section heading size, weight 300, `--espresso`. Max-width: 800px.

### Section 7b: Photo + Story

**Layout:** Asymmetric two-column. Left: large editorial photo (55% width). Right: prose (45% width). Gap: 5rem.

**Photo:**
- A strong, warm, editorial portrait.
- Aspect ratio: flexible (3:4 or 2:3). Should feel generous — this is the visual anchor of the page.
- Subtle grain overlay.

**Prose (right column):**
- Written in first person, editorial tone. NOT a resume. Flowing paragraphs that tell the story of:
  - Who she is and what drives her
  - The journey: Duke history major → BCG strategist → Fulbright scholar in South Korea → startup world → building The AI Collective
  - What she believes about AI, community, and access
  - Why she does advisory and consulting work
- Typography: DM Sans, 0.95rem, `--text-primary` (slightly stronger than secondary for readability in long-form). Max-width: 520px.
- Paragraphs separated by 1rem.
- Occasional pull quote in Cormorant Garamond italic to break up the text.

### Section 7c: Milestones (Optional)

**Purpose:** A sparse, elegant visual treatment of key career moments. NOT a timeline — more like selected markers.

**Layout:** Horizontal or vertical sequence of 4-6 milestones.

**Each milestone:**
- **Year:** Cormorant Garamond, 1.25rem, weight 400, `--accent`.
- **Title:** DM Sans, 0.85rem, weight 500, uppercase, `--text-primary`.
- **Detail:** DM Sans, 0.85rem, weight 400, `--text-secondary`. One line.

**Example milestones:**
- 2022 — BCG BrightHouse — Strategist & thought leadership
- 2023 — Fulbright Scholar — South Korea
- 2023 — DayTrip — Creator partnerships, Seoul
- 2024 — Booz Allen Hamilton — National Cyber Platform
- 2024 — The AI Collective — Founding Director of Operations
- 2025 — DCTAV — Venture Fellow

**Treatment:** Spaced along a thin horizontal line (1px `--rule`), or vertically with generous spacing. Keep it minimal — this is supporting evidence, not the main story.

### Section 7d: Philosophy / Vision Statement

**Background:** `var(--bg-warm)`.
**Layout:** Centered text, generous padding (6rem top/bottom).

**Content:** A 2-4 sentence personal philosophy or vision statement.
- Typography: Cormorant Garamond, ~1.5rem, weight 300, italic, `--espresso`. Max-width: 700px, centered.
- This is the emotional anchor of the page. It should feel like a credo.

*[PLACEHOLDER — exact copy TBD. Direction: something about ensuring AI is built inclusively, the importance of community as infrastructure, bridging understanding.]*

### Section 7e: External Links

**Layout:** Simple centered row of text links.
**Links:** The AI Collective · Substack · LinkedIn
**Style:** DM Sans, 0.8rem, uppercase, letter-spacing 0.06em, `--text-secondary`. Hover → `--accent`.
**Padding:** 3rem bottom before footer.

---

## 8. Page 3: Work With Me

This is the conversion page. Every design decision should reduce friction for qualified leads and gently filter out unqualified ones.

### Section 8a: Page Header

**Padding:** 8rem top, 4rem bottom.

**Content:**
- **Section label:** "Work With Me" — label style.
- **Page title:** "I partner with founders building in AI and professionals navigating what's next." — Cormorant Garamond, section heading size, weight 300, `--espresso`. Max-width: 750px.
- **Subtext:** "I keep a few hours each week for introductory conversations. If there's a fit, I'll send over a time to connect." — DM Sans, body text, `--text-secondary`. Max-width: 550px.

### Section 8b: Advisory (For Startups)

**Background:** `var(--bg)`.
**Layout:** Two-column. Left: descriptive text (60% width). Right: small photo or abstract visual (40% width). Gap: 5rem.

**Left column:**
1. **Label:** "For Startups" — DM Sans, label style, `--accent`.
2. **Title:** "Strategic Advisory" — Cormorant Garamond, H3 size (1.75rem), weight 400, `--espresso`.
3. **Description (2-3 paragraphs):**
   - What she brings: strategic advisory on growth, community building, partnerships, go-to-market for AI startups.
   - How it works: long-term, equity-based partnerships. Not one-off calls. She becomes a committed partner in the company's trajectory.
   - Who this is for: early-stage founders building products, platforms, or communities in and around AI.
   - Typography: DM Sans, 0.95rem, `--text-secondary`.
4. **CTA:** "Start a conversation →" — secondary CTA, scrolls down to intake form.

**Right column:**
- Option A: an editorial photo (Catherine at a startup event, in a meeting, etc.).
- Option B: an abstract visual element — a subtle warm gradient shape, or a clean geometric illustration. Not clip art. Think: a single elegant form that echoes the warm palette.

### Section 8c: Consulting (For Individuals)

**Background:** `var(--bg-warm)` — visual separation from advisory section.
**Layout:** Mirror of advisory section. Left: photo/visual. Right: text. (Alternating layout creates visual rhythm.)

**Right column:**
1. **Label:** "For Individuals" — DM Sans, label style, `--accent`.
2. **Title:** "Consulting" — Cormorant Garamond, H3 size, weight 400, `--espresso`.
3. **Description (2-3 paragraphs):**
   - What she offers: consulting for professionals navigating career transitions into AI, building their public presence, developing strategic clarity, or thinking through written work.
   - How it works: paid engagements. Structured conversations and follow-up.
   - Who this is for: professionals at an inflection point who want an experienced thought partner.
   - Typography: DM Sans, 0.95rem, `--text-secondary`.
4. **CTA:** "Start a conversation →" — secondary CTA, scrolls down to intake form.

### Section 8d: Intake Form

**Background:** `var(--bg)`.
**Layout:** Centered, narrow column. Max-width: 600px. Generous padding: 6rem top/bottom.

**Framing text above form:**
- **Heading:** "Tell me about what you're working on." — Cormorant Garamond, 1.5rem, weight 400, `--espresso`.
- **Subtext:** "I'll review your note and follow up within a few days if there's a good fit." — DM Sans, 0.9rem, `--text-secondary`.

**Form fields (in order):**

| Field | Type | Label | Placeholder | Required |
|---|---|---|---|---|
| Name | text input | "Your name" | "First and last name" | Yes |
| Type | radio or select | "What best describes you?" | Options: "Startup founder" / "Individual professional" / "Other" | Yes |
| Working on | textarea | "What are you working on or thinking about?" | "A few sentences is great." | Yes |
| Outcome | textarea | "What would a great outcome look like for you?" | "What are you hoping to get out of working together?" | No |
| Email | email input | "Email" | "your@email.com" | Yes |

**Form styling:**
- Labels: DM Sans, 0.8rem, weight 500, uppercase, `--text-primary`, letter-spacing 0.04em. Positioned above each field with 0.5rem gap.
- Inputs: full-width, 1px border `var(--rule)`, border-radius 2px, padding 0.85rem 1rem. Background: transparent (shows `--bg` through). Focus state: border transitions to `--accent`.
- Textareas: same styling, minimum height 120px. Resize: vertical only.
- Placeholder text: DM Sans, 0.95rem, `--text-tertiary`.
- Field spacing: 1.5rem between fields.
- Submit button: primary CTA style. Text: "Send". Full-width on mobile, auto-width (min 200px) on desktop, right-aligned.

**Form tool:** TBD — either native Astro form with a serverless function (e.g., Resend for email delivery), or embedded Tally/Typeform styled to match the site. If embedded, all default styling must be overridden to match the site's typography and colors exactly.

**Success state:** Form fields fade out, replaced by: "Thank you. I'll be in touch soon." — Cormorant Garamond, 1.25rem, italic, `--espresso`. Centered.

### Section 8e: Closing Note

**Below form, centered, small text:**
"Not sure if this is the right fit? That's okay — reach out anyway. The worst I can say is not right now."
— DM Sans, 0.85rem, italic, `--text-secondary`.

This softens the intake process and reinforces approachability.

---

## 9. Page 4: Writing

### Section 9a: Page Header

**Padding:** 8rem top, 4rem bottom.

**Content:**
- **Section label:** "Writing" — label style.
- **Page title:** "Selected essays, analysis, and things I'm thinking about." — Cormorant Garamond, section heading size, weight 300, `--espresso`. Max-width: 700px.
- **Subtext (optional):** "I write regularly on Substack about AI, community, and the future of work." — DM Sans, body text, `--text-secondary`. With a text link to Substack profile.

### Section 9b: Featured Piece (Optional)

**Purpose:** Highlight one essay that best represents Catherine's thinking.

**Layout:** Full-width card with `--bg-warm` background, generous padding (3rem). Contains:
- **Label:** "Featured" — DM Sans, label style, `--accent`.
- **Title:** Cormorant Garamond, 1.5rem, weight 400, `--espresso`.
- **Excerpt:** DM Sans, 0.95rem, `--text-secondary`. 2-3 lines max.
- **Date + read link:** Date on left in metadata style, "Read on Substack →" secondary CTA on right.

### Section 9c: Writing List

**Layout:** Vertical list, full-width within content container (max 900px, centered).

**Each entry:**
```
─────────────────────────────────────────────────
February 2026
Title of the Essay or Article
A one-line description or first sentence of the piece.                Read →
─────────────────────────────────────────────────
```

- Top border: 1px `var(--rule)`.
- **Date:** DM Sans, metadata style, `--text-tertiary`.
- **Title:** Cormorant Garamond, 1.35rem, weight 400, `--espresso`. Clickable (entire row is a link).
- **Description:** DM Sans, 0.9rem, `--text-secondary`. One line, truncated with ellipsis if needed.
- **Read link:** Secondary CTA, right-aligned on same row as description (or below on mobile).
- Row padding: 1.5rem top/bottom.
- Hover state: title color → `--accent`, entire row gets a very subtle background shift to `--accent-light`.

**Pagination or "Load More":**
- If more than 8-10 entries, show a "Load more" tertiary CTA button centered below the list.
- Or: link to Substack for the full archive.

**Content source:** Manually curated list, or pulled via Substack RSS feed and rendered at build time in Astro.

---

## 10. Page 5: Events

### Section 10a: Page Header

**Padding:** 8rem top, 4rem bottom.

**Content:**
- **Section label:** "Events" — label style.
- **Page title:** "Where to find me." — Cormorant Garamond, section heading size, weight 300, `--espresso`.
- **Subtext:** "I host and speak at AI community events, roundtables, and intimate dinners across 100+ cities. Here's what's coming up." — DM Sans, body text, `--text-secondary`. Max-width: 600px.

### Section 10b: Upcoming Events

**Layout:** Card-based list, max-width 900px centered.

**Each event card:**
```
┌─────────────────────────────────────────────────────┐
│  FEB 26                                              │
│  Physical AI Forecasting Event                       │
│  Washington, DC                                      │
│  A deep-dive into the future of embodied AI...       │
│                                        RSVP →        │
└─────────────────────────────────────────────────────┘
```

- Card background: `var(--bg-warm)` or transparent with bottom border.
- **Date:** DM Sans, 0.75rem, weight 500, uppercase, letter-spacing 0.1em, `--accent`. The date should feel like a magazine dateline.
- **Event name:** Cormorant Garamond, 1.35rem, weight 400, `--espresso`.
- **Location:** DM Sans, 0.85rem, `--text-secondary`.
- **Description:** DM Sans, 0.9rem, `--text-secondary`. 1-2 lines max.
- **RSVP link:** Secondary CTA, right-aligned or below description. Links to Luma event page (opens in new tab).
- Card padding: 2rem. Margin between cards: 1rem.
- Hover: subtle background shift, event name → `--accent`.

**Empty state:** If no upcoming events: "No upcoming events right now. Check back soon, or follow me on [Luma / LinkedIn] to stay in the loop." — italic, `--text-secondary`.

### Section 10c: Past Events (Collapsed)

**Purpose:** Show track record without cluttering the page.

**Layout:** Below upcoming events, separated by 4rem.

**Header:** "Past Events" — section label style. Next to it: a toggle/expand link "View archive →".

**Default state:** Collapsed. Only the header is visible.

**Expanded state:** Same card layout as upcoming events but simplified:
- Date, event name, location only. No description, no RSVP link.
- `--text-tertiary` for all text (dimmer than upcoming events).
- Show last 10-15 events max, or a "View all on Luma →" link.

### Section 10d: Speaking / Collaboration Note

**Below events, centered:**
"Interested in having me speak, host, or collaborate on an event? [Get in touch →]"
— DM Sans, 0.9rem, `--text-secondary`. "Get in touch" links to Work With Me intake form.

**Source integration:** Events can be sourced from:
- **Option A (recommended for launch):** Manually curated in Astro content collections (Markdown/MDX files).
- **Option B (future):** Luma API integration. Luma provides a public API and embeddable widgets. Events can be fetched at build time (Astro SSG) or client-side.
- **Option C:** Luma embed widget, styled to match site as closely as possible (limited styling control).

---

## 11. Interactions & Motion

### Global Transitions
- All color transitions: `0.3s ease`.
- All transform transitions (arrow movements, etc.): `0.3s ease`.
- Page transitions (if using Astro View Transitions): crossfade, 0.3s duration.

### Page Load Animation (Home page only)
- Hero elements stagger in with fade-up animation (see Section 6a for details).
- Other pages: no load animation. Content is simply present.

### Scroll Behavior
- `scroll-behavior: smooth` on html element.
- No scroll-triggered animations. No intersection observer reveals. No parallax. Content is present when you scroll to it.
- Exception: if using Astro View Transitions, pages can crossfade on navigation.

### Hover States
- **Text links:** Color transition to `--accent` or `--text-primary` depending on context. Underline animates in (width 0 → 100%, from left).
- **Cards:** Title color transitions, arrow slides, optional very subtle background shift.
- **Buttons (primary CTA):** Background darkens.
- **Buttons (tertiary CTA):** Fills with accent color, text inverts.
- **Images:** No hover effect. Images are static.

### Focus States (Accessibility)
- All interactive elements must have a visible focus ring: 2px solid `--accent`, 2px offset.
- Focus ring should not appear on mouse click — only on keyboard navigation (use `:focus-visible`).

### Form Interactions
- Input focus: border transitions from `--rule` to `--accent`.
- Submit button: on submit, text changes to "Sending..." with a subtle opacity pulse, then transitions to success state.

---

## 12. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Desktop | ≥1200px | Full layout as specified. |
| Tablet | 768px–1199px | Two-column grids may shift to asymmetric (60/40) or stack. Reduce section padding to 5rem. |
| Mobile | ≤767px | Single column. Reduce section padding to 3rem. Hamburger nav. |

### Key Responsive Changes

**Navigation:**
- ≤768px: Collapse to hamburger menu. Full-screen overlay on open.

**Hero (Home):**
- ≤768px: Single column. Photo stacks above text. Photo becomes full-width with 4:5 or 1:1 aspect ratio. Name font size scales down via clamp.

**Pathways (Home):**
- ≤768px: Stack to single column. Vertical dividers become horizontal dividers.

**Trust Bar (Home):**
- ≤768px: Wraps naturally. Reduce gap. Consider 2 rows.

**Two-column sections (About preview, Work With Me, About page):**
- ≤768px: Stack to single column. Photo always on top, text below.

**Writing list:**
- ≤768px: Title and description stack. Read link moves below description.

**Event cards:**
- ≤768px: Full-width. RSVP link below description.

**Intake form:**
- ≤768px: Max-width becomes 100%. Submit button becomes full-width.

### Touch Targets
- All interactive elements must have a minimum touch target of 44x44px on mobile.
- Increase padding on nav links and CTA buttons for mobile.

---

## 13. SEO & Metadata

### Global `<head>` Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Catherine McMillan — Founding Director of Operations at The AI Collective. Strategic advisor for AI startups and consultant for professionals navigating what's next.">
<meta name="author" content="Catherine McMillan">
<link rel="canonical" href="https://catherine-mcmillan.com/">
```

### Open Graph (per page)
```html
<meta property="og:title" content="Catherine McMillan">
<meta property="og:description" content="Strategic advisor, consultant, and community builder at the intersection of AI and people.">
<meta property="og:image" content="[URL to a high-quality OG image — 1200x630px, warm brand colors with name]">
<meta property="og:url" content="https://catherine-mcmillan.com/">
<meta property="og:type" content="website">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Catherine McMillan">
<meta name="twitter:description" content="Strategic advisor, consultant, and community builder at the intersection of AI and people.">
<meta name="twitter:image" content="[same OG image]">
```

### Per-Page Titles
- Home: "Catherine McMillan — Advisor, Consultant, Community Builder"
- About: "About — Catherine McMillan"
- Work With Me: "Work With Me — Catherine McMillan"
- Writing: "Writing — Catherine McMillan"
- Events: "Events — Catherine McMillan"

### Sitemap
- Generate via Astro's built-in sitemap integration (`@astrojs/sitemap`).

### Robots
- Allow all crawling. No pages need to be blocked.

### Favicon
- Simple, clean favicon. Options: initials "CM" in serif font on warm background, or a minimal abstract mark. 32x32, 16x16, plus apple-touch-icon at 180x180.

---

## 14. Integrations

### 14a. Fonts
- **Google Fonts:** Cormorant Garamond + DM Sans. Load via `<link>` with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`. Load only the weights specified in the typography system (don't load all weights).
- **Font display:** `display=swap` for fast initial render.

### 14b. Form Submission
**Option A (recommended): Native form + serverless function.**
- Build the form in HTML/Astro.
- On submit, POST to a serverless endpoint (Astro API route, Netlify function, or Vercel serverless function).
- The endpoint sends Catherine an email with the form data using a service like Resend, SendGrid, or Postmark.
- Advantage: full design control, no third-party branding, fast.

**Option B: Tally or Typeform embed.**
- Embed a Tally or Typeform form within the page.
- Override all default styling with custom CSS to match the site.
- Advantage: built-in response management, no backend needed.
- Disadvantage: styling limitations, possible branding, slower load.

### 14c. Substack / Writing Content
**Option A (recommended for launch): Manual curation.**
- Create an Astro content collection (`src/content/writing/`) with Markdown files for each piece.
- Each file: title, date, description, external URL (to Substack).
- Renders the writing list at build time.

**Option B (future): RSS feed integration.**
- Fetch Substack RSS feed at build time in Astro.
- Parse and render the latest posts automatically.
- Rebuilds on a schedule (e.g., daily via cron-triggered redeploy on Netlify/Vercel).

### 14d. Events / Luma
**Option A (recommended for launch): Manual curation.**
- Same pattern as writing. Astro content collection (`src/content/events/`).
- Each file: event name, date, location, description, RSVP URL, status (upcoming/past).

**Option B (future): Luma API.**
- Luma provides an API for fetching events by organizer.
- Fetch at build time and render.
- Requires API key and periodic rebuilds.

**Option C: Luma embed widget.**
- Luma offers an embeddable calendar widget.
- Quick but limited styling control. Use only as a fallback.

### 14e. Analytics
- **Recommended:** Plausible Analytics or Fathom (privacy-friendly, lightweight, no cookie banner needed).
- **Alternative:** Vercel Analytics if hosting on Vercel.
- No Google Analytics (too heavy, requires cookie consent, misaligned with the site's clean ethos).

### 14f. Hosting / Deployment
- **Recommended:** Vercel or Netlify. Both have excellent Astro support.
- **Domain:** catherine-mcmillan.com, configured via DNS to the hosting provider.
- **SSL:** Automatic via hosting provider.

---

## 15. Open Items

These items need to be resolved before or during development:

| # | Item | Status | Notes |
|---|---|---|---|
| 1 | **Positioning line (hero)** | Direction confirmed, exact copy TBD | Direction: "making AI legible/accessible to the world." Will iterate on wording. Placeholder in hero for now. |
| 2 | **About page prose** | Not written | Catherine to provide or co-write. Should be editorial, first-person, ~300-400 words. |
| 3 | **Philosophy/vision statement** | Not written | 2-4 sentences for the About page. |
| 4 | **Photos** | Available, not yet provided | Need: 1 hero headshot (3:4), 1 candid/event photo (4:5), optional additional photos for Work With Me page. Provide as high-res JPG/PNG, minimum 1600px wide. |
| 5 | **Form submission backend** | TBD | Decide between native serverless function vs. Tally/Typeform. |
| 6 | **Writing content** | Not yet curated | Catherine to select 5-10 pieces for launch, with titles, dates, descriptions, and Substack URLs. |
| 7 | **Events content** | Not yet curated | Catherine to provide 3-5 upcoming events for launch. |
| 8 | **Favicon / OG image** | Not designed | Design during build. Simple, clean, brand-aligned. |
| 9 | **Luma API exploration** | Future | Explore Luma API for automated event syncing post-launch. |
| 10 | **Substack RSS integration** | Future | Explore RSS feed integration post-launch. |
| 11 | **Scheduling tool** | Not needed for launch | Intake form replaces public booking link. Catherine sends booking link manually to qualified leads. |
| 12 | **Work With Me page copy** | Not written | Detailed descriptions for Advisory and Consulting sections. Catherine to draft or co-write. |

---

## File Structure (Recommended Astro Project)

```
catherine-mcmillan.com/
├── public/
│   ├── fonts/          (if self-hosting fonts instead of Google Fonts)
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── about-candid.jpg
│   │   ├── og-image.jpg
│   │   └── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── PathwayCard.astro
│   │   ├── TrustBar.astro
│   │   ├── AboutPreview.astro
│   │   ├── WritingPreview.astro
│   │   ├── WritingEntry.astro
│   │   ├── EventCard.astro
│   │   ├── IntakeForm.astro
│   │   ├── ClosingCTA.astro
│   │   └── SectionLabel.astro
│   ├── content/
│   │   ├── writing/
│   │   │   ├── essay-one.md
│   │   │   ├── essay-two.md
│   │   │   └── ...
│   │   └── events/
│   │       ├── physical-ai-feb-2026.md
│   │       ├── toronto-hackathon.md
│   │       └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro   (contains <head>, nav, footer, global styles)
│   ├── pages/
│   │   ├── index.astro        (Home)
│   │   ├── about.astro
│   │   ├── work-with-me.astro
│   │   ├── writing.astro
│   │   └── events.astro
│   └── styles/
│       └── global.css         (CSS variables, resets, typography, base styles)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

*End of specification. This document is the single source of truth for the design and build of catherine-mcmillan.com.*
