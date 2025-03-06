import { describe, test, expect } from "vitest";
import { ColeccionSeries } from "../../src/ejercicio-1/ColeccionSeries";
import { ColeccionPeliculas } from "../../src/ejercicio-1/ColeccionPeliculas";
import { ColeccionDocumentales } from "../../src/ejercicio-1/ColeccionDocumentales";

describe("ColeccionSeries", () => {
  test("obtenerEmisiones() debe devolver todas las series", () => {
    const series = new ColeccionSeries();
    series.anadirEmision({ nombre: "Serie1", anio: 2000 });
    series.anadirEmision({ nombre: "Serie2", anio: 2001 });
    const todas = series.obtenerEmisiones();
    expect(todas.length).toBe(2);
    expect(todas[0].nombre).toBe("Serie1");
    expect(todas[1].anio).toBe(2001);
  });

  test("buscarPorNombre() debe cubrir coincidencias y no coincidencias", () => {
    const series = new ColeccionSeries();
    series.anadirEmision({ nombre: "Serie1", anio: 2020 });
    series.anadirEmision({ nombre: "OtraSerie", anio: 2021 });

    // Caso verdadero (coincide)
    const resultado1 = series.buscarPorNombre("Serie1");
    expect(resultado1.length).toBe(1);

    // Caso falso (no coincide)
    const resultadoInexistente = series.buscarPorNombre("Inexistente");
    expect(resultadoInexistente.length).toBe(0);
  });

  test("buscarPorAnio() debe cubrir coincidencias y no coincidencias", () => {
    const series = new ColeccionSeries();
    series.anadirEmision({ nombre: "Serie1", anio: 2020 });

    // Caso verdadero (coincide)
    const resultado2020 = series.buscarPorAnio(2020);
    expect(resultado2020.length).toBe(1);

    // Caso falso (no coincide)
    const resultado2050 = series.buscarPorAnio(2050);
    expect(resultado2050.length).toBe(0);
  });
});

describe("ColeccionPeliculas", () => {
  test("obtenerEmisiones() debe devolver todas las películas", () => {
    const peliculas = new ColeccionPeliculas();
    peliculas.anadirEmision({ nombre: "Pelicula1", anio: 2005 });
    peliculas.anadirEmision({ nombre: "Pelicula2", anio: 2010 });
    const todas = peliculas.obtenerEmisiones();
    expect(todas.length).toBe(2);
    expect(todas[0].nombre).toBe("Pelicula1");
    expect(todas[1].anio).toBe(2010);
  });

  test("buscarPorNombre() debe cubrir coincidencias y no coincidencias", () => {
    const peliculas = new ColeccionPeliculas();
    peliculas.anadirEmision({ nombre: "Pelicula1", anio: 2021 });
    peliculas.anadirEmision({ nombre: "OtraPelicula", anio: 2022 });

    // Caso verdadero (coincide)
    const resultado1 = peliculas.buscarPorNombre("Pelicula1");
    expect(resultado1.length).toBe(1);

    // Caso falso (no coincide)
    const resultadoInexistente = peliculas.buscarPorNombre("Inexistente");
    expect(resultadoInexistente.length).toBe(0);
  });

  test("buscarPorAnio() debe cubrir coincidencias y no coincidencias", () => {
    const peliculas = new ColeccionPeliculas();
    peliculas.anadirEmision({ nombre: "Pelicula1", anio: 2021 });

    // Caso verdadero (coincide)
    const resultado2021 = peliculas.buscarPorAnio(2021);
    expect(resultado2021.length).toBe(1);

    // Caso falso (no coincide)
    const resultado2050 = peliculas.buscarPorAnio(2050);
    expect(resultado2050.length).toBe(0);
  });
});

describe("ColeccionDocumentales", () => {
  test("obtenerEmisiones() debe devolver todos los documentales", () => {
    const documentales = new ColeccionDocumentales();
    documentales.anadirEmision({ nombre: "Doc1", anio: 2018 });
    documentales.anadirEmision({ nombre: "Doc2", anio: 2020 });
    const todos = documentales.obtenerEmisiones();
    expect(todos.length).toBe(2);
    expect(todos[0].nombre).toBe("Doc1");
    expect(todos[1].anio).toBe(2020);
  });

  test("buscarPorNombre() debe cubrir coincidencias y no coincidencias", () => {
    const documentales = new ColeccionDocumentales();
    documentales.anadirEmision({ nombre: "Doc1", anio: 2018 });
    documentales.anadirEmision({ nombre: "Doc2", anio: 2020 });

    // Caso verdadero (coincide)
    const resultado1 = documentales.buscarPorNombre("Doc1");
    expect(resultado1.length).toBe(1);

    // Caso falso (no coincide)
    const resultadoInexistente = documentales.buscarPorNombre("OtroDoc");
    expect(resultadoInexistente.length).toBe(0);
  });

  test("buscarPorAnio() debe cubrir coincidencias y no coincidencias", () => {
    const documentales = new ColeccionDocumentales();
    documentales.anadirEmision({ nombre: "Doc1", anio: 2018 });

    // Caso verdadero (coincide)
    const resultado2018 = documentales.buscarPorAnio(2018);
    expect(resultado2018.length).toBe(1);

    // Caso falso (no coincide)
    const resultado9999 = documentales.buscarPorAnio(9999);
    expect(resultado9999.length).toBe(0);
  });
});
