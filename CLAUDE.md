# Greek App

Greek language learning app.

## Stack

- **Vite + React** (JSX, not TSX)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — no PostCSS, no `tailwind.config.js`
- **Supabase** JS client (`@supabase/supabase-js`) via `src/lib/supabase.js`

## Dev

```bash
npm run dev      # http://localhost:5173 (or next available port)
npm run build
```

## Environment variables

Stored in `.env` (gitignored). Required:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...   # server-side only — used by seed script, never exposed to the browser
```

On Vercel these are set via `vercel env add` and are scoped to Production and Development environments.

## Database (Supabase)

Five tables:

| Table | Key columns |
|-------|-------------|
| `lessons` | id, title, greek_title, tags, focus, grammar_title, grammar_rule_summary, culture_note, level, created_at |
| `grammar_points` | id, lesson_id, greek_text, romanization, note, display_order |
| `vocabulary` | id, lesson_id, word, pronunciation, part_of_speech, translation, example_sentence, example_translation |
| `exercises` | id, lesson_id, question, correct_answer, hint_text, display_order |
| `passages` | id, lesson_id, passage_title, greek_text, english_translation, annotation_note |

**Current lesson count: 37** across 5 levels:

| Level | Count | Notes |
|-------|-------|-------|
| A1 | 6 | Greetings, Numbers 1–20, Days & Months, Colors, Family, Basic Verbs |
| A2 | 6 | Food & Drink, Asking for Directions, Telling the Time, At the Café, My Home, Getting Around the City |
| B1 | 8 | Past Tense, Daily Routines, Shopping, Health, Travel, Work, Hobbies, Weather |
| B2 | 8 | Includes original advanced lessons + Aspect and Clitic Pronouns (reassigned from B2–C1) |
| C1 | 9 | Includes original advanced lessons + Diminutives and Conditionals (reassigned from B2–C1) |

Note: the original set had 4 lessons incorrectly tagged `B2–C1` — these have been reassigned to either B2 or C1.

**Seed scripts:**
- `node --env-file=.env supabase/seed.js` — A1/A2 beginner lessons (original 8)
- `node --env-file=.env supabase/seed-b1.js` — 8 B1 intermediate lessons
- `node --env-file=.env supabase/seed-a2.js` — 4 additional A2 lessons

All require `SUPABASE_SERVICE_ROLE_KEY` in `.env` (not the anon key). Do not re-run — inserts are not idempotent and will create duplicates.

## UI Design

**Mediterranean warmth aesthetic** — warm cream background, terracotta accents, olive green secondary.

| Role | Color |
|------|-------|
| Page/header background | `#FDFAF6` |
| Card background | `#FFFCF8` |
| Borders | `#E8DDD0` |
| Terracotta (primary accent) | `#C4613A` — buttons, highlights, Greek titles |
| Olive green (secondary) | `#6B7C3A` — part of speech, show-translation link |
| Dark text | `#2C1810` |
| Mid text | `#5C4A3A` |
| Muted text | `#8B7355` |
| Card shadow | `shadow-[0_1px_6px_rgba(139,99,60,0.10)]` |

**Typography:** `font-serif` (Georgia) on all Greek text fields (`greek_text`, `greek_title`, app title). UI elements stay sans-serif.

**Lesson navigation:** level filter buttons (All / A1 / A2 / B1 / B2 / C1) above a `<select>` dropdown. Filtering a level narrows the dropdown and clears the active lesson. "Surprise me" is the first dropdown option and respects the active filter.

**Exercises layout:**
- Text input on its own full-width row
- Check + Show Answer buttons on a row below
- Questions with an English translation in parentheses (e.g. `Πώς είσαι; (How are you?)`) have the parenthetical split onto a second line in muted color

## Deployment

- **Production:** https://greek-app-chi.vercel.app
- **GitHub:** https://github.com/peteypanos/greek-app
- Deploy via `vercel --prod --yes` or push to `master` (GitHub connected)
