import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../i18n/translations';
import { journalEntries } from '../data/journal';

export default function Journal() {
  const { lang } = useLanguage();
  const t = (p: any) => p[lang];
  const entries = useMemo(() =>
    [...journalEntries].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-6 py-12 md:py-16"
    >
      <div id="journal-view" className="space-y-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">{t(ui.journal.chapter)}</p>
          <h2 className="text-serif text-3xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight leading-tight">
            {t(ui.journal.title)}
          </h2>
          <p className="text-[#1a1a1a]/70 font-light text-base md:text-lg leading-relaxed">
            {t(ui.journal.desc)}
          </p>
        </div>

        <div className="border-t border-[#1a1a1a]/10 divide-y divide-[#1a1a1a]/10">
          {entries.map((entry, idx) => (
            <article
              key={entry.id}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              <div className="lg:col-span-3 font-mono text-xs text-[#1a1a1a]/50 space-y-1.5">
                <div className="text-[#a84432] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <span>{t(ui.journal.noteLabel)}{String(entries.length - idx).padStart(3, '0')}</span>
                </div>
                <p className="font-semibold text-[#1a1a1a]/80 uppercase">{lang === 'en' && entry.categoryEn ? entry.categoryEn : entry.category}</p>
                <p className="flex items-center gap-1"><Calendar size={11} /> {entry.date}</p>
                <p className="opacity-60 flex items-center gap-1"><Clock size={11} /> {lang === 'en' && entry.readingTimeEn ? entry.readingTimeEn : entry.readingTime}</p>
              </div>

              <div className="lg:col-span-9 space-y-4">
                <Link to={`/journal/${entry.id}`}>
                  <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] group-hover:text-[#a84432] transition-colors cursor-pointer leading-snug">
                    {lang === 'en' && entry.titleEn ? entry.titleEn : entry.title}
                  </h3>
                </Link>

                <p className="text-[#1a1a1a]/75 font-light leading-relaxed text-sm md:text-base italic border-l border-[#a84432]/30 pl-4">
                  "{lang === 'en' && entry.taglineEn ? entry.taglineEn : entry.tagline}"
                </p>

                <div className="pt-2">
                  <Link
                    to={`/journal/${entry.id}`}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-[#a84432] hover:text-[#1a1a1a] font-bold"
                  >
                    {t(ui.journal.readMore)}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
