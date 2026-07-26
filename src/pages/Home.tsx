import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudies } from '../data/projects';
import { journalEntries } from '../data/journal';

const DIALOGUE_OPTIONS = [
  {
    id: 'fashion',
    q: '¿Por qué huís de los frameworks por defecto y las modas técnicas?',
    a: 'Porque una moda técnica dura seis meses y el software que yo entrego tiene que aguantar años. Veo a mucha gente sumando librerías solo para que quede bien en el currículum. Yo prefiero mirar el problema real primero. Si algo se resuelve con HTML estático, meter un framework reactivo gigante no es prolijidad, es no querer pensar. El código cuesta mantenerlo. Lo que no escribís, no lo mantenés.'
  },
  {
    id: 'criterio',
    q: '¿Qué significa tener "criterio" antes de sentarte a escribir código?',
    a: 'Es dudar del cliente cuando te pide algo apurado. Preguntarte si eso realmente resuelve su problema o si es un capricho técnico disfrazado de urgencia. A veces mi trabajo no es programar, es sentarme a charlar y terminar diciendo: esto no hace falta construirlo. Prefiero decirte eso antes de cobrarte por algo que no ibas a necesitar.'
  },
  {
    id: 'visual-silence',
    q: '¿Cómo equilibrás un diseño editorial impecable con una performance excelente?',
    a: 'No hay equilibrio que buscar, en realidad. Un diseño lindo que tarda en cargar ya dejó de ser un buen diseño. Un sitio sobrecargado de animaciones es un vendedor gritándote al oído. Prefiero el silencio: tipografía cuidada, espacio para respirar, transiciones que casi ni se noten. Y que cargue rápido. Al final eso es lo que más agradece cualquiera que entra a un sitio, no perder tiempo.'
  },
  {
    id: 'habitabilidad',
    q: '¿Qué es exactamente la "habitabilidad digital" en tu forma de pensar?',
    a: 'Diseñar una web con la misma cabeza con la que un arquitecto piensa una casa. Un living mal armado te genera tensión sin que sepas por qué. Una web llena de popups y banners hace lo mismo, pero con tu cabeza. Yo trato de armar interfaces que acompañen, no que te compitan la atención a cada segundo.'
  }
];

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

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
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium opacity-50">Edición Especial No. 01</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium text-[#a84432] font-semibold">Criterio Editorial</span>
              </div>

              <h2 className="text-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-[#1a1a1a] tracking-tight pr-4">
                Me gusta entender las cosas antes de construirlas.
              </h2>

              <p className="text-serif text-lg italic text-[#a84432]/80 font-light mt-3">
                No empiezo por el código.
              </p>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-xs leading-relaxed text-[#1a1a1a]/70 tracking-wider">
                Empiezo por hacer preguntas, dudar, desarmar el problema y recién ahí pensar una solución que tenga sentido. A veces eso termina en un sistema complejo. Otras veces en algo mucho más simple de lo esperado. Pero siempre en algo que realmente sirve.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#1a1a1a]/10">
              <p className="font-mono text-[10px] text-[#a84432] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <span>●</span> INTERCAMBIO DE IDEAS
              </p>
              <p className="text-xs text-[#1a1a1a]/60 leading-relaxed font-light mb-4">
                Elegí una pregunta. Te comparto lo que pienso acá abajo.
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
                    <span>{opt.q}</span>
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
                      NOTA DE CAMPO #{(DIALOGUE_OPTIONS.findIndex(o => o.id === activeQuestion) + 101)}
                    </span>
                    <p className="font-serif text-sm text-[#3a3a3a] leading-relaxed italic">
                      "{DIALOGUE_OPTIONS.find(o => o.id === activeQuestion)?.a}"
                    </p>
                    <span className="block mt-4 text-[9px] font-mono text-[#1a1a1a]/40 uppercase text-right tracking-wider">
                      Gonzalo Daniel Vega //
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-[#1a1a1a]/10">
              <p className="font-mono text-[9px] text-[#1a1a1a]/40 uppercase tracking-widest mb-1">Base operativa y física</p>
              <p className="text-xs font-serif text-[#1a1a1a] font-medium">San Fernando del Valle de Catamarca, Catamarca, Argentina</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between lg:border-l lg:border-[#1a1a1a]/10 lg:pl-12 space-y-12">
            <div className="space-y-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">ÍNDICE DE CONTENIDOS</p>

              <nav className="flex flex-col gap-6">
                <Link to="/proyectos" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">01.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">Proyectos</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">Archivo</span>
                </Link>

                <Link to="/journal" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">02.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">El Journal</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">Notas de Campo</span>
                </Link>

                <Link to="/sobre-mi" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">03.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">Sobre Mí</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">Conversación</span>
                </Link>

                <Link to="/dialogo" className="group cursor-pointer flex justify-between items-baseline text-left w-full border-none bg-transparent p-0 text-[#1a1a1a] focus:outline-none">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a84432] font-semibold">04.</span>
                  <span className="text-2xl font-light border-b border-transparent group-hover:border-[#a84432] pb-1 transition-all text-serif">Diálogo</span>
                  <span className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-4"></span>
                  <span className="font-mono text-[10px] uppercase opacity-50">Contacto</span>
                </Link>
              </nav>

              {latestJournalEntry && (
                <div className="bg-[#efede8] p-8 rounded-xs border-l-4 border-[#a84432] border-y border-r border-[#1a1a1a]/5 space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold block text-[#a84432]">
                    LO ÚLTIMO EN EL JOURNAL
                  </span>
                  <h3 className="text-xl text-serif font-normal text-[#1a1a1a] leading-tight">
                    {latestJournalEntry.title}
                  </h3>
                  <p className="font-sans text-xs text-[#1a1a1a]/70 leading-relaxed font-light">
                    {latestJournalEntry.tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/journal/${latestJournalEntry.id}`}
                      className="font-mono text-[10px] text-[#a84432] hover:text-[#1a1a1a] font-bold uppercase tracking-wider underline flex items-center gap-1 cursor-pointer"
                    >
                      Leer nota de campo →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-[#1a1a1a]/10 space-y-6">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-[#a84432] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a84432] animate-pulse"></span>
                <span>FILOSOFÍA DE TRABAJO</span>
              </div>

              <div className="relative bg-[#fffef0] border border-[#e5e2de] p-6 rounded-sm shadow-2xs space-y-4 overflow-hidden group hover:border-[#a84432]/30 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#a84432]/20 rounded-tr-sm"></div>

                <p className="font-serif text-lg md:text-xl text-[#1a1a1a]/95 font-light leading-snug">
                  Mi valor no radica en apilar líneas de código apresurado. Radica en el <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">diagnóstico honesto</span>, la toma coherente de <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">decisiones tecnológicas</span> y el diseño de interfaces limpias, bellas y profundamente <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">habitables</span>.
                </p>

                <div className="pt-2 flex items-center justify-between font-mono text-[9px] text-[#1a1a1a]/40 uppercase tracking-widest border-t border-[#1a1a1a]/5">
                  <span>REGISTRO GDV // MANIFIESTO</span>
                  <span className="text-[#a84432] font-semibold">Criterio sobre velocidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
