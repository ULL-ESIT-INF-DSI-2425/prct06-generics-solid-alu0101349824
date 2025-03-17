import { Estacion } from "./Estacion";

/**
 * @module ejercicio-2
 */

/**
 * Interfaz `Observador` que representa un observador en el patrón de diseño `Observer`.
 * Los observadores implementan esta interfaz para recibir notificaciones de eventos meteorológicos.
 * Solo requiere el método `actualizar`, que cada implementador adapta a su propia lógica.
 */
export interface Observador {
  /**
   * Recibe la notificación de un evento meteorológico.
   * @param estacion - Estación o sujeto fuente del evento.
   * @returns void
   */
  actualizar(estacion: Estacion): void;
}
