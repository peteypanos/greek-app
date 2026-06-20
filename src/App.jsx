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
  const [activeLevel, setActiveLevel] = useState('All')

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

  const LEVELS = ['All', 'A1', 'A2', 'B2', 'C1']
  const filteredLessons = activeLevel === 'All'
    ? lessons
    : lessons.filter(l => l.level === activeLevel)

  function surpriseMe() {
    if (!filteredLessons.length) return
    const pick = filteredLessons[Math.floor(Math.random() * filteredLessons.length)]
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
    <div className="min-h-screen bg-[#FDFAF6]">
      {/* Header */}
      <div className="bg-[#FDFAF6] border-b border-[#E8DDD0]">
        <div className="max-w-3xl mx-auto px-4 pt-8 pb-6 text-center">
          <h1 className="text-3xl font-bold font-serif tracking-tight text-[#2C1810]">Ελληνικά Κάθε Μέρα</h1>
          <p className="mt-1 text-sm font-medium text-[#C4613A] uppercase tracking-widest">Daily Greek</p>
        </div>
      </div>

      {/* Topic bar */}
      <div className="sticky top-0 z-10 bg-[#FDFAF6] border-b border-[#E8DDD0] shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex gap-1.5 mb-2">
            {LEVELS.map(level => (
              <button
                key={level}
                onClick={() => { setActiveLevel(level); setSelected(null) }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  activeLevel === level
                    ? 'bg-[#C4613A] text-white'
                    : 'bg-[#F0EAE0] text-[#5C4A3A] hover:bg-[#E8DDD0]'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          <select
            className="w-full border border-[#D4C5B0] rounded-lg px-3 py-2 text-sm text-[#5C4A3A] bg-[#FFFCF8] outline-none focus:border-[#C4613A]"
            value={selected?.id ?? ''}
            onChange={e => {
              if (e.target.value === '__surprise__') { surpriseMe(); return }
              const lesson = lessons.find(l => String(l.id) === e.target.value)
              if (lesson) selectLesson(lesson)
            }}
          >
            <option value="" disabled>Pick a lesson…</option>
            <option value="__surprise__">✦ Surprise me</option>
            {filteredLessons.map(l => (
              <option key={l.id} value={l.id}>{l.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {!selected && (
          <p className="text-[#8B7355] text-center mt-24 text-lg">
            Pick a lesson above or hit <span className="text-[#C4613A] font-medium">Surprise me</span>
          </p>
        )}

        {selected && loading && (
          <p className="text-[#8B7355] text-center mt-24">Loading…</p>
        )}

        {selected && !loading && (
          <div className="space-y-10">
            {/* Lesson header */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#2C1810]">{selected.title}</h1>
                  {selected.greek_title && (
                    <p className="text-lg font-serif text-[#C4613A] mt-0.5">{selected.greek_title}</p>
                  )}
                </div>
                {selected.level && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F5EDE4] text-[#C4613A] border border-[#E8C9B0]">
                    {selected.level}
                  </span>
                )}
              </div>
              {selected.focus && (
                <p className="mt-3 text-[#5C4A3A] text-sm">{selected.focus}</p>
              )}
              {selected.culture_note && (
                <div className="mt-4 p-3 bg-[#F5F0E8] border border-[#D4C5A0] rounded-lg text-sm text-[#5C4A2A]">
                  <span className="font-semibold">Culture note: </span>{selected.culture_note}
                </div>
              )}
            </div>

            {/* Grammar */}
            {(selected.grammar_title || grammar.length > 0) && (
              <section>
                <h2 className="text-lg font-semibold text-[#5C4A3A] border-b border-[#E8DDD0] pb-1 mb-3">
                  Grammar
                </h2>
                {selected.grammar_title && (
                  <p className="font-medium text-[#2C1810] mb-1">{selected.grammar_title}</p>
                )}
                {selected.grammar_rule_summary && (
                  <p className="text-[#5C4A3A] text-sm mb-4">{selected.grammar_rule_summary}</p>
                )}
                {grammar.length > 0 && (
                  <div className="space-y-3">
                    {grammar.map(gp => (
                      <div key={gp.id} className="bg-[#FFFCF8] border border-[#E8DDD0] rounded-lg px-4 py-3 shadow-[0_1px_6px_rgba(139,99,60,0.10)]">
                        <p className="font-serif font-semibold text-[#C4613A]">{gp.greek_text}</p>
                        {gp.romanization && (
                          <p className="text-[#8B7355] text-sm italic">{gp.romanization}</p>
                        )}
                        {gp.note && (
                          <p className="text-[#5C4A3A] text-sm mt-1">{gp.note}</p>
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
                <h2 className="text-lg font-semibold text-[#5C4A3A] border-b border-[#E8DDD0] pb-1 mb-3">
                  Vocabulary
                </h2>
                <div className="divide-y divide-[#EDE5D8] border border-[#E8DDD0] rounded-lg overflow-hidden shadow-[0_1px_6px_rgba(139,99,60,0.10)]">
                  {vocabulary.map(v => (
                    <div key={v.id} className="bg-[#FFFCF8] px-4 py-3 grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-[#2C1810]">{v.word}</p>
                        {v.pronunciation && (
                          <p className="text-xs text-[#8B7355] italic">{v.pronunciation}</p>
                        )}
                        {v.part_of_speech && (
                          <p className="text-xs text-[#6B7C3A] mt-0.5">{v.part_of_speech}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-[#3D2E1E]">{v.translation}</p>
                        {v.example_sentence && (
                          <p className="text-xs text-[#8B7355] mt-1 italic">{v.example_sentence}</p>
                        )}
                        {v.example_translation && (
                          <p className="text-xs text-[#8B7355]">{v.example_translation}</p>
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
                <h2 className="text-lg font-semibold text-[#5C4A3A] border-b border-[#E8DDD0] pb-1 mb-3">
                  Passage
                </h2>
                <div className="space-y-4">
                  {passages.map(p => (
                    <div key={p.id} className="bg-[#FFFCF8] border border-[#E8DDD0] rounded-lg px-4 py-4 shadow-[0_1px_6px_rgba(139,99,60,0.10)]">
                      {p.passage_title && (
                        <p className="font-medium text-[#2C1810] mb-2">{p.passage_title}</p>
                      )}
                      <p className="font-serif text-[#2C1810] leading-relaxed">{p.greek_text}</p>
                      {p.annotation_note && (
                        <p className="text-xs text-[#8B7355] mt-2 italic">{p.annotation_note}</p>
                      )}
                      {p.english_translation && (
                        <div className="mt-3">
                          <button
                            onClick={() => toggleTranslation(p.id)}
                            className="text-xs text-[#6B7C3A] hover:text-[#4A5A28] underline underline-offset-2"
                          >
                            {showTranslation[p.id] ? 'Hide translation' : 'Show translation'}
                          </button>
                          {showTranslation[p.id] && (
                            <p className="mt-2 text-sm text-[#5C4A3A] italic">{p.english_translation}</p>
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
                <h2 className="text-lg font-semibold text-[#5C4A3A] border-b border-[#E8DDD0] pb-1 mb-3">
                  Exercises
                </h2>
                <div className="space-y-4">
                  {exercises.map((ex, i) => {
                    const result = results[ex.id]
                    return (
                      <div key={ex.id} className="bg-[#FFFCF8] border border-[#E8DDD0] rounded-lg px-4 py-4 shadow-[0_1px_6px_rgba(139,99,60,0.10)]">
                        <div className="mb-3">
                          {(() => {
                            const match = ex.question.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
                            return match ? (
                              <>
                                <p className="text-[#2C1810]">
                                  <span className="text-[#B8A898] text-sm mr-2">{i + 1}.</span>
                                  {match[1]}
                                </p>
                                <p className="text-[#8B7355] text-sm mt-0.5 ml-5">{match[2]}</p>
                              </>
                            ) : (
                              <p className="text-[#2C1810]">
                                <span className="text-[#B8A898] text-sm mr-2">{i + 1}.</span>
                                {ex.question}
                              </p>
                            )
                          })()}
                        </div>
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            value={answers[ex.id] ?? ''}
                            onChange={e =>
                              setAnswers(a => ({ ...a, [ex.id]: e.target.value }))
                            }
                            onKeyDown={e => e.key === 'Enter' && checkAnswer(ex)}
                            placeholder="Your answer…"
                            className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
                              result === true
                                ? 'border-green-400 bg-green-50'
                                : result === false
                                ? 'border-red-400 bg-red-50'
                                : 'border-[#D4C5B0] focus:border-[#C4613A]'
                            }`}
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => checkAnswer(ex)}
                              className="px-4 py-2 bg-[#C4613A] text-white text-sm font-medium rounded-lg hover:bg-[#A8522F] transition-colors"
                            >
                              Check
                            </button>
                            <button
                              onClick={() => setShownAnswers(a => ({ ...a, [ex.id]: !a[ex.id] }))}
                              className="px-4 py-2 bg-[#F0EAE0] text-[#5C4A3A] text-sm font-medium rounded-lg hover:bg-[#E8DDD0] transition-colors"
                            >
                              {shownAnswers[ex.id] ? 'Hide' : 'Show Answer'}
                            </button>
                          </div>
                        </div>
                        {shownAnswers[ex.id] && (
                          <p className="mt-2 text-sm text-[#8B7355]">
                            Answer: <span className="font-medium text-[#3D2E1E]">{ex.correct_answer}</span>
                          </p>
                        )}
                        {result === true && (
                          <p className="mt-2 text-sm text-green-600 font-medium">Correct!</p>
                        )}
                        {result === false && (
                          <div className="mt-2">
                            <p className="text-sm text-red-500 font-medium">Try again</p>
                            {ex.hint_text && (
                              <p className="text-xs text-[#8B7355] mt-0.5">Hint: {ex.hint_text}</p>
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
