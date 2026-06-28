import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

function parseCsv(text) {
  const lines = text.trim().split("\n");
  const cards = [];
  for (let i = 1; i < lines.length; i++) {
    const matches = lines[i].match(/("(?:[^"]|"")*"|[^,]+)(?:,|$)/g);
    if (!matches || matches.length < 2) continue;
    const clean = (s) => s.replace(/,$/, "").replace(/^"|"$/g, "").replace(/""/g, '"').trim();
    const filename = clean(matches[0]);
    const greek = clean(matches[1]);
    const english = matches[2] ? clean(matches[2]) : "";
    const level = matches[3] ? clean(matches[3]) : "";
    if (greek) cards.push({ filename, greek, english, level });
  }
  return cards;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardQuiz({ user }) {
  const [allCards, setAllCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [levelFilter, setLevelFilter] = useState("All");
  const [knownSet, setKnownSet] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [sessionStats, setSessionStats] = useState({ known: 0, learning: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const res = await fetch("/flashcards.csv");
        if (!res.ok) throw new Error("Could not load flashcards.csv from /public");
        const text = await res.text();
        const cards = parseCsv(text);
        setAllCards(cards);
        if (user) {
          const { data, error: dbErr } = await supabase
            .from("flashcard_progress")
            .select("filename, known")
            .eq("user_id", user.id)
            .eq("known", true);
          if (dbErr) throw dbErr;
          const known = new Set((data || []).map((r) => r.filename));
          setKnownSet(known);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [user]);

  const buildDeck = useCallback((filter, cards, known) => {
    let filtered = filter === "All" ? cards : cards.filter((c) => c.level === filter);
    if (filtered.length === 0) filtered = cards;
    const remaining = filtered.filter((c) => !known.has(c.filename));
    setDeck(shuffle(remaining.length > 0 ? remaining : filtered));
    setIndex(0);
    setFlipped(false);
    setFinished(false);
  }, []);

  useEffect(() => {
    if (allCards.length > 0) buildDeck(levelFilter, allCards, knownSet);
  }, [allCards, levelFilter, knownSet, buildDeck]);

  const current = deck[index];

  useEffect(() => {
    function onKey(e) {
      if (e.code === "Space") { e.preventDefault(); setFlipped((f) => !f); }
      if (e.code === "ArrowRight") advance();
      if (e.code === "ArrowLeft") goBack();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  async function markKnown() {
    if (!current || saving) return;
    setSaving(true);
    try {
      await supabase.from("flashcard_progress").upsert(
        { user_id: user.id, filename: current.filename, known: true, seen_at: new Date().toISOString() },
        { onConflict: "user_id,filename" }
      );
      setKnownSet((prev) => new Set([...prev, current.filename]));
      setSessionStats((s) => ({ ...s, known: s.known + 1 }));
    } finally {
      setSaving(false);
      advance();
    }
  }

  function markLearning() {
    setSessionStats((s) => ({ ...s, learning: s.learning + 1 }));
    advance();
  }

  function advance() {
    if (index + 1 >= deck.length) { setFinished(true); }
    else { setIndex((i) => i + 1); setFlipped(false); }
  }

  function goBack() {
    if (index > 0) { setIndex((i) => i - 1); setFlipped(false); }
  }

  function restartDeck() {
    buildDeck(levelFilter, allCards, knownSet);
    setSessionStats({ known: 0, learning: 0 });
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 rounded-full border-2 border-[#E8DDD0] border-t-[#C4613A] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-[#E8DDD0] bg-[#FFFCF8] p-6 text-center text-[#5C4A3A]">
        <p className="font-semibold text-[#C4613A] mb-1">Could not load flashcards</p>
        <p className="text-sm">{error}</p>
        <p className="text-sm mt-2 text-[#8B7355]">Make sure <code>flashcards.csv</code> is in the <code>public/</code> folder.</p>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-[#E8DDD0]" />
        <h2 className="text-sm font-semibold tracking-widest uppercase text-[#8B7355]">Flashcard Practice</h2>
        <div className="h-px flex-1 bg-[#E8DDD0]" />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-5">
        {["All", "A1", "A2", "B1", "B2", "C1"].map((lvl) => {
          const count = lvl === "All" ? allCards.length : allCards.filter(c => c.level === lvl).length;
          return (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                levelFilter === lvl
                  ? "bg-[#C4613A] text-white border-[#C4613A]"
                  : "bg-[#FFFCF8] text-[#5C4A3A] border-[#E8DDD0] hover:border-[#C4613A] hover:text-[#C4613A]"
              }`}
            >
              {lvl} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
        <div className="flex-1" />
        <span className="text-xs text-[#8B7355]">✓ {sessionStats.known} known · ↻ {sessionStats.learning} still learning</span>
        <button onClick={restartDeck} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[#E8DDD0] text-[#5C4A3A] bg-[#FFFCF8] hover:border-[#C4613A] hover:text-[#C4613A] transition-colors">Shuffle</button>
      </div>

      {!finished && deck.length > 0 && (
        <p className="text-xs text-[#8B7355] mb-3 text-center">{index + 1} / {deck.length} cards{levelFilter !== "All" && ` · ${levelFilter}`}</p>
      )}

      {finished ? (
        <div className="rounded-2xl border border-[#E8DDD0] bg-[#FFFCF8] shadow-[0_1px_6px_rgba(139,99,60,0.10)] p-10 text-center">
          <p className="font-serif text-3xl text-[#C4613A] mb-2">Μπράβο! 🎉</p>
          <p className="text-[#5C4A3A] mb-1">You've gone through all {deck.length} cards.</p>
          <p className="text-sm text-[#8B7355] mb-6">{sessionStats.known} marked as known · {sessionStats.learning} still learning</p>
          <button onClick={restartDeck} className="px-5 py-2 rounded-full bg-[#C4613A] text-white text-sm font-semibold hover:bg-[#a84f2f] transition-colors">Go again</button>
        </div>
      ) : deck.length === 0 ? (
        <div className="rounded-2xl border border-[#E8DDD0] bg-[#FFFCF8] p-8 text-center text-[#8B7355] text-sm">No cards to show for this filter.</div>
      ) : (
        <>
          <div className="cursor-pointer select-none" style={{ perspective: "1000px" }} onClick={() => setFlipped((f) => !f)}>
            <div style={{ transition: "transform 0.45s cubic-bezier(0.45, 0, 0.55, 1)", transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", position: "relative", minHeight: "200px" }}>
              <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} className="absolute inset-0 rounded-2xl border border-[#E8DDD0] bg-[#FFFCF8] shadow-[0_1px_6px_rgba(139,99,60,0.10)] flex flex-col items-center justify-center p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#8B7355] mb-4">Greek</p>
                <p className="font-serif text-3xl sm:text-4xl text-[#2C1810] text-center leading-snug">{current.greek}</p>
                <p className="text-xs text-[#8B7355] mt-6">tap to reveal · space</p>
              </div>
              <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }} className="absolute inset-0 rounded-2xl border border-[#C4613A]/30 bg-[#FDF6F2] shadow-[0_1px_6px_rgba(139,99,60,0.10)] flex flex-col items-center justify-center p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#C4613A] mb-4">English</p>
                <p className="font-serif text-2xl sm:text-3xl text-[#2C1810] text-center leading-snug mb-3">
                  {current.english || <span className="text-[#8B7355] italic text-lg">No translation recorded</span>}
                </p>
                <p className="font-serif text-base text-[#8B7355] text-center mt-1">{current.greek}</p>
              </div>
            </div>
          </div>

          <div className={`mt-4 flex gap-3 justify-center transition-opacity duration-300 ${flipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <button onClick={(e) => { e.stopPropagation(); markLearning(); }} className="flex-1 max-w-[160px] py-2.5 rounded-xl border border-[#E8DDD0] bg-[#FFFCF8] text-[#5C4A3A] text-sm font-semibold hover:border-[#8B7355] transition-colors">Still learning</button>
            <button onClick={(e) => { e.stopPropagation(); markKnown(); }} disabled={saving} className="flex-1 max-w-[160px] py-2.5 rounded-xl bg-[#6B7C3A] text-white text-sm font-semibold hover:bg-[#57682e] transition-colors disabled:opacity-50">{saving ? "Saving…" : "I know this ✓"}</button>
          </div>

          <div className="mt-4 flex justify-between items-center gap-2">
            <button onClick={goBack} disabled={index === 0} className="px-4 py-1.5 rounded-full text-xs font-semibold border border-[#E8DDD0] bg-[#FFFCF8] text-[#5C4A3A] hover:border-[#C4613A] hover:text-[#C4613A] disabled:opacity-30 transition-colors">← prev</button>
            <button onClick={advance} className="px-4 py-1.5 rounded-full text-xs font-semibold border border-[#E8DDD0] bg-[#FFFCF8] text-[#5C4A3A] hover:border-[#C4613A] hover:text-[#C4613A] transition-colors">skip →</button>
          </div>
        </>
      )}

      {knownSet.size > 0 && (
        <p className="text-xs text-center text-[#8B7355] mt-5">{knownSet.size} card{knownSet.size !== 1 ? "s" : ""} marked as known across all sessions</p>
      )}
    </section>
  );
}
