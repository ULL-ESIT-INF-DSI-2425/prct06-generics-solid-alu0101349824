import { describe, expect, test } from "vitest";
import {
  Observador,
  EstacionMeteorologica,
  TipoEventoMeteorologico,
  Estacion,
} from "../../src/ejercicio-2/index";

/**
 * Observador falso para testear EstacionMeteorologica
 */
class ObservadorFalso implements Observador {
  private eventosRecibidos: TipoEventoMeteorologico[] = [];
  public actualizar(estacion: Estacion): void {
    // Se verifica que sea un objeto EstacionMeteorologica para extraer el tipo de evento
    if (estacion instanceof EstacionMeteorologica) {
      this.eventosRecibidos[this.eventosRecibidos.length] =
        estacion.obtenerTipoEvento();
    }
  }

  public obtenerEventos(): TipoEventoMeteorologico[] {
    return this.eventosRecibidos;
  }
}

describe("EstacionMeteorologica", () => {
  test("Debería suscribir y notificar a un observador al cambiar la temperatura", () => {
    const estacion = new EstacionMeteorologica();
    const obsFalso = new ObservadorFalso();

    // Suscribir
    estacion.suscribir(obsFalso);

    // Se produce un cambio de temperatura
    estacion.cambioDeTemperatura();

    // El observador falso debería haber recibido un único evento: CAMBIO_TEMPERATURA
    expect(obsFalso.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
    ]);
  });

  test("Debería notificar todos los observadores, registrando múltiples eventos", () => {
    const estacion = new EstacionMeteorologica();
    const obs1 = new ObservadorFalso();
    const obs2 = new ObservadorFalso();

    // Suscribir dos observadores
    estacion.suscribir(obs1);
    estacion.suscribir(obs2);

    // Aparece tormenta (se notifica a ambos)
    estacion.apareceTormenta();
    // Cambio de temperatura (se notifica a ambos)
    estacion.cambioDeTemperatura();

    // Cada observador debería haber recibido ambos eventos en orden
    expect(obs1.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.TORMENTA,
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
    ]);
    expect(obs2.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.TORMENTA,
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
    ]);
  });

  test("Debería desuscribir correctamente a un observador", () => {
    const estacion = new EstacionMeteorologica();
    const obs1 = new ObservadorFalso();
    const obs2 = new ObservadorFalso();

    estacion.suscribir(obs1);
    estacion.suscribir(obs2);

    // Se notifica un primer evento a ambos
    estacion.apareceTormenta();
    expect(obs1.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.TORMENTA,
    ]);
    expect(obs2.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.TORMENTA,
    ]);

    // Desuscribimos obs1 y producimos un nuevo evento
    estacion.desuscribir(obs1);
    estacion.cambioDeTemperatura();

    // obs1 no debería recibir el segundo evento
    expect(obs1.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.TORMENTA,
    ]);

    // obs2 sí debería recibirlo
    expect(obs2.obtenerEventos()).toStrictEqual([
      TipoEventoMeteorologico.TORMENTA,
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
    ]);
  });

  test("Debería devolver undefined al desuscribir un observador no suscrito", () => {
    const estacion = new EstacionMeteorologica();
    const obsFalso = new ObservadorFalso();

    // Nunca se suscribe obsFalso, así que la estación no lo tiene en la lista
    // Desuscribimos directamente
    const resultado = estacion.desuscribir(obsFalso);

    // Según la implementación, si el observador no está, retorna undefined
    expect(resultado).toBeUndefined();
  });
});
