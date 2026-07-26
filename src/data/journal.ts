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
  // Descomentá el ejemplo de arriba, modificalo y copialo acá
  // Agregá todas las entradas que quieras
];
