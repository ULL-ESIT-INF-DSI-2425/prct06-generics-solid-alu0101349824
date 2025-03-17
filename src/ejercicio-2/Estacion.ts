import { Observador } from "./Observador";

/**
 * Interfaz `Observable` que deben implementar las clases que se comporten como “estaciones” (o sujetos) en el patrón `Observer`.
 * Las estaciones son las fuentes de eventos, y notifican a los observadores cuando ocurren cambios.
 * @returns void
 */
export interface Estacion {
  /**
   * Suscribe un nuevo observador, para que reciba notificaciones de eventos.
   * @param observador - Objeto que implementa la interfaz Observador.
   * @returns void
   */
  suscribir(observador: Observador): void;

  /**
   * Desuscribe un observador, dejando de recibir notificaciones.
   * @param observador - Objeto Observador que se desea eliminar de la lista de suscriptores.
   * @returns void
   */
  desuscribir(observador: Observador): void;

  /**
   * Notifica a todos los observadores suscritos sobre un cambio o evento.
   * @returns void
   */
  notificar(): void;
}
