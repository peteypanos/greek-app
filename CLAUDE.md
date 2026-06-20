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

**Lesson navigation:** single `<select>` dropdown for all screen sizes (no pill buttons). "Surprise me" is the first option.

**Exercises layout:**
- Text input on its own full-width row
- Check + Show Answer buttons on a row below
- Questions with an English translation in parentheses (e.g. `Πώς είσαι; (How are you?)`) have the parenthetical split onto a second line in muted color

## Deployment

- **Production:** https://greek-app-chi.vercel.app
- **GitHub:** https://github.com/peteypanos/greek-app
- Deploy via `vercel --prod --yes` or push to `master` (GitHub connected)
