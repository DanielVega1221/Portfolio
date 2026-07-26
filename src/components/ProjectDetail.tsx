import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, CheckCircle2, AlertTriangle, RefreshCw, Award, Anchor, ExternalLink, Github, FolderKanban, X } from 'lucide-react';
import { caseStudies } from '../data/projects';
import { CaseStudy } from '../types';
import ProjectImage from './ProjectImage';

function getTypeBadge(type: CaseStudy['type']) {
  switch (type) {
    case 'personal':
      return { label: 'Demo conceptual', emoji: '', color: 'border-[#a84432]/20 text-[#a84432] bg-[#a84432]/5' };
    case 'real':
      return { label: 'Cliente UXnicorp', emoji: '', color: 'border-[#1a1a1a]/10 text-[#1a1a1a]/80 bg-[#1a1a1a]/5' };
    case 'tool':
      return { label: 'Herramienta', emoji: '', color: 'border-[#1a1a1a]/10 text-[#1a1a1a]/80 bg-[#1a1a1a]/5' };
    case 'particular':
      return { label: 'Cliente particular', emoji: '', color: 'border-[#1a1a1a]/10 text-[#1a1a1a]/80 bg-[#1a1a1a]/5' };
    case 'career':
      return { label: 'Carrera personal', emoji: '', color: 'border-[#1a1a1a]/10 text-[#1a1a1a]/80 bg-[#1a1a1a]/5' };
  }
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = caseStudies.find(p => p.id === id);
  const [showGallery, setShowGallery] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-sm text-[#1a1a1a]/50">Proyecto no encontrado.</p>
        <button
          onClick={() => navigate('/proyectos')}
          className="mt-4 font-mono text-xs text-[#a84432] underline uppercase tracking-wider"
        >
          Volver a Proyectos
        </button>
      </div>
    );
  }

  const badge = getTypeBadge(project.type);
  const onBack = () => navigate('/proyectos');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <div className="flex justify-between items-center border-b border-[#1a1a1a]/10 pb-6 mb-12">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a84432] hover:text-[#1a1a1a] transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Volver a Proyectos
        </button>
        <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-[0.2em]">
          DIARIO EDITORIAL / VOL. II / {project.year}
        </span>
      </div>

      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#1a1a1a]/50">
          <span className="text-[#a84432] font-semibold tracking-wider">CAPÍTULO / {project.chapterNumber}</span>
          <span className="opacity-30">•</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} className="opacity-70" /> {project.year}
          </span>
          <span className="opacity-30">•</span>
          <span className={`px-2 py-0.5 border rounded-xs text-[9px] uppercase tracking-wider font-semibold ${badge.color}`}>
            {badge.emoji} {badge.label}
          </span>
        </div>

        <h1 className="text-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1a1a1a] leading-[1.05]">
          {project.title}
        </h1>

        <p className="font-mono text-xs text-[#1a1a1a]/60 uppercase tracking-[0.2em] max-w-xl">
          {project.subtitle}
        </p>

        <div className="border-l-4 border-[#a84432] pl-6 py-2 my-8">
          <p className="text-xl md:text-2xl font-light text-[#1a1a1a]/90 font-serif italic leading-relaxed">
            "{project.tagline}"
          </p>
        </div>
      </header>

      <div className="mb-16">
        <ProjectImage
          title={project.title}
          subtitle={project.subtitle}
          chapterNumber={project.chapterNumber}
          type={project.type}
          projectId={project.id}
          url={project.url}
          className="shadow-xs"
        />
        <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-[#1a1a1a]/40 px-1 uppercase tracking-widest">
          <span>FIG 01. Representación estructural de la solución</span>
          <span>© Gonzalo Daniel Vega</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
        <div className="lg:col-span-8 space-y-16">
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-semibold text-[#a84432]">01 / CONTEXTO</span>
              <div className="flex-1 h-[1px] bg-[#1a1a1a]/10"></div>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              El punto de partida del desafío
            </h3>
            <div className="text-[#1a1a1a]/85 leading-relaxed font-light whitespace-pre-line text-base md:text-lg">
              {project.pointOfDeparture}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-semibold text-[#a84432]">02 / INVESTIGACIÓN</span>
              <div className="flex-1 h-[1px] bg-[#1a1a1a]/10"></div>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Hurgando bajo la superficie: ¿Qué investigué?
            </h3>
            <div className="text-[#1a1a1a]/85 leading-relaxed font-light space-y-4 whitespace-pre-line text-base md:text-lg">
              {project.investigation.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('-')) {
                  const items = paragraph.split('\n').map(item => item.replace('-', '').trim());
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-[#1a1a1a]/80 leading-relaxed font-light my-6">
                      {items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-[#1a1a1a]/85 leading-relaxed font-light">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </section>

          <section className="relative bg-[#fffef0] border-l-4 border-[#a84432] border-y border-r border-[#e5e2de] p-8 md:p-10 rounded-r-sm shadow-xs">
            <div className="absolute top-4 right-6 font-mono text-[9px] uppercase tracking-widest text-[#a84432] font-semibold flex items-center gap-1">
              <Award size={12} /> INSIGHT REVELADO
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 block mb-2">LA SÍNTESIS</span>
            <h4 className="text-serif text-xl md:text-2xl font-light text-[#1a1a1a] leading-relaxed italic mb-4">
              "{project.insight}"
            </h4>
            <p className="font-sans text-xs text-[#1a1a1a]/60 leading-relaxed">
              Comprender este pilar transformó por completo la dirección táctica del proyecto, permitiendo depurar el ruido innecesario y enfocarse en valor estricto.
            </p>
          </section>

          {project.options && project.options.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold text-[#a84432]">03 / TÁCTICAS</span>
                <div className="flex-1 h-[1px] bg-[#1a1a1a]/10"></div>
              </div>
              <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
                Análisis de Tradeoffs: Opciones sobre la mesa
              </h3>
              <p className="text-sm text-[#1a1a1a]/70 font-light italic">
                Construir software a medida requiere evaluar escenarios honestamente. Ninguna arquitectura es perfecta, cada decisión tiene un precio:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {project.options.map((opt, idx) => (
                  <div key={idx} className="bg-[#efede8]/40 border border-[#e5e2de]/80 p-5 rounded-xs space-y-2">
                    <span className="font-mono text-[10px] text-[#a84432] font-bold uppercase tracking-wider block">OPCIÓN {idx + 1}</span>
                    <h5 className="font-serif text-base font-semibold text-[#1a1a1a]">{opt.title}</h5>
                    <p className="text-[#1a1a1a]/75 font-light text-xs leading-relaxed">{opt.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-semibold text-[#a84432]">04 / DETERMINACIÓN</span>
              <div className="flex-1 h-[1px] bg-[#1a1a1a]/10"></div>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              La Decisión: El camino elegido
            </h3>
            <div className="text-[#1a1a1a]/85 leading-relaxed font-light space-y-4 whitespace-pre-line text-base md:text-lg">
              {project.decision}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#1a1a1a]/10">
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> LO QUE FUNCIONÓ DE VERDAD
              </h4>
              <p className="text-sm text-[#1a1a1a]/80 leading-relaxed font-light whitespace-pre-line">
                {project.workedWell}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold flex items-center gap-1.5">
                <AlertTriangle size={14} /> LIMITACIONES Y TRADEOFFS
              </h4>
              <p className="text-sm text-[#1a1a1a]/80 leading-relaxed font-light whitespace-pre-line">
                {project.tradeoffs}
              </p>
            </div>
          </section>

          <section className="relative bg-[#fffef0] p-8 border border-[#e5e2de] shadow-sm -rotate-1 max-w-2xl mx-auto mt-12 overflow-hidden">
            <div className="absolute -top-3 left-12 w-24 h-6 bg-[#cbc8bf]/40 border-x border-[#e5e2de]/50 opacity-60 rotate-2"></div>
            <div className="absolute -bottom-3 right-12 w-20 h-6 bg-[#cbc8bf]/40 border-x border-[#e5e2de]/50 opacity-60 -rotate-3"></div>

            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#a84432] font-bold mb-4 flex items-center gap-2">
              <RefreshCw size={12} /> BITÁCORA PERSONAL: ¿QUÉ HARÍA DIFERENTE HOY?
            </h4>

            <p className="font-serif text-base italic text-[#4a4a4a] leading-relaxed whitespace-pre-line">
              "{project.differentToday}"
            </p>
            <span className="block mt-4 font-mono text-[9px] text-[#1a1a1a]/40 uppercase tracking-widest">
              Anotación retrospectiva posterior al lanzamiento
            </span>
          </section>
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
          <div className="bg-[#fffef0] border border-[#e5e2de] p-6 shadow-xs rounded-sm">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/70 border-b border-[#1a1a1a]/10 pb-3 mb-4 flex items-center gap-2">
              <Anchor size={14} className="text-[#a84432]" /> FICHA TÉCNICA
            </h4>

            <div className="space-y-5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-wider block mb-1">PROYECTO</span>
                <p className="font-serif text-sm font-semibold text-[#1a1a1a]">{project.title}</p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-wider block mb-1">RUBRO / PROPÓSITO</span>
                <p className="font-sans text-[#1a1a1a] font-medium">{project.subtitle}</p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-wider block mb-1">AÑO DE EJECUCIÓN</span>
                <p className="font-sans text-[#1a1a1a] font-medium">{project.year}</p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-wider block mb-1">ALCANCE DEL PROYECTO</span>
                <p className="font-sans text-[#a84432] font-semibold uppercase tracking-wider">{project.criteriaLevel}</p>
              </div>

              <div className="pt-4 border-t border-[#1a1a1a]/10">
                <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-wider block mb-2">CONSECUENCIAS TECNOLÓGICAS</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] bg-[#efede8] px-2 py-0.5 text-[#1a1a1a]/80 rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {(project.url || project.repoFront || project.repoBack) && (
                <div className="pt-4 border-t border-[#1a1a1a]/10 space-y-2">
                  <span className="font-mono text-[10px] text-[#1a1a1a]/40 uppercase tracking-wider block mb-1">ENLACES</span>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[10px] text-[#a84432] hover:text-[#1a1a1a] font-semibold uppercase tracking-wider transition-colors">
                      <ExternalLink size={11} /> Ver proyecto
                    </a>
                  )}
                  {project.repoFront && (
                    <a href={project.repoFront} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[10px] text-[#a84432] hover:text-[#1a1a1a] font-semibold uppercase tracking-wider transition-colors">
                      <Github size={11} /> Repositorio frontend
                    </a>
                  )}
                  {project.repoBack && (
                    <a href={project.repoBack} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[10px] text-[#a84432] hover:text-[#1a1a1a] font-semibold uppercase tracking-wider transition-colors">
                      <Github size={11} /> Repositorio backend
                    </a>
                  )}
                </div>
              )}

              <div className="pt-4 border-t border-[#1a1a1a]/10">
                <button
                  onClick={() => setShowGallery(true)}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-[#a84432] hover:text-[#1a1a1a] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FolderKanban size={11} /> Galería
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#efede8]/60 p-6 rounded-sm border-l-2 border-[#a84432] space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#a84432] font-semibold block">CRITERIO DEL SOFTWARE</span>
            <p className="text-xs text-[#1a1a1a]/70 leading-relaxed font-light italic">
              "{project.criteriaInsight}"
            </p>
          </div>

          <div className="font-mono text-[9px] text-[#1a1a1a]/30 uppercase text-center tracking-widest pt-4">
            REGISTRO: G.D.V. // ARCH-{project.id.toUpperCase()}
          </div>
        </aside>
      </div>

      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/60 backdrop-blur-sm" onClick={() => setShowGallery(false)}>
          <div className="bg-[#fffef0] border border-[#e5e2de] rounded-sm p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#a84432] font-semibold block">GALERÍA</span>
                <h3 className="font-serif text-xl font-light text-[#1a1a1a]">{project.title}</h3>
              </div>
              <button onClick={() => setShowGallery(false)} className="text-[#1a1a1a]/40 hover:text-[#1a1a1a] cursor-pointer">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] bg-[#efede8] border border-[#e5e2de] rounded-xs flex items-center justify-center relative overflow-hidden cursor-pointer hover:border-[#a84432]/40 transition-colors group"
                  onClick={() => setLightboxIndex(n - 1)}
                >
                  <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/5 transition-colors z-10 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider bg-[#1a1a1a]/60 px-2 py-1 rounded-xs">
                      Ampliar
                    </span>
                  </div>
                  <img
                    src={`/projects/${project.id}/${String(n).padStart(2, '0')}.webp`}
                    alt={`${project.title} — ${String(n).padStart(2, '0')}`}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="text-center space-y-2 hidden">
                    <FolderKanban size={24} className="text-[#1a1a1a]/15 mx-auto" />
                    <p className="font-mono text-[9px] text-[#1a1a1a]/20 uppercase tracking-wider">
                      {project.title} — {String(n).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 font-mono text-[9px] text-[#1a1a1a]/30 text-center uppercase tracking-wider">
              Capturas reales del proyecto
            </p>
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1a1a1a]/90 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white z-10 cursor-pointer"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => Math.max(0, (i ?? 0) - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white disabled:opacity-20 z-10 cursor-pointer"
            disabled={lightboxIndex === 0}
          >
            <ArrowLeft size={36} />
          </button>

          <img
            src={`/projects/${project.id}/${String(lightboxIndex + 1).padStart(2, '0')}.webp`}
            alt={`${project.title} — ${String(lightboxIndex + 1).padStart(2, '0')}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => Math.min(2, (i ?? 0) + 1)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white disabled:opacity-20 z-10 cursor-pointer"
            disabled={lightboxIndex === 2}
          >
            <span className="block rotate-180"><ArrowLeft size={36} /></span>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-white/40 uppercase tracking-wider">
            {lightboxIndex + 1} / 3
          </div>
        </div>
      )}

      <div className="border-t border-[#1a1a1a]/10 mt-20 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a84432] hover:text-[#1a1a1a] transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Volver a Proyectos
        </button>
        <span className="font-mono text-xs text-[#1a1a1a]/30">
          Gonzalo Daniel Vega — {project.year} — SFV Catamarca, Catamarca
        </span>
      </div>
    </motion.article>
  );
}
