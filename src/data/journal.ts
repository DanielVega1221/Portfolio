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
    date: '2025-12-01',
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
  {
    id: 'de-la-facultad-a-productos',
    title: 'Cómo pasé de hacer TPs de la facultad a productos que facturan',
    titleEn: 'How I went from university assignments to products that make money',
    date: '2026-02-01',
    readingTime: '5 min de lectura',
    readingTimeEn: '5 min read',
    category: 'Carrera',
    categoryEn: 'Career',
    tagline: 'No tengo título todavía, pero esto es lo que aprendí en el camino.',
    taglineEn: "I don't have a degree yet, but here's what I learned along the way.",
    content: `Arranqué programando en Java de escritorio para la facultad. Entrada de datos por consola, menús con números, cero interfaz gráfica. Eran ejercicios, no productos. No había usuarios reales. No había consecuencias si algo fallaba.

### Lo que la facultad me dio

La UNCA me enseñó a pensar los problemas antes de resolverlos. A dudar de la primera solución que se me ocurría. A preguntarme si realmente entendía lo que me estaban pidiendo. Eso no te lo da un tutorial de YouTube.

Pero lo que no me dio fue contacto con la realidad. Nunca tuve un cliente enojado porque algo no funcionaba. Nunca tuve que estimar cuánto me iba a llevar un proyecto y cumplirlo. Nunca tuve que explicarle a alguien no técnico por qué elegí una tecnología y no otra.

### El salto a UXnicorp

Cuando Mauro y yo creamos UXnicorp, todo cambió. De golpe tenía clientes reales, plazos reales, plata de por medio. El primer proyecto con un cliente fue un cachetazo. No alcanzaba con que el código funcionara. Tenía que entender qué necesitaba el cliente, por qué lo necesitaba, y cómo explicarle lo que estábamos haciendo sin que se durmiera.

Aprendí a diseñar interfaces porque alguien tenía que hacerlo. Aprendí a hablar con clientes porque no había un departamento de ventas. Aprendí a decir "esto no hace falta" porque a veces el cliente pide cosas que no necesita y parte de mi trabajo es ayudarlo a verlo.

    ### Lo que aprendí fuera de la facultad

**Estimar tiempos.** Al principio siempre calculaba de menos, obvio. Después de varios proyectos aprendí a ser honesto conmigo y con el cliente. Prefiero decir "esto lleva tres semanas" y cumplir que prometer una y fallar.

**Decir que no** también es parte del trabajo. Cuando el presupuesto no alcanza, cuando el plazo es ridículo. Al principio me daba vergüenza. Después entendí que el cliente valora más la honestidad que el entusiasmo ciego.

**Explicar sin tecnicismos.** Algo que no te enseñan en la facultad. Si no puedo contarle a un cliente por qué tomé una decisión, probablemente no la entendí bien yo. Y si no la entendí, no debería estar tomándola.

**Cobrar por el valor, no por las horas.** Esto es lo más importante de todo. El cliente no paga por líneas de código. Paga por el problema que le resolvés.

Todavía no tengo el título. Y está bien. Lo que tengo son quince proyectos que hice mientras estudiaba. Eso dice más de mí que cualquier papel.`,
    contentEn: `I started coding desktop Java for university. Console input, numbered menus, zero graphical interface. They were exercises, not products. No real users. No consequences if something broke.

### What university gave me

UNCA taught me to think about problems before solving them. To doubt the first solution that came to mind. To ask myself if I really understood what was being asked of me. You don't get that from a YouTube tutorial.

But what it didn't give me was contact with reality. I never had an angry client because something didn't work. I never had to estimate how long a project would take and deliver on it. I never had to explain to a non-technical person why I chose one technology over another.

### The leap to UXnicorp

When Mauro and I created UXnicorp, everything changed. Suddenly I had real clients, real deadlines, real money at stake. The first project with a client was a wake-up call: it wasn't enough for the code to work. I had to understand what the client needed, why they needed it, and how to explain what we were doing without putting them to sleep.

I learned to design interfaces because someone had to do it. I learned to talk to clients because there was no sales department. I learned to say "this isn't necessary" because sometimes clients ask for things they don't need and part of my job is helping them see that.

    ### What I learned outside university

**Estimating time.** At first I always underestimated, obviously. After several projects I learned to be honest with myself and with the client. I'd rather say "this takes three weeks" and deliver than promise one and fail.

**Saying no** is also part of the job. When the budget isn't enough, when the deadline is ridiculous. At first it embarrassed me. Then I understood that clients value honesty more than blind enthusiasm.

**Explaining without jargon.** Something they don't teach you in university. If I can't tell a client why I made a decision, I probably didn't understand it well myself. And if I didn't understand it, I shouldn't be making it.

**Charging for value, not hours.** This is the most important one. The client doesn't pay for lines of code. They pay for the problem you solve.

I don't have the degree yet. And that's fine. What I have is fifteen projects I built while studying. That says more about me than any piece of paper.`,
  },
  {
    id: 'hablar-con-clientes',
    title: 'Lo que aprendí hablando con clientes sin ser vendedor',
    titleEn: 'What I learned talking to clients without being a salesperson',
    date: '2026-03-01',
    readingTime: '5 min de lectura',
    readingTimeEn: '5 min read',
    category: 'Negocio',
    categoryEn: 'Business',
    tagline: 'El código es el 50%. El otro 50% es entender qué necesita el cliente.',
    taglineEn: "Code is 50%. The other 50% is understanding what the client actually needs.",
    content: `En la facultad no te enseñan a hablar con clientes. Te enseñan patrones de diseño, complejidad algorítmica y normalización de bases de datos. Pero el día que te sentás frente a alguien que te paga por resolverle un problema, todo eso pasa a segundo plano.

La primera vez que hablé con un cliente no sabía ni qué preguntar. Él hablaba de su negocio, yo pensaba en tecnologías. Él quería vender más, yo pensaba en qué stack usar. Tuvimos que aprender a la fuerza.

### Escuchar antes de proponer

Lo más importante que aprendí es que mi trabajo no empieza cuando escribo código. Empieza cuando escucho. A veces lo que el cliente dice que necesita no es lo que realmente necesita. Mi trabajo es hurgar un poco más, hacer preguntas que parecen obvias, y llegar al problema real.

> El cliente no siempre sabe lo que necesita. Pero sabe cosas de su negocio que vos no tenés ni idea.

### El caso ElectroPower

ElectroPower es una empresa de servicios eléctricos industriales. Cuando llegaron me pidieron "una página web". Podría haberles hecho un sitio genérico con formulario de contacto y fue. Pero escuchando entendí que **todo su negocio pasaba por WhatsApp**. No usaban email. No usaban formularios. No usaban nada más que el teléfono.

Entonces la web no debía reemplazar WhatsApp. Debía **alimentarlo**. La diseñé para que cada sección derivara naturalmente al chat, con el cliente ya informado. El resultado: adoptaron la web de inmediato porque no les cambió la forma de trabajar. Solo la mejoró.

### Decir "esto no hace falta"

Una de las cosas más difíciles de aprender fue decirle a un cliente que algo que él pide no es necesario. Da miedo. Pensás que va a pensar que no sabés hacerlo, o que otro se lo va a hacer. Pero cuando se lo explicás con honestidad, **ganás credibilidad**.

Me pasó con más de un cliente. Llegaban pidiendo un e-commerce completo, y después de hablar entendíamos que con una landing + WhatsApp ya resolvían el 90% de lo que necesitaban. Cobré menos en el momento, pero gané un cliente que volvió y me recomendó.

    ### Lo que me llevo

**El cliente no habla tu idioma.** No esperes que entienda de stacks ni de frameworks. Tu trabajo es traducir.

**Las preguntas obvias son las más importantes.** "¿Cómo hacés esto hoy?" te dice más que cualquier brief de 20 páginas.

**Ser honesto rinde más que vender de más.** A mí me funcionó. Los clientes vuelven y te recomiendan.

**No vendas código. Vendé soluciones.** Si el cliente te pide un e-commerce pero con una landing y WhatsApp resuelve el 90%, decíselo. Cobrás menos hoy, ganás más mañana.`,
    contentEn: `University doesn't teach you how to talk to clients. They teach you design patterns, algorithmic complexity, and database normalization. But the day you sit in front of someone paying you to solve their problem, all of that takes a back seat.

The first time I talked to a client I didn't even know what to ask. He talked about his business, I thought about technologies. He wanted to sell more, I thought about which stack to use. We had to learn the hard way.

### Listen before proposing

The most important thing I learned is that my job doesn't start when I write code. It starts when I listen. Sometimes what the client says they need isn't what they actually need. My job is to dig a little deeper, ask questions that seem obvious, and get to the real problem.

> The client doesn't always know what they need. But they know things about their business that you have no clue about.

### The ElectroPower case

ElectroPower is an industrial electrical services company. When they came to me they asked for "a website." I could have built them a generic site with a contact form and called it a day. But listening closely I understood that **their entire business ran through WhatsApp**. They didn't use email. They didn't use forms. They used nothing but their phones.

So the website shouldn't replace WhatsApp. It should **feed it**. I designed it so every section naturally led to the chat, with the client already informed. The result: they adopted the site immediately because it didn't change how they worked. It only improved it.

### Saying "you don't need this"

One of the hardest things to learn was telling a client that something they're asking for isn't necessary. It's scary. You think they'll assume you can't do it, or that someone else will. But when you explain it honestly, **you gain credibility**.

It happened with more than one client. They'd come asking for a full e-commerce, and after talking we'd realize a landing page + WhatsApp already solved 90% of what they needed. I charged less in the moment, but gained a client who came back and recommended me.

    ### What I take away

**The client doesn't speak your language.** Don't expect them to understand stacks or frameworks. Your job is to translate.

**The obvious questions are the most important.** "How do you do this today?" tells you more than any 20-page brief.

**Being honest pays off more than overselling.** It worked for me. Clients come back and recommend you.

**Don't sell code. Sell solutions.** If the client asks for an e-commerce but a landing page and WhatsApp solves 90%, tell them. You charge less today, you earn more tomorrow.`,
  },
];
