/**
 * @remarks
 * # Emision
 * Describe el tipo mínimo que toda emisión debe tener para ser gestionada en la aplicación. Este tipo de dato se utiliza para definir el contenido audiovisual que se puede gestionar en la aplicación (series, películas, documentales, etc.).
 * @param string - Nombre de la emisión.
 * @param number - Año de lanzamiento de la emisión.
 * @example
 * ```ts
 * const emision: Emision = {
 *   nombre: 'Breaking Bad',
 *   anio: 2008
 * }
 * ```
 */
export interface Emision {
  nombre: string;
  anio: number;
  // Se pueden añadir más propiedades si se desea
}
