import { describe, expect, test } from "vitest";
import {
  TelefonoMovil,
  EstacionMeteorologica,
  TipoEventoMeteorologico,
  Estacion,
} from "../../src/ejercicio-2/index";

describe("TelefonoMovil", () => {
  test("Debería actualizar el último evento al recibir una notificación de EstacionMeteorologica", () => {
    const estacion = new EstacionMeteorologica();
    const movil = new TelefonoMovil();

    // Simular un cambio de temperatura en la estación
    estacion.cambioDeTemperatura();
    // Actualizar el móvil como si hubiera sido notificado
    movil.actualizar(estacion);

    expect(movil.obtenerUltimoEvento()).toBe(
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
    );

    // Simular la aparición de una tormenta
    estacion.apareceTormenta();
    movil.actualizar(estacion);

    expect(movil.obtenerUltimoEvento()).toBe(TipoEventoMeteorologico.TORMENTA);
  });

  test("No debería actualizar el último evento si el objeto que recibe no es instancia de EstacionMeteorologica", () => {
    const movil = new TelefonoMovil();
    // Se crea un objeto que implementa Estacion pero NO es un EstacionMeteorologica real
    const estacionFalsa: Estacion = {
      suscribir: () => {},
      desuscribir: () => {},
      notificar: () => {},
    };

    movil.actualizar(estacionFalsa);
    // Al no ser instancia de EstacionMeteorologica, no se cambia el último evento
    expect(movil.obtenerUltimoEvento()).toBeUndefined();
  });
});
