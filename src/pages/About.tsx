import { motion } from 'motion/react';

export default function About() {
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
          <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">CAPÍTULO IV — PERFIL INTERNO</p>

          <h2 className="text-serif text-4xl sm:text-5xl font-light text-[#1a1a1a] tracking-tight leading-[1.1]">
            No me interesa ser el que <span className="text-[#a84432] italic font-semibold">"sabe más"</span>. Me interesa ser el que entiende mejor el problema.
          </h2>

          <p className="text-sm font-mono text-[#1a1a1a]/60 uppercase tracking-wider leading-relaxed">
            ENSAYO AUTOBIOGRÁFICO Y CRITERIO PROFESIONAL. NO EMPIEZO POR EL CÓDIGO. EMPIEZO POR HACER PREGUNTAS.
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
            <span className="font-mono text-[10px] text-[#a84432] font-bold uppercase tracking-widest">CUADERNO DE BITÁCORA // PERSPECTIVA OPERATIVA</span>
          </div>

          {/* Section 0: De dónde vengo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 00</span>
              <span className="opacity-30">/</span>
              <span>DE DÓNDE VENGO</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Catamarca, ingeniería y muchas ganas de aprender
            </h3>
            <div className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base space-y-4">
              <p>
                Soy de Catamarca. Ahí nací, crecí y ahí vivo hoy. Desde chico me gustó la tecnología y siempre tuve curiosidad por encontrarle la vuelta a los problemas, no solo desde el código sino desde cualquier lado que pudiera ayudar a alguien.
              </p>
              <p>
                Estudio Ingeniería en Informática en la Universidad Nacional de Catamarca. Ya voy por tercer año. La facultad me dio un montón de bases sólidas que valoro muchísimo, metodologías de trabajo, fundamentos teóricos, criterio para analizar antes de hacer. Pero nunca me alcanzó con lo que veía en clase. Siempre quise más. Así que empecé a investigar por mi cuenta. Leí libros, miré videos, tomé cursos, leí artículos y, sobre todo, aprendí de colegas. Gente que en algún momento me explicó algo, por más chico que fuera, y que yo todavía tengo presente cada vez que me siento a trabajar.
              </p>
              <p>
                Arranqué haciendo proyectos chicos para la facultad. Después fui escalando de a poco hasta construir productos digitales para profesionales y empresas. Pero lo que más me movió siempre no fue la tecnología en sí. Fue entender a las personas. Me gusta saber cómo trabaja la gente, qué procesos siguen, qué les complica el día a día. Hasta las cosas más burocráticas o las tareas más simples me interesan, porque ahí está la clave de todo. Entender eso es lo que separa una solución que funciona de una que realmente le sirve a alguien.
              </p>
              <p>
                No me interesa ser solo el que escribe código. Quiero entender para quién trabajo. Que lo que construyo no deje a nadie afuera por ningún sesgo, por ninguna suposición apurada. Eso me llevó a desarrollar algo que para mí es central, la capacidad de escuchar, de hacer preguntas antes de proponer, de no asumir que ya sé lo que el otro necesita.
              </p>
              <p>
                También aprendí a comunicar sin vueltas. Si algo no se puede explicar fácil, probablemente no lo entendí bien del todo. Y si no lo entendí, no debería estar construyéndolo. Prefiero frenar, volver a preguntar y recién ahí avanzar.
              </p>
              <p>
                Hoy trabajo remoto desde Catamarca. Pero si hay algo que me apasiona, voy a donde haga falta. Porque al final lo que me mueve no es el lugar. Es la gente con la que trabajo y los problemas que puedo ayudar a resolver.
              </p>
            </div>
          </div>

          {/* Section 1: UXnicorp */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 01</span>
              <span className="opacity-30">/</span>
              <span>UXNICORP</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Donde hago de todo. Y me gusta.
            </h3>
            <div className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base space-y-4">
              <p>
                UXnicorp es una agencia de desarrollo web chica. En una agencia chica no hay "departamento de diseño" ni "equipo de ventas". Hay que hacer lo que haga falta. Y eso fue exactamente lo que hice desde que entré.
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">Diseño y maqueto.</span> Antes de escribir una línea de código, pienso cómo va a verse y sentirse lo que estamos construyendo. Defino paletas, tipografías, jerarquías visuales. Maqueto las interfaces completas. No soy diseñador de formación, pero aprendí a diseñar con criterio porque alguien tenía que hacerlo y porque me importaba que lo que entregáramos se viera bien de verdad.
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">Programo.</span> React, Next.js, Astro, Tailwind, TypeScript. Lo que el proyecto necesite. Construyo frontends, backends cuando hace falta, integraciones con APIs, sistemas de autenticación, bases de datos. Desde una landing page simple hasta un sistema de reservas con concurrencia atómica.
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">Hablo con los clientes.</span> No hay intermediarios. El que diseña y el que programa está en la llamada. Escucho lo que necesitan, pregunto lo que no me quedó claro, explico por qué tomamos cada decisión en términos que cualquiera pueda entender.
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">Busco leads y vendo.</span> Identifico negocios que podrían beneficiarse de lo que hacemos, los contacto, les explico qué ofrecemos y por qué les puede servir. Aprendí a escuchar, a entender qué necesita cada uno y a ofrecer soluciones que tengan sentido, no a vender por vender.
              </p>
              <p>
                <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">Gestiono el equipo.</span> Coordino tareas, defino prioridades, me aseguro de que todos sepamos qué hay que hacer y para cuándo. Cuando algo se traba, lo destrabo. No es un rol formal de liderazgo, es lo que pasa cuando te importa que las cosas salgan bien.
              </p>
              <p>
                En UXnicorp no aprendí a ser "un desarrollador". Aprendí a estar presente en cada parte del proceso. A no decir "eso no me toca". A querer que al proyecto le vaya bien, de verdad. Porque cuando algo te importa, no te fijás en qué dice tu puesto. Te fijás en qué necesita el proyecto.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="bg-[#fffef0] border-l-4 border-[#a84432] border-y border-r border-[#e5e2de] py-6 px-6 my-8 rounded-r-sm shadow-2xs">
            <p className="text-serif text-lg md:text-xl italic text-[#1a1a1a]/90 font-light leading-relaxed">
              "Cuando algo te importa, no te fijás en qué dice tu puesto. Te fijás en qué necesita el proyecto."
            </p>
          </div>

          {/* Section 2: Cómo pienso */}
          <div className="space-y-6 pt-6 border-t border-[#1a1a1a]/10">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 02</span>
              <span className="opacity-30">/</span>
              <span>CÓMO PIENSO</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              No tengo una única forma de resolver problemas
            </h3>
            <p className="text-sm text-[#1a1a1a]/70 font-light italic">
              Pero sí hay algunas cosas que siempre están.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">PRINCIPIO 01</span>
                <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">Entender antes de hacer</h4>
                <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">
                  Si no entiendo bien el problema, no empiezo. Prefiero hacer más preguntas, aunque parezcan obvias, antes que construir algo que no hacía falta.
                </p>
              </div>
              <div className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">PRINCIPIO 02</span>
                <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">Separar lo importante del ruido</h4>
                <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">
                  Muchas ideas vienen mezcladas. Mi trabajo es desarmarlas, ver qué realmente importa y qué se puede simplificar.
                </p>
              </div>
              <div className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">PRINCIPIO 03</span>
                <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">No asumir que hay una sola solución</h4>
                <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">
                  Casi nunca la hay. Siempre intento pensar varias opciones, entender sus límites y elegir la que tenga más sentido en ese contexto.
                </p>
              </div>
              <div className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">PRINCIPIO 04</span>
                <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">Evitar la complejidad innecesaria</h4>
                <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">
                  No todo necesita un sistema grande. A veces la mejor solución es la más simple que resuelve bien el problema.
                </p>
              </div>
              <div className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">PRINCIPIO 05</span>
                <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">Dudar para mejorar</h4>
                <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">
                  No me interesa tener razón rápido. Me interesa cuestionar lo suficiente como para llegar a una mejor solución.
                </p>
              </div>
              <div className="bg-[#fffef0] border border-[#e5e2de] p-5 rounded-xs space-y-2">
                <span className="font-mono text-[9px] text-[#a84432] font-bold uppercase tracking-wider block">PRINCIPIO 06</span>
                <h4 className="font-serif text-base font-semibold text-[#1a1a1a]">Explicar simple</h4>
                <p className="text-xs text-[#1a1a1a]/75 font-light leading-relaxed">
                  Si no puedo explicarlo fácil, probablemente no lo entendí bien. Y si no lo entendí bien, no debería construirlo todavía.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Cómo es trabajar conmigo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold">
              <span>§ 03</span>
              <span className="opacity-30">/</span>
              <span>CÓMO ES TRABAJAR CONMIGO</span>
            </div>
            <h3 className="text-serif text-2xl md:text-3xl font-light text-[#1a1a1a] tracking-tight">
              Arranco entendiendo, no construyendo
            </h3>
            <div className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base space-y-4">
              <p>
                No propongo lo más grande, propongo lo que tiene sentido. Prefiero avanzar en partes, validar y mejorar sobre algo real, antes que prometer algo perfecto desde el inicio. Las cosas se van ajustando en el camino y eso está bien.
              </p>
              <p>
                Trabajo de forma cercana. Me gusta que del otro lado entiendan lo que estamos haciendo, <span className="font-semibold text-[#a84432] bg-[#a84432]/5 px-1 py-0.5 rounded-xs">por qué lo hacemos y hasta dónde tiene sentido llegar</span>. Sin tecnicismos innecesarios, sin vueltas.
              </p>
              <p>
                No me interesa imponer una solución. Me interesa que tenga sentido para quien la va a usar. Si algo no convence, lo charlamos y buscamos otra vuelta.
              </p>
            </div>
          </div>

          {/* Section 4: Cómo explico las cosas */}
          <div className="relative bg-[#fffef0] border-l-4 border-[#a84432] border-y border-r border-[#e5e2de] p-8 rounded-r-sm shadow-xs">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#a84432] font-semibold mb-4">
              <span>§ 04</span>
              <span className="opacity-30">/</span>
              <span>CÓMO EXPLICO LAS COSAS</span>
            </div>
            <p className="text-[#1a1a1a]/85 font-light leading-relaxed text-sm md:text-base">
              No me interesa hablar complicado. Si una idea no se puede explicar fácil, probablemente no esté bien entendida. Intento que cualquiera pueda entender lo que estoy proponiendo, sin importar si es técnico o no. Porque construir algo que nadie entiende, no sirve.
            </p>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-[#1a1a1a]/10 flex justify-between items-center text-xs font-mono text-[#1a1a1a]/40">
            <span>BIOGRAFÍA DE CAMPO // VOL. II</span>
            <span className="text-[#a84432] font-bold">G. D. V.</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
