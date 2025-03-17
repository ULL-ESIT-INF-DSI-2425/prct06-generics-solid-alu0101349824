import { Observador } from "./Observador";
import { Estacion } from "./Estacion";
import { EstacionMeteorologica } from "./EstacionMeteorologica";
import { TipoEventoMeteorologico } from "./TipoEventoMeteorologico";

/**
 * Clase que representa un teléfono móvil que recibe notificaciones de la estación meteorológica.
 * Implementa la interfaz `Observador`.
 * @returns TipoEventoMeteorologico | undefined - Último evento meteorológico detectado.
 */
export class TelefonoMovil implements Observador {
  private ultimoEvento: TipoEventoMeteorologico | undefined = undefined;

  public actualizar(estacion: Estacion): void {
    if (estacion instanceof EstacionMeteorologica) {
      this.ultimoEvento = estacion.obtenerTipoEvento();
    }
  }

  /**
   * Devuelve el último evento meteorológico detectado por el teléfono.
   * @returns TipoEventoMeteorologico | undefined - Último evento meteorológico detectado.
   */
  public obtenerUltimoEvento(): TipoEventoMeteorologico | undefined {
    return this.ultimoEvento;
  }
}
