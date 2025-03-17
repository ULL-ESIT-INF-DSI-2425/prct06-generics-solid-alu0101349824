/**
 * @module Ejericio1
 */

/**
 * @remarks
 * # Streamable
 * Interfaz genérica para operaciones de lectura y búsqueda en una colección.
 * @param T - Tipo de dato de las emisiones.
 */
export interface Streamable<T> {
  /**
   * Devuelve todas las emisiones almacenadas.
   * @returns Lista de emisiones.
   */
  obtenerEmisiones(): T[];

  /**
   * Añade una nueva emisión.
   * @param emision - Emisión a añadir.
   * @returns void
   */
  anadirEmision(emision: T): void;

  /**
   * Busca emisiones por nombre exacto.
   * @param nombre - Nombre a buscar.
   * @returns Lista de emisiones encontradas.
   */
  buscarPorNombre(nombre: string): T[];

  /**
   * Busca emisiones por año exacto.
   * @param anio - Año a buscar.
   * @returns Lista de emisiones encontradas.
   */
  buscarPorAnio(anio: number): T[];
}
