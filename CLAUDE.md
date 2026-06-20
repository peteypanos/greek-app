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

## Deployment

- **Production:** https://greek-app-chi.vercel.app
- **GitHub:** https://github.com/peteypanos/greek-app
- Deploy via `vercel --prod --yes` or push to `master` (GitHub connected)
