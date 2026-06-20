import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  const [lessons, setLessons] = useState([])
  const [selected, setSelected] = useState(null)
  const [grammar, setGrammar] = useState([])
  const [vocabulary, setVocabulary] = useState([])
  const [passages, setPassages] = useState([])
  const [exercises, setExercises] = useState([])
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState({})
  const [loading, setLoading] = useState(false)
  const [showTranslation, setShowTranslation] = useState({})
  const [shownAnswers, setShownAnswers] = useState({})

  useEffect(() => {
    supabase
      .from('lessons')
      .select('id, title, greek_title, level')
      .order('created_at')
      .then(({ data }) => setLessons(data ?? []))
  }, [])

  async function selectLesson(lesson) {
    setSelected(lesson)
    setLoading(true)
    setAnswers({})
    setResults({})
    setShowTranslation({})
    setShownAnswers({})
    const [g, v, p, e] = await Promise.all([
      supabase.from('grammar_points').select('*').eq('lesson_id', lesson.id).order('display_order'),
      supabase.from('vocabulary').select('*').eq('lesson_id', lesson.id),
      supabase.from('passages').select('*').eq('lesson_id', lesson.id),
      supabase.from('exercises').select('*').eq('lesson_id', lesson.id).order('display_order'),
    ])
    setGrammar(g.data ?? [])
    setVocabulary(v.data ?? [])
    setPassages(p.data ?? [])
    setExercises(e.data ?? [])
    setLoading(false)
  }

  function surpriseMe() {
    if (!lessons.length) return
    const pick = lessons[Math.floor(Math.random() * lessons.length)]
    selectLesson(pick)
  }

  function checkAnswer(ex) {
    const correct =
      (answers[ex.id] ?? '').trim().toLowerCase() ===
      ex.correct_answer.trim().toLowerCase()
    setResults(r => ({ ...r, [ex.id]: correct }))
  }

  function toggleTranslation(id) {
    setShowTranslation(t => ({ ...t, [id]: !t[id] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topic bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center">
          {lessons.map(l => (
            <button
              key={l.id}
              onClick={() => selectLesson(l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selected?.id === l.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {l.title}
            </button>
          ))}
          <button
            onClick={surpriseMe}
            className="ml-auto px-3 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
          >
            ✦ Surprise me
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {!selected && (
          <p className="text-gray-400 text-center mt-24 text-lg">
            Pick a lesson above or hit <span className="text-amber-700 font-medium">Surprise me</span>
          </p>
        )}

        {selected && loading && (
          <p className="text-gray-400 text-center mt-24">Loading…</p>
        )}

        {selected && !loading && (
          <div className="space-y-10">
            {/* Lesson header */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{selected.title}</h1>
                  {selected.greek_title && (
                    <p className="text-lg text-indigo-600 mt-0.5">{selected.greek_title}</p>
                  )}
                </div>
                {selected.level && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {selected.level}
                  </span>
                )}
              </div>
              {selected.focus && (
                <p className="mt-3 text-gray-600 text-sm">{selected.focus}</p>
              )}
              {selected.culture_note && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
                  <span className="font-semibold">Culture note: </span>{selected.culture_note}
                </div>
              )}
            </div>

            {/* Grammar */}
            {(selected.grammar_title || grammar.length > 0) && (
              <section>
                <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">
                  Grammar
                </h2>
                {selected.grammar_title && (
                  <p className="font-medium text-gray-800 mb-1">{selected.grammar_title}</p>
                )}
                {selected.grammar_rule_summary && (
                  <p className="text-gray-600 text-sm mb-4">{selected.grammar_rule_summary}</p>
                )}
                {grammar.length > 0 && (
                  <div className="space-y-3">
                    {grammar.map(gp => (
                      <div key={gp.id} className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                        <p className="text-indigo-700 font-semibold">{gp.greek_text}</p>
                        {gp.romanization && (
                          <p className="text-gray-500 text-sm italic">{gp.romanization}</p>
                        )}
                        {gp.note && (
                          <p className="text-gray-600 text-sm mt-1">{gp.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Vocabulary */}
            {vocabulary.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">
                  Vocabulary
                </h2>
                <div className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                  {vocabulary.map(v => (
                    <div key={v.id} className="bg-white px-4 py-3 grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-900">{v.word}</p>
                        {v.pronunciation && (
                          <p className="text-xs text-gray-400 italic">{v.pronunciation}</p>
                        )}
                        {v.part_of_speech && (
                          <p className="text-xs text-indigo-500 mt-0.5">{v.part_of_speech}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-gray-700">{v.translation}</p>
                        {v.example_sentence && (
                          <p className="text-xs text-gray-500 mt-1 italic">{v.example_sentence}</p>
                        )}
                        {v.example_translation && (
                          <p className="text-xs text-gray-400">{v.example_translation}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Passages */}
            {passages.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">
                  Passage
                </h2>
                <div className="space-y-4">
                  {passages.map(p => (
                    <div key={p.id} className="bg-white border border-gray-200 rounded-lg px-4 py-4">
                      {p.passage_title && (
                        <p className="font-medium text-gray-800 mb-2">{p.passage_title}</p>
                      )}
                      <p className="text-gray-900 leading-relaxed">{p.greek_text}</p>
                      {p.annotation_note && (
                        <p className="text-xs text-gray-400 mt-2 italic">{p.annotation_note}</p>
                      )}
                      {p.english_translation && (
                        <div className="mt-3">
                          <button
                            onClick={() => toggleTranslation(p.id)}
                            className="text-xs text-indigo-500 hover:text-indigo-700 underline underline-offset-2"
                          >
                            {showTranslation[p.id] ? 'Hide translation' : 'Show translation'}
                          </button>
                          {showTranslation[p.id] && (
                            <p className="mt-2 text-sm text-gray-600 italic">{p.english_translation}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Exercises */}
            {exercises.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">
                  Exercises
                </h2>
                <div className="space-y-4">
                  {exercises.map((ex, i) => {
                    const result = results[ex.id]
                    return (
                      <div key={ex.id} className="bg-white border border-gray-200 rounded-lg px-4 py-4">
                        <p className="text-gray-800 mb-3">
                          <span className="text-gray-400 text-sm mr-2">{i + 1}.</span>
                          {ex.question}
                        </p>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={answers[ex.id] ?? ''}
                            onChange={e =>
                              setAnswers(a => ({ ...a, [ex.id]: e.target.value }))
                            }
                            onKeyDown={e => e.key === 'Enter' && checkAnswer(ex)}
                            placeholder="Your answer…"
                            className={`flex-1 border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                              result === true
                                ? 'border-green-400 bg-green-50'
                                : result === false
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-300 focus:border-indigo-400'
                            }`}
                          />
                          <button
                            onClick={() => checkAnswer(ex)}
                            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            Check
                          </button>
                          <button
                            onClick={() => setShownAnswers(a => ({ ...a, [ex.id]: !a[ex.id] }))}
                            className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            {shownAnswers[ex.id] ? 'Hide' : 'Show Answer'}
                          </button>
                        </div>
                        {shownAnswers[ex.id] && (
                          <p className="mt-2 text-sm text-gray-500">
                            Answer: <span className="font-medium text-gray-700">{ex.correct_answer}</span>
                          </p>
                        )}
                        {result === true && (
                          <p className="mt-2 text-sm text-green-600 font-medium">Correct!</p>
                        )}
                        {result === false && (
                          <div className="mt-2">
                            <p className="text-sm text-red-500 font-medium">Try again</p>
                            {ex.hint_text && (
                              <p className="text-xs text-gray-500 mt-0.5">Hint: {ex.hint_text}</p>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
