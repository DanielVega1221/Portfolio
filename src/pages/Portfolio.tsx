import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, HelpCircle } from 'lucide-react';
import { caseStudies } from '../data/projects';
import ProjectImage from '../components/ProjectImage';
import type { CaseStudy } from '../types';

type TypeFilter = 'all' | 'personal' | 'tool' | 'real' | 'particular' | 'career';

const FILTER_OPTIONS = [
  { id: 'all' as const, label: 'Todos' },
  { id: 'personal' as const, label: 'Demos conceptuales' },
  { id: 'tool' as const, label: 'Herramientas' },
  { id: 'real' as const, label: 'Clientes UXnicorp' },
  { id: 'particular' as const, label: 'Clientes particulares' },
  { id: 'career' as const, label: 'Carrera personal' },
];

function typeLabel(type: CaseStudy['type']) {
  switch (type) {
    case 'personal': return 'Demo conceptual';
    case 'tool': return 'Herramienta';
    case 'real': return 'Cliente UXnicorp';
    case 'particular': return 'Cliente particular';
    case 'career': return 'Carrera personal';
  }
}

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');

  const filteredProjects = useMemo(() => {
    return caseStudies.filter(project => {
      const matchesType = typeFilter === 'all' || project.type === typeFilter;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.tools.some(t => t.toLowerCase().includes(query)) ||
        project.pointOfDeparture.toLowerCase().includes(query) ||
        project.investigation.toLowerCase().includes(query);
      return matchesType && matchesSearch;
    });
  }, [searchQuery, typeFilter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-6 py-12 md:py-16"
    >
      <div id="portfolio-view" className="space-y-16">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">CAPÍTULO II — ARCHIVOS Y PROYECTOS</p>
          <h2 className="text-serif text-3xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight leading-tight">
            Registro de Proyectos Realizados
          </h2>
          <p className="text-[#1a1a1a]/70 font-light text-base md:text-lg leading-relaxed">
            No todos los proyectos nacen del mismo lugar. Algunos surgen de la curiosidad. Otros de problemas reales. Y otros de cosas que necesitaba resolver para mí. Los separo así porque cada uno muestra una forma distinta de pensar.
          </p>
        </div>

        <div className="border-t border-b border-[#1a1a1a]/10 py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a84432]" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por herramienta, problema, tecnología..."
              className="w-full bg-[#fffef0] border border-[#e5e2de] pl-10 pr-4 py-2.5 text-xs font-mono rounded-sm focus:outline-none focus:border-[#a84432] text-[#1a1a1a] transition-colors"
            />
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setTypeFilter(filter.id)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono tracking-wider transition-all duration-150 uppercase cursor-pointer ${
                  typeFilter === filter.id
                    ? 'bg-[#a84432] text-[#f9f7f2]'
                    : 'bg-[#fffef0] border border-[#e5e2de] text-[#1a1a1a]/60 hover:text-[#a84432] hover:border-[#a84432]/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#fffef0] border border-dashed border-[#e5e2de] rounded-sm">
              <HelpCircle className="mx-auto text-[#a84432] mb-4" size={32} />
              <p className="font-mono text-sm text-[#1a1a1a]/55">Ningún proyecto coincide con la búsqueda.</p>
              <button
                onClick={() => { setSearchQuery(''); setTypeFilter('all'); }}
                className="mt-4 text-xs font-mono uppercase tracking-wider underline text-[#a84432] hover:opacity-80"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                <div className="lg:col-span-6 group cursor-pointer">
                  <Link to={`/proyectos/${project.id}`}>
                    <ProjectImage
                      title={project.title}
                      subtitle={project.subtitle}
                      chapterNumber={project.chapterNumber}
                      type={project.type}
                      projectId={project.id}
                      url={project.url}
                      className="shadow-xs hover:shadow-md transition-shadow duration-300"
                    />
                  </Link>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3 font-mono text-[10px] text-[#1a1a1a]/50 uppercase tracking-widest">
                    <span className="font-bold text-[#a84432]">CAPÍTULO / {project.chapterNumber}</span>
                    <span>•</span>
                    <span>Año {project.year}</span>
                    <span>•</span>
                    <span className="text-[#1a1a1a]/80 font-semibold">{typeLabel(project.type)}</span>
                  </div>

                  <Link to={`/proyectos/${project.id}`}>
                    <h3 className="text-serif text-3xl sm:text-4xl font-light text-[#1a1a1a] hover:text-[#a84432] tracking-tight leading-tight transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="font-mono text-xs text-[#a84432] uppercase tracking-[0.15em]">
                    {project.subtitle}
                  </p>

                  <p className="text-[#1a1a1a]/85 leading-relaxed font-light text-sm md:text-base">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tools.map(t => (
                      <span key={t} className="text-[10px] font-mono bg-[#efede8] text-[#1a1a1a]/80 px-2 py-0.5 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#1a1a1a]/10 flex justify-between items-center">
                    <span className="font-mono text-[9px] text-[#1a1a1a]/40 uppercase tracking-widest">
                      REG-{project.id.substring(0, 8).toUpperCase()}
                    </span>
                    <Link
                      to={`/proyectos/${project.id}`}
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-[#a84432] hover:text-[#1a1a1a] hover:underline font-bold"
                    >
                      Estudio Técnico Completo →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}
