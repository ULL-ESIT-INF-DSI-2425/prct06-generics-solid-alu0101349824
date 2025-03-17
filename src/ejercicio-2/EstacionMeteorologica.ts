import { Estacion } from "./Estacion";
import { Observador } from "./Observador";
import { TipoEventoMeteorologico } from "./TipoEventoMeteorologico";

/**
 * Clase que representa una estación meteorológica (sujeto observable).
 * Notifica a los observadores suscritos cuando se produce un evento meteorológico.
 * Implementa la interfaz `Estacion`.
 * @returns TipoEventoMeteorologico - Tipo de evento meteorológico actual.
 */
export class EstacionMeteorologica implements Estacion {
  private observadores: Observador[] = [];
  private tipoEvento: TipoEventoMeteorologico =
    TipoEventoMeteorologico.SIN_EVENTO;

  /**
   * Suscribe un nuevo observador, agregándolo a la lista.
   * @param observador - Objeto que implementa Observador.
   * @returns void
   */
  public suscribir(observador: Observador): void {
    this.observadores[this.observadores.length] = observador;
  }

  /**
   * Desuscribe un observador, eliminándolo de la lista.
   * @param observador - Observador a eliminar.
   * @returns undefined si no se encontró el observador.
   */
  public desuscribir(observador: Observador): void {
    const nuevaLista: Observador[] = [];
    let encontrado = false;

    this.observadores.forEach((obs) => {
      if (obs === observador) {
        encontrado = true;
      } else {
        nuevaLista[nuevaLista.length] = obs;
      }
    });

    if (!encontrado) {
      return undefined;
    }

    this.observadores = nuevaLista;
  }

  /**
   * Notifica a todos los observadores suscritos, invocando su método actualizar().
   * Se envía la propia instancia de la estación como argumento.
   * @returns void
   */
  public notificar(): void {
    this.observadores.forEach((obs) => {
      obs.actualizar(this);
    });
  }

  /**
   * Simula un cambio de temperatura que activa el evento y notifica.
   * @returns void
   */
  public cambioDeTemperatura(): void {
    this.tipoEvento = TipoEventoMeteorologico.CAMBIO_TEMPERATURA;
    this.notificar();
  }

  /**
   * Simula la detección de una tormenta y notifica.
   * @returns void
   */
  public apareceTormenta(): void {
    this.tipoEvento = TipoEventoMeteorologico.TORMENTA;
    this.notificar();
  }

  /**
   * Devuelve el tipo de evento meteorológico actual de la estación.
   * @returns TipoEventoMeteorologico - Tipo de evento meteorológico actual.
   */
  public obtenerTipoEvento(): TipoEventoMeteorologico {
    return this.tipoEvento;
  }
}
