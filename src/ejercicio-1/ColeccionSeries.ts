import { Emision } from "./Emision";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * @remarks
 * # ColeccionSeries
 * Subclase que modela una colección de series y añade métodos específicos para buscar y filtrar series.
 * Esta clase hereda de `BasicStreamableCollection<Emision>`.
 * @param Emision - Tipo de dato de las emisiones.
 * @returns void
 */
export class ColeccionSeries extends BasicStreamableCollection<Emision> {
  /**
   * Comprueba si una emisión cumple con el criterio de búsqueda por nombre.
   * @param emision - Emisión a evaluar.
   * @param nombre - Nombre a buscar.
   * @returns boolean - Devuelve `true` si la emisión cumple el criterio de búsqueda por nombre, `false` en caso contrario.
   */
  protected cumpleCriterioNombre(emision: Emision, nombre: string): boolean {
    return emision.nombre === nombre;
  }

  /**
   * Comprueba si una emisión cumple con el criterio de búsqueda por año.
   * @param emision - Emisión a evaluar.
   * @param anio - Año a buscar.
   * @returns boolean - Devuelve `true` si la emisión cumple el criterio de búsqueda por año, `false` en caso contrario.
   */
  protected cumpleCriterioAnio(emision: Emision, anio: number): boolean {
    return emision.anio === anio;
  }
}
