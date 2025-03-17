import { Observador } from "./Observador";
import { Estacion } from "./Estacion";
import { EstacionMeteorologica } from "./EstacionMeteorologica";
import { TipoEventoMeteorologico } from "./TipoEventoMeteorologico";

/**
 * Clase que representa un panel que muestra información meteorológica.
 * Implementa la interfaz `Observador`.
 * @returns TipoEventoMeteorologico[] - Historial de eventos meteorológicos.
 */
export class Panel implements Observador {
  private historialEventos: TipoEventoMeteorologico[] = [];

  public actualizar(estacion: Estacion): void {
    if (estacion instanceof EstacionMeteorologica) {
      // Cada vez que se recibe un evento, se añade al historial.
      this.historialEventos[this.historialEventos.length] =
        estacion.obtenerTipoEvento();
    }
  }

  /**
   * Devuelve el historial de eventos recibidos por el panel.
   * @returns TipoEventoMeteorologico[] - Historial de eventos meteorológicos.
   */
  public obtenerHistorialEventos(): TipoEventoMeteorologico[] {
    return this.historialEventos;
  }
}
