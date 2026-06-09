# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repo contains two separate projects living side-by-side at the root:

| File/Asset | Project |
|---|---|
| `versevault_nextjs_starter.zip` | VerseVault – Next.js 15 Bible memorization app |
| `verse-vault-app.tsx` | Standalone copy of the VerseVault main component |
| `hooklab` | HookLab – single-file HTML content creator suite |

## VerseVault (Next.js App)

The production app lives inside `versevault_nextjs_starter.zip`. Unzip it first, then work inside that directory.

### Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint       # next lint (no separate eslint config – uses Next.js defaults)
```

No test runner is configured.

### Architecture

```
app/
  layout.tsx          # Root layout + metadata
  page.tsx            # Mounts <VerseVaultApp />
  globals.css         # Tailwind directives + base styles
components/
  verse-vault-app.tsx # All UI state and interaction lives here
lib/
  storage.ts          # LocalStorage read/write (key: "versevault-state")
  verse-provider.ts   # Fetches verse text from bible-api.com
data/
  topics.ts           # Static verse database: Record<topic, VerseRef[]>
```

**Data flow:** `data/topics.ts` is the static verse index. When a user selects a verse, `lib/verse-provider.ts` fetches live text from `bible-api.com` (with translation parameter). State (`memorizing[]`, `mastered[]`, `streak`, `lastPracticedOn`) is kept in React state and synced to localStorage via `lib/storage.ts`.

**`SavedState` type** (from `lib/storage.ts`):
```ts
{ memorizing: string[]; mastered: string[]; streak: number; lastPracticedOn: string | null }
```

### Styling

Tailwind with a custom dark-mode theme. Key tokens:

- `bg-hero-gradient` – three-layer radial/linear gradient background (`#07111f` → `#131a34`)
- `text-ink` – `#e7eefc` (primary text on dark)
- `text-mist` – `#9fb1d9` (secondary/subdued text)
- `.glass` utility – `rgba(255,255,255,0.08)` background for frosted cards
- `shadow-glow` – outer ring + deep drop shadow

Apply glassmorphism by combining the `glass` class with `rounded-3xl` and `backdrop-blur`.

### Verse Provider

`lib/verse-provider.ts` is intentionally thin and pluggable. The fallback message in the catch block is a design note to swap providers. When adding a new translation source, only this file needs changing.

---

## HookLab (Single-file HTML App)

`hooklab` is a standalone, dependency-free HTML file. Open it directly in a browser — no build step.

### Architecture

Everything is inlined: CSS (`<style>`), markup, and a single `<script>` block. The JS is organized into labeled sections with `// ── Section ──` banners.

**Tabs and their responsibilities:**

| Tab | Function | Key data |
|---|---|---|
| Generate | Calls Claude to produce hook titles + scripts | `savedHooks[]` |
| Trends | Calls Claude to surface niche trends | display only |
| Repurpose | Calls Claude to reformat a hook for all platforms | display only |
| Calendar | Calls Claude to generate a 4-week posting calendar | `calendarData` |
| Saved | Renders `savedHooks[]` from localStorage | `hl-saved` |

**Persistence:** Two localStorage keys — `hl-saved` (array of hook objects) and `hl-cal` (calendar array).

**Claude API call pattern** — all AI calls go through `callClaude(prompt, sys)`:

```js
async function callClaude(prompt, sys) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 4000, system: sys, messages: [{ role: 'user', content: prompt }] })
  });
  ...
}
```

> **Note:** The `x-api-key` header is not currently included in `callClaude`. Any working deployment must inject the Anthropic API key — either by adding it to the headers here or routing through a proxy.

**JSON parsing:** All Claude responses are parsed with `parseJSON(t)`, which tries three strategies: direct parse → strip markdown fences → regex-extract the first `[{...}]` block. Always return valid JSON from prompts targeting this function.

### Design System

- Fonts: `Barlow Condensed` (headings, buttons), `DM Sans` (body), `DM Mono` (script/code output)
- Brand colors: `#00B3E6` (generate/primary), `#FF6B35` (trends), `#0BB07B` (repurpose), `#E040A0` (calendar), `#F5A623` (saved)
- Background: `#F4F5F9`; Cards: `#fff` with `border: 1px solid #EBEBF0`
- Each tab has its own accent color stored in `TAB_COLORS`; the header icon gradient updates on tab switch
