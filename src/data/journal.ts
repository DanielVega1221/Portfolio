import { JournalEntry } from '../types';

/*
 * CÓMO ESCRIBIR ENTRADAS DEL JOURNAL
 * ===================================
 * Cada entrada es un objeto con esta estructura:
 * {
 *   id: 'slug-unico',            // sin espacios ni caracteres especiales
 *   title: 'Título de la nota',
 *   date: '15 Jul, 2026',        // formato: DD Mes, AAAA
 *   readingTime: '4 min de lectura',
 *   category: 'Filosofía de Producto',
 *   tagline: 'Una frase que resuma de qué va la nota.',
 *   content: `...`               // ver guía de formato abajo
 * }
 *
 * FORMATO DEL CONTENIDO (Markdown básico):
 * =========================================
 * - Párrafos: separados por una línea en blanco.
 * - Subtítulos: ### Título de sección
 * - Negrita: **texto en negrita**
 * - Listas: * Elemento de lista (uno por línea)
 * - Citas: > Texto de la cita
 *
 * Las entradas se muestran ordenadas por fecha en el Journal público.
 * Agregá cada nueva entrada al array journalEntries y se reflejará automáticamente.
 */

// EJEMPLO COMENTADO (descomentalo y modificalo para crear tu primera entrada):

/*
{
  id: 'mi-primera-nota',
  title: 'El título que va en la página principal',
  date: '20 Jul, 2026',
  readingTime: '3 min de lectura',
  category: 'Filosofía de Producto',
  tagline: 'Una bajada de una o dos líneas que anticipa de qué trata la nota y engancha al lector para que quiera leerla completa.',
  content: `Este es el primer párrafo. Acá va la introducción, el contexto, lo que motiva la nota. Separalo con una línea en blanco del siguiente.

El segundo párrafo sigue la idea. Podés usar **negritas** para resaltar conceptos clave, pero sin abusar. La idea es que el texto sea cómodo de leer.

### Primer subtítulo de sección

Cuando querés cambiar de tema o profundizar en algo, usá un subtítulo con tres numerales. Esto le da estructura visual a la nota y hace que sea más fácil de escanear.

Los párrafos que siguen al subtítulo desarrollan la idea. Podés tener varios párrafos bajo el mismo subtítulo. Lo importante es mantener un ritmo de lectura agradable.

* Primer punto importante de la lista
* Segundo punto, con **negrita** si querés destacar algo
* Tercer punto para reforzar una idea
* Los bullets son útiles para enumerar conceptos sin que parezca un manual

### Otro subtítulo

Más contenido acá. La separación entre párrafos se hace con una línea en blanco. No uses guiones medios ni punto y coma: son innecesarios y suenan a texto generado. Preferí frases cortas y puntos separados.

> Una cita destacada funciona como pausa visual. Es un respiro en la lectura. No abuses, pero cuando tenés una frase que querés que quede resonando, este formato ayuda mucho.

Cerraste la nota con un párrafo que redondee. Que deje algo en el lector. No hace falta una conclusión académica, pero sí que el texto se sienta completo y no cortado de golpe.`
},
*/

export const journalEntries: JournalEntry[] = [
  {
    id: 'como-empece-a-programar',
    title: 'Cómo empecé a programar (y por qué no paré)',
    titleEn: 'How I started coding (and why I never stopped)',
    date: '2026',
    readingTime: '5 min de lectura',
    readingTimeEn: '5 min read',
    category: 'Historia Personal',
    categoryEn: 'Personal Story',
    tagline: 'De ver a un amigo programar a crear nuestra propia agencia. La historia de cómo me metí en el desarrollo web sin planearlo demasiado.',
    taglineEn: 'From watching a friend code to building our own agency. The story of how I got into web development without planning too much.',
    content: `Arranqué sin querer, en realidad.

A finales de 2024 yo estaba en los primeros años de Ingeniería en Informática y lo único que había visto era Java de escritorio. Nada de front, nada de back, nada de frameworks. Un día veo a Mauro, un amigo, programando cosas web. Se la pasaba todo el día haciendo proyectos, todo el día, todos los días. Era divertido verlo, aunque yo no entendía nada. Me quedaba al lado tratando de descifrar qué hacía mientras él iba y venía entre archivos.

Con el tiempo empecé a entender algunas cosas sueltas. Él me propuso enseñarme a programar web, y fue rapidísimo. Tuvimos que ver todo corriendo porque él estaba ocupado con otras partes del proyecto y necesitaba ayuda. Así que me dio un módulo para que yo hiciera. Nada complejo, ver y editar unos registros nomás. Pero para mí fue enorme. No sabía casi nada y terminé armándolo con HTML, CSS, JavaScript, React y Bootstrap. Me divertí muchísimo, tanto haciéndolo como aprendiendo a hacerlo.

Con el tiempo creamos UXnicorp, nuestra pequeña agencia de desarrollo web. Empezaron a llegar clientes. Empecé a aprender tecnologías nuevas, metodologías nuevas. Empezó a aparecer gente nueva en el equipo. Todo creció de a poco y casi sin darnos cuenta.

Y después de todo ese camino, acá estoy. Armando este portfolio. No porque alguien me lo pidió, sino porque un día me desperté y me di cuenta de algo, ya no era el pibe que no podía centrar un texto con CSS. Ya no era el que no entendía cómo conectar el front con el back. Ya tenía varios proyectos, de clientes reales, de herramientas, de decisiones de arquitectura, de aprendizajes. Había crecido.

Hacer este portfolio fue como mirar para atrás y decir "che, todo esto hice". Fue para darme cuenta de que podía mostrarme como profesional, no como alguien que recién empieza. Porque ya no estoy empezando. Ya pasé por demos, por clientes reales, por sistemas complejos, por proyectos que salieron mal y por otros que salieron mejor de lo que esperaba.

Hoy me acuerdo de esos primeros días y me río. De las veces que no podía centrar un texto y Mauro me cargaba. De cuando el back no se conectaba con el front porque puse mal una letra. De esas madrugadas aprendiendo React con Bootstrap sin saber muy bien qué estaba haciendo. Pero sobre todo me acuerdo de que fue divertido. Empezar así, riendo entre amigos, hizo que programar nunca se sintiera como trabajo.

Y si estás leyendo esto, capaz estás en ese mismo lugar donde yo estaba. Sin entender nada. Viendo a alguien más programar. Con ganas de aprender pero sin saber por dónde arrancar. Seguí. Vale la pena.`,
    contentEn: `I started without meaning to, really.

By late 2024 I was in my first years of Computer Engineering and the only thing I had seen was desktop Java. No frontend, no backend, no frameworks. One day I see Mauro, a friend, coding web stuff. He spent all day building projects, every day, all day. It was fun to watch, even though I understood nothing. I'd sit next to him trying to figure out what he was doing while he jumped back and forth between files.

Over time I started to understand a few scattered things. He offered to teach me web development, and it went lightning fast. We had to rush through everything because he was busy with other parts of a project and needed help. So he gave me a module to build myself. Nothing complex, just viewing and editing some records. But for me it was enormous. I barely knew anything and I ended up building it with HTML, CSS, JavaScript, React, and Bootstrap. I had a blast, both building it and learning how to build it.

Over time we created UXnicorp, our tiny web development agency. Clients started coming in. I started learning new technologies, new methodologies. New people started joining the team. Everything grew little by little, almost without us noticing.

And after that whole journey, here I am. Building this portfolio. Not because someone asked me to, but because one day I woke up and realized something, I was no longer the kid who couldn't center text with CSS. I was no longer the one who couldn't figure out how to connect the frontend to the backend. I had several projects, real clients, tools, architectural decisions, learnings. I had grown.

Building this portfolio was like looking back and saying "wow, I did all this." It was to realize I could show myself as a professional, not as someone just starting out. Because I'm not starting anymore. I've been through demos, real clients, complex systems, projects that went wrong and others that turned out better than I expected.

Today I remember those first days and laugh. The times I couldn't center text and Mauro teased me. When the backend wouldn't connect to the frontend because I mistyped one letter. Those late nights learning React with Bootstrap without really knowing what I was doing. But above all I remember it was fun. Starting like that, laughing with friends, made coding never feel like work.

And if you're reading this, maybe you're in that same place I was. Understanding nothing. Watching someone else code. Wanting to learn but not knowing where to start. Keep going. It's worth it.`,
  },
];
