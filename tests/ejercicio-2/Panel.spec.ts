import { describe, expect, test } from "vitest";
import {
  Panel,
  EstacionMeteorologica,
  TipoEventoMeteorologico,
  Estacion,
} from "../../src/ejercicio-2/index";

describe("Panel", () => {
  test("Debería añadir eventos al historial cuando se notifica desde EstacionMeteorologica", () => {
    const estacion = new EstacionMeteorologica();
    const panel = new Panel();

    // Provoca un cambio de temperatura y actualiza el panel
    estacion.cambioDeTemperatura();
    panel.actualizar(estacion);
    expect(panel.obtenerHistorialEventos()).toStrictEqual([
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
    ]);

    // Provoca la aparición de una tormenta y actualiza el panel
    estacion.apareceTormenta();
    panel.actualizar(estacion);
    expect(panel.obtenerHistorialEventos()).toStrictEqual([
      TipoEventoMeteorologico.CAMBIO_TEMPERATURA,
      TipoEventoMeteorologico.TORMENTA,
    ]);
  });

  test("No debería añadir eventos si el objeto notificado no es una instancia de EstacionMeteorologica", () => {
    const panel = new Panel();

    // Se crea un objeto que cumple la interfaz Estacion pero no es realmente EstacionMeteorologica
    const estacionFalsa: Estacion = {
      suscribir: () => {},
      desuscribir: () => {},
      notificar: () => {},
    };

    panel.actualizar(estacionFalsa);
    // Como no es una EstacionMeteorologica, el historial debe permanecer vacío
    expect(panel.obtenerHistorialEventos()).toStrictEqual([]);
  });
});
