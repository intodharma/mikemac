'use client';

import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Flame, Search, Sparkles, Trophy } from 'lucide-react';
import { popularTopics, topics, type VerseRef } from '@/data/topics';
import { defaultState, loadState, saveState, type SavedState } from '@/lib/storage';
import { getVerseText } from '@/lib/verse-provider';

const translations = ['KJV', 'WEB', 'ASV'];

export function VerseVaultApp() {
  const [query, setQuery] = useState('fear');
  const [translation, setTranslation] = useState('KJV');
  const [state, setState] = useState<SavedState>(defaultState);
  const [activeVerse, setActiveVerse] = useState<VerseRef | null>(null);
  const [verseText, setVerseText] = useState('');
  const [hideWords, setHideWords] = useState(false);
  const [typing, setTyping] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = loadState();
    setState(saved);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveState(state);
  }, [state, loaded]);

  useEffect(() => {
    if (!activeVerse) return;

    setVerseText(activeVerse.sampleText);
    getVerseText(activeVerse.reference, translation).then(setVerseText);
  }, [activeVerse, translation]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];

    const direct = topics[term];
    if (direct) return direct;

    return Object.values(topics)
      .flat()
      .filter((verse) => verse.topic.toLowerCase().includes(term) || verse.reference.toLowerCase().includes(term) || verse.sampleText.toLowerCase().includes(term));
  }, [query]);

  const accuracy = useMemo(() => {
    if (!verseText || !typing) return 0;
    const cleanA = verseText.replace(/\s+/g, ' ').trim().toLowerCase();
    const cleanB = typing.replace(/\s+/g, ' ').trim().toLowerCase();
    const max = Math.max(cleanA.length, cleanB.length);
    if (!max) return 0;
    let same = 0;
    for (let i = 0; i < Math.min(cleanA.length, cleanB.length); i += 1) {
      if (cleanA[i] === cleanB[i]) same += 1;
    }
    return Math.round((same / max) * 100);
  }, [typing, verseText]);

  function addToList(list: 'memorizing' | 'mastered', reference: string) {
    setState((current) => ({
      ...current,
      [list]: Array.from(new Set([...current[list], reference])),
    }));
  }

  function markPractice() {
    const today = new Date().toISOString().slice(0, 10);
    const last = state.lastPracticedOn;
    let streak = state.streak;

    if (last !== today) {
      streak = streak + 1;
    }

    setState((current) => ({ ...current, streak, lastPracticedOn: today }));
  }

  return (
    <main className="min-h-screen bg-hero-gradient px-4 py-6 text-ink md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass soft-glow mb-6 rounded-3xl p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mist">
                <Sparkles size={14} /> VerseVault
              </p>
              <h1 className="text-3xl font-semibold md:text-5xl">Memorize Scripture by topic with a cleaner, calmer flow.</h1>
            </div>
            <select
              className="glass rounded-2xl px-4 py-3 text-sm text-ink outline-none"
              value={translation}
              onChange={(event) => setTranslation(event.target.value)}
            >
              {translations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.4fr_0.9fr]">
            <div className="glass rounded-3xl p-4">
              <label className="mb-2 block text-sm text-mist">Search a topic</label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Search size={18} className="text-mist" />
                <input
                  className="w-full bg-transparent text-base text-ink outline-none"
                  placeholder="Fear, strength, anxiety, wisdom..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {popularTopics.map((topic) => (
                  <button
                    key={topic}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm capitalize text-ink transition hover:bg-white/10"
                    onClick={() => setQuery(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              <StatCard icon={<BookOpen size={16} />} label="Memorizing" value={state.memorizing.length} />
              <StatCard icon={<Trophy size={16} />} label="Mastered" value={state.mastered.length} />
              <StatCard icon={<Flame size={16} />} label="Streak" value={state.streak} />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="glass soft-glow rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold capitalize">Results for {query || 'topic'}</h2>
              <span className="text-sm text-mist">{results.length} verses</span>
            </div>
            <div className="space-y-3">
              {results.map((verse) => (
                <button
                  key={verse.reference}
                  className="glass block w-full rounded-2xl p-4 text-left transition hover:bg-white/10"
                  onClick={() => {
                    setActiveVerse(verse);
                    setTyping('');
                    setHideWords(false);
                  }}
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <strong>{verse.reference}</strong>
                    <span className="rounded-full bg-white/8 px-2 py-1 text-xs uppercase tracking-[0.15em] text-mist">{verse.topic}</span>
                  </div>
                  <p className="text-sm leading-6 text-mist">{verse.sampleText}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="glass soft-glow rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Memorization mode</h2>
              {activeVerse ? <span className="text-sm text-mist">{translation}</span> : null}
            </div>

            {activeVerse ? (
              <>
                <div className="glass rounded-2xl p-4">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <strong>{activeVerse.reference}</strong>
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-full border border-white/10 px-3 py-2 text-sm" onClick={() => addToList('memorizing', activeVerse.reference)}>Save</button>
                      <button className="rounded-full border border-white/10 px-3 py-2 text-sm" onClick={() => addToList('mastered', activeVerse.reference)}>Mastered</button>
                      <button className="rounded-full border border-white/10 px-3 py-2 text-sm" onClick={() => setHideWords((current) => !current)}>{hideWords ? 'Reveal' : 'Hide words'}</button>
                    </div>
                  </div>
                  <p className="text-lg leading-8 text-ink">
                    {hideWords ? maskWords(verseText) : verseText}
                  </p>
                </div>

                <div className="mt-4 glass rounded-2xl p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm text-mist">Type it from memory</label>
                    <span className="text-sm text-mist">Accuracy {accuracy}%</span>
                  </div>
                  <textarea
                    className="min-h-40 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-base text-ink outline-none"
                    placeholder="Start typing the verse from memory..."
                    value={typing}
                    onChange={(event) => setTyping(event.target.value)}
                  />
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-xs text-mist">Use this area for recall, repetition, and self-checking.</span>
                    <button
                      className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900"
                      onClick={markPractice}
                    >
                      Log practice
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="glass rounded-2xl p-6 text-mist">
                Pick a verse from the left to open memorization mode.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-mist">{icon}{label}</div>
      <div className="text-3xl font-semibold">{value}</div>
    </div>
  );
}

function maskWords(text: string) {
  return text
    .split(' ')
    .map((word, index) => (index % 3 === 0 ? '____' : word))
    .join(' ');
}
