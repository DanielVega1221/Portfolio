import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudies } from '../data/projects';
import { journalEntries } from '../data/journal';
import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../i18n/translations';

const DIALOGUE_OPTIONS = [
  {
    id: 'fashion',
    q: {
      es: '¿Por qué huís de los frameworks por defecto y las modas técnicas?',
      en: 'Why do you run from default frameworks and technical fads?',
    },
    a: {
      es: 'Porque una moda técnica dura seis meses y el software que yo entrego tiene que aguantar años. Veo a mucha gente sumando librerías solo para que quede bien en el currículum. Yo prefiero mirar el problema real primero. Si algo se resuelve con HTML estático, meter un framework reactivo gigante no es prolijidad, es no querer pensar. El código cuesta mantenerlo. Lo que no escribís, no lo mantenés.',
      en: 'Because a technical fad lasts six months and the software I deliver has to last years. I see too many people adding libraries just to make their resume look good. I prefer to look at the actual problem first. If something can be solved with static HTML, dropping in a gigantic reactive framework isn\'t craftsmanship — it\'s not wanting to think. Code costs to maintain. What you don\'t write, you don\'t maintain.',
    },
  },
  {
    id: 'criterio',
    q: {
      es: '¿Qué significa tener "criterio" antes de sentarte a escribir código?',
      en: 'What does having "judgment" before sitting down to write code mean?',
    },
    a: {
      es: 'Es dudar del cliente cuando te pide algo apurado. Preguntarte si eso realmente resuelve su problema o si es un capricho técnico disfrazado de urgencia. A veces mi trabajo no es programar, es sentarme a charlar y terminar diciendo: esto no hace falta construirlo. Prefiero decirte eso antes de cobrarte por algo que no ibas a necesitar.',
      en: 'It means doubting the client when they ask for something rushed. Asking yourself if it actually solves their problem or if it\'s a technical whim disguised as urgency. Sometimes my job isn\'t programming — it\'s sitting down to talk and ending up saying: this doesn\'t need to be built. I\'d rather tell you that than charge you for something you never needed.',
    },
  },
  {
    id: 'visual-silence',
    q: {
      es: '¿Cómo equilibrás un diseño editorial impecable con una performance excelente?',
      en: 'How do you balance impeccable editorial design with excellent performance?',
    },
    a: {
      es: 'No hay equilibrio que buscar, en realidad. Un diseño lindo que tarda en cargar ya dejó de ser un buen diseño. Un sitio sobrecargado de animaciones es un vendedor gritándote al oído. Prefiero el silencio: tipografía cuidada, espacio para respirar, transiciones que casi ni se noten. Y que cargue rápido. Al final eso es lo que más agradece cualquiera que entra a un sitio, no perder tiempo.',
      en: 'There\'s no balance to seek, really. A beautiful design that takes too long to load has already stopped being good design. A site overloaded with animations is a salesperson shouting in your ear. I prefer silence: careful typography, room to breathe, transitions you barely notice. And that it loads fast. In the end, that\'s what anyone visiting a site appreciates most — not wasting time.',
    },
  },
  {
    id: 'habitabilidad',
    q: {
      es: '¿Qué es exactamente la "habitabilidad digital" en tu forma de pensar?',
      en: 'What exactly is "digital livability" in your way of thinking?',
    },
    a: {
      es: 'Diseñar una web con la misma cabeza con la que un arquitecto piensa una casa. Un living mal armado te genera tensión sin que sepas por qué. Una web llena de popups y banners hace lo mismo, pero con tu cabeza. Yo trato de armar interfaces que acompañen, no que te compitan la atención a cada segundo.',
      en: 'Designing a website with the same mindset an architect uses to design a house. A poorly laid-out living room creates tension without you knowing why. A website full of popups and banners does the same, but with your head. I try to build interfaces that accompany you, not compete for your attention every second.',
    },
  },
];

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = (path: any) => path[lang];

  const latestJournalEntry = useMemo(() => {
    if (journalEntries.length === 0) return null;
    return [...journalEntries].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-6 py-12 md:py-16"
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="home-view">
          <div className="lg:col-span-7 space-y-10 lg:border-r lg:border-[#1a1a1a]/10 lg:pr-12">
            <div className="space-y-4">
              <div className="flex gap-6 items-center mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium opacity-50">{t(ui.home.edition)}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium text-[#a84432] font-semibold">{t(ui.home.editorial)}</span>
              </div>

              <h2 className="text-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-[#1a1a1a] tracking-tight pr-4">
                {t(ui.home.heroTitle)}
              </h2>

              <p className="text-serif text-lg italic text-[#a84432]/80 font-light mt-3">
                {t(ui.home.heroTag)}
              </p>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-xs leading-relaxed text-[#1a1a1a]/70 tracking-wider">
                {t(ui.home.heroBody)}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#1a1a1a]/10">
              <p className="font-mono text-[10px] text-[#a84432] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <span>●</span> {t(ui.home.exchange)}
              </p>
              <p className="text-xs text-[#1a1a1a]/60 leading-relaxed font-light mb-4">
                {t(ui.home.exchangeDesc)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="dialogue-questions-grid">
                {DIALOGUE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveQuestion(activeQuestion === opt.id ? null : opt.id)}
                    className={`text-left p-3 border text-xs font-mono transition-all duration-200 cursor-pointer rounded-xs flex justify-between items-center gap-2 ${
                      activeQuestion === opt.id
                        ? 'bg-[#a84432] text-[#f9f7f2] border-[#a84432] shadow-xs'
                        : 'bg-[#fffef0] text-[#1a1a1a]/85 border-[#e5e2de] hover:border-[#a84432]/40 hover:bg-[#a84432]/2'
                    }`}
                  >
                    <span>{opt.q[lang]}</span>
                    <span className="text-[10px] font-bold opacity-60">→</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeQuestion && (
                  <motion.div
                    key={activeQuestion}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative bg-[#fffef0] p-6 shadow-sm border border-[#e5e2de] rounded-xs mt-4 -rotate-1 transform"
                  >
                    <div className="absolute -top-3 left-1/3 w-16 h-5 bg-[#cbc8bf]/30 rotate-3 border-x border-[#e5e2de]/30"></div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-[#a84432] font-bold mb-2">
                      {t(ui.home.fieldNote)}{(DIALOGUE_OPTIONS.findIndex(o => o.id === activeQuestion) + 101)}
                    </span>
                    <p className="font-serif text-sm text-[#3a3a3a] leading-relaxed italic">
                      "{DIALOGUE_OPTIONS.find(o => o.id === activeQuestion)?.a[lang]}"
                    </p>
                    <span className="block mt-4 text-[9px] font-mono text-[#1a1a1a]/40 uppercase text-right tracking-wider">
                      Gonzalo Daniel Vega //
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-[#1a1a1a]/10">
              <p className="font-mono text-[9px] text-[#1a1a1a]/40 uppercase tracking-widest mb-1">{t(ui.home.base)}</p>
              <p className="text-xs font-serif text-[#1a1a1a] font-medium">{t(ui.home.location)}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between lg:border-l lg:border-[#1a1a1a]/10 lg:pl-12 space-y-12">
            <div className="space-y-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">{t(ui.home.index)}</p>

              <nav className="flex flex-col gap-6">
                <Link to="/proyectos" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">01.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">{t(ui.nav.projects)}</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">{t(ui.home.indexProjects)}</span>
                </Link>

                <Link to="/journal" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">02.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">{t(ui.nav.journal)}</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">{t(ui.home.indexJournal)}</span>
                </Link>

                <Link to="/sobre-mi" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">03.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">{t(ui.nav.about)}</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">{t(ui.home.indexAbout)}</span>
                </Link>

                <Link to="/dialogo" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">04.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">{t(ui.nav.contact)}</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">{t(ui.home.indexContact)}</span>
                </Link>
              </nav>

              {latestJournalEntry && (
                <div className="bg-[#efede8] p-8 rounded-xs border-l-4 border-[#a84432] border-y border-r border-[#1a1a1a]/5 space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold block text-[#a84432]">
                    {t(ui.home.latestJournal)}
                  </span>
                  <h3 className="text-xl text-serif font-normal text-[#1a1a1a] leading-tight">
                    {lang === 'en' && latestJournalEntry.titleEn ? latestJournalEntry.titleEn : latestJournalEntry.title}
                  </h3>
                  <p className="font-sans text-xs text-[#1a1a1a]/70 leading-relaxed font-light">
                    {lang === 'en' && latestJournalEntry.taglineEn ? latestJournalEntry.taglineEn : latestJournalEntry.tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/journal/${latestJournalEntry.id}`}
                      className="font-mono text-[10px] text-[#a84432] hover:text-[#1a1a1a] font-bold uppercase tracking-wider underline flex items-center gap-1 cursor-pointer"
                    >
                      {t(ui.home.readNote)}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-[#1a1a1a]/10 space-y-6">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-[#a84432] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a84432] animate-pulse"></span>
                <span>{t(ui.home.philosophy)}</span>
              </div>

              <div className="relative bg-[#fffef0] border border-[#e5e2de] p-6 rounded-sm shadow-2xs space-y-4 overflow-hidden group hover:border-[#a84432]/30 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#a84432]/20 rounded-tr-sm"></div>

                <p className="font-serif text-lg md:text-xl text-[#1a1a1a]/95 font-light leading-snug">
                  {t(ui.home.philosophyText)}
                </p>

                <div className="pt-2 flex items-center justify-between font-mono text-[9px] text-[#1a1a1a]/40 uppercase tracking-widest border-t border-[#1a1a1a]/5">
                  <span>{t(ui.home.register)}</span>
                  <span className="text-[#a84432] font-semibold">{t(ui.home.registerSub)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
