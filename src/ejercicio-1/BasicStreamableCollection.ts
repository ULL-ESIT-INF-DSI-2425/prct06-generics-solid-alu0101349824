/**
 * @module Ejericio1
 */

import { Streamable } from "./Streamable";

/**
 * @remarks
 * # BasicStreamableCollection
 * Clase abstracta que implementa la interfaz genérica `Streamable<T>`.
 * Sirve de base para colecciones específicas de emisiones (series, películas, etc.).
 * @param T - Tipo de dato de las emisiones.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Lista de emisiones almacenadas en la colección.
   */
  protected emisiones: T[] = [];

  /**
   * Devuelve todas las emisiones almacenadas.
   * @returns Lista de emisiones almacenadas.
   */
  public obtenerEmisiones(): T[] {
    return this.emisiones;
  }

  /**
   * Añade una nueva emisión.
   * @param emision - Emisión a añadir.
   * @returns void
   */
  public anadirEmision(emision: T): void {
    this.emisiones.push(emision);
  }

  /**
   * Busca emisiones por nombre exacto.
   * @param nombre - Nombre a buscar.
   * @returns Lista de emisiones encontradas.
   */
  public buscarPorNombre(nombre: string): T[] {
    const resultados: T[] = [];
    this.emisiones.forEach((emision) => {
      if (this.cumpleCriterioNombre(emision, nombre)) {
        resultados.push(emision);
      }
    });
    return resultados;
  }

  /**
   * Busca emisiones por año exacto.
   * @param anio - Año a buscar.
   * @returns Lista de emisiones encontradas.
   */
  public buscarPorAnio(anio: number): T[] {
    const resultados: T[] = [];
    this.emisiones.forEach((emision) => {
      if (this.cumpleCriterioAnio(emision, anio)) {
        resultados.push(emision);
      }
    });
    return resultados;
  }

  /**
   * Método abstracto que debe ser implementado por las clases hijas.
   * Determina si una emisión cumple el criterio de nombre.
   * @param emision - Emisión a evaluar.
   * @param nombre - Nombre a buscar.
   * @returns true si la emisión cumple el criterio, false en caso contrario.
   */
  protected abstract cumpleCriterioNombre(emision: T, nombre: string): boolean;

  /**
   * Método abstracto que debe ser implementado por las clases hijas.
   * Determina si una emisión cumple el criterio de año.
   * @param emision - Emisión a evaluar.
   * @param anio - Año a buscar.
   * @returns true si la emisión cumple el criterio, false en caso contrario.
   */
  protected abstract cumpleCriterioAnio(emision: T, anio: number): boolean;
}
