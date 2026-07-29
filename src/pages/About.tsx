import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../i18n/translations';

export default function About() {
  const { lang } = useLanguage();
  const t = (path: any) => path[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-6 py-12 md:py-16"
    >
      <div id="about-view" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Headline and Polaroid Stamp */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">{t(ui.about.chapter)}</p>

          <h2 className="text-serif text-4xl sm:text-5xl font-light text-[#1a1a1a] tracking-tight leading-[1.1]">
            {t(ui.about.headline)}
          </h2>

          <p className="text-sm font-mono text-[#1a1a1a]/60 uppercase tracking-wider leading-relaxed">
            {t(ui.about.tag)}
          </p>

          {/* Polaroid Styled Stamp */}
          <div className="bg-[#fffef0] border border-[#e5e2de] p-5 shadow-xs max-w-sm mx-auto lg:mx-0 rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="aspect-square bg-[#efede8] border border-[#e5e2de]/50 flex items-center justify-center relative overflow-hidden group">
              <img
                src="/foto.png"
                alt="Gonzalo Daniel Vega"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:saturate-110"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/5 transition-colors duration-500" />
            </div>
            <p className="font-mono text-[10px] text-center text-[#1a1a1a]/50 mt-4">Gonzalo Daniel Vega — SFV Catamarca, AR</p>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 space-y-12">

          <div className="border-b border-[#1a1a1a]/10 pb-4">
            <span className="font-mono text-[10px] text-[#a84432] font-bold uppercase tracking-widest">{t(ui.about.logbook)}</span>
          </div>

          {/* Section 0: De dónde vengo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 00</span>
              <span className="opacity-30">/</span>
              <span>{t(ui.about.section00)}</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              {t(ui.about.section00Title)}
            </h3>
            <div className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base space-y-4">
              <p>{t(ui.about.section00p1)}</p>
              <p>{t(ui.about.section00p2)}</p>
              <p>{t(ui.about.section00p3)}</p>
              <p>{t(ui.about.section00p4)}</p>
              <p>{t(ui.about.section00p5)}</p>
              <p>{t(ui.about.section00p6)}</p>
            </div>
          </div>

          {/* Section 1: UXnicorp */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 01</span>
              <span className="opacity-30">/</span>
              <span>{t(ui.about.section01)}</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              {t(ui.about.section01Title)}
            </h3>
            <div className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base space-y-4">
              <p>{t(ui.about.section01p1)}</p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">{t(ui.about.section01Design)}</span> {t(ui.about.section01DesignText)}
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">{t(ui.about.section01Dev)}</span> {t(ui.about.section01DevText)}
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">{t(ui.about.section01Clients)}</span> {t(ui.about.section01ClientsText)}
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">{t(ui.about.section01Leads)}</span> {t(ui.about.section01LeadsText)}
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">{t(ui.about.section01Team)}</span> {t(ui.about.section01TeamText)}
              </p>
              <p>{t(ui.about.section01Close)}</p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="bg-[#fffef0] border-l-4 border-[#a84432] border-y border-r border-[#e5e2de] py-6 px-6 my-8 rounded-r-sm shadow-2xs">
            <p className="text-serif text-lg md:text-xl italic text-[#1a1a1a]/90 font-light leading-relaxed">
              "{t(ui.about.pullQuote)}"
            </p>
          </div>

          {/* Section 2: Cómo pienso */}
          <div className="space-y-6 pt-6 border-t border-[#1a1a1a]/10">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 02</span>
              <span className="opacity-30">/</span>
              <span>{t(ui.about.section02)}</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              {t(ui.about.section02Title)}
            </h3>
            <p className="text-sm text-[#1a1a1a]/70 font-light italic">
              {t(ui.about.section02Sub)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(['p01', 'p02', 'p03', 'p04', 'p05', 'p06'] as const).map((key, idx) => {
                const n = idx + 1;
                const pk = ui.about.principles as Record<string, { es: string; en: string }>;
                return (
                  <div key={key} className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                    <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">{`${t(ui.about.principleLabel)} ${String(n).padStart(2, '0')}`}</span>
                    <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">{t(pk[`${key}Title`])}</h4>
                    <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">{t(pk[`${key}Text`])}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Cómo es trabajar conmigo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 03</span>
              <span className="opacity-30">/</span>
              <span>{t(ui.about.section03)}</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              {t(ui.about.section03Title)}
            </h3>
            <div className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base space-y-4">
              <p>{t(ui.about.section03p1)}</p>
              <p>{t(ui.about.section03p2)}</p>
              <p>{t(ui.about.section03p3)}</p>
            </div>
          </div>

          {/* Section 4: Cómo explico las cosas */}
          <div className="relative bg-[#fffef0] border-l-4 border-[#a84432] border-y border-r border-[#e5e2de] p-8 rounded-r-sm shadow-xs">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold mb-4">
              <span>§ 04</span>
              <span className="opacity-30">/</span>
              <span>{t(ui.about.section04)}</span>
            </div>
            <p className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base">
              {t(ui.about.section04Text)}
            </p>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-[#1a1a1a]/10 flex justify-between items-center text-xs font-mono text-[#1a1a1a]/40">
            <span>{t(ui.about.footerBiography)}</span>
            <span className="text-[#a84432] font-bold">G. D. V.</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
