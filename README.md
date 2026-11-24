# RutaU – Buses EIA

App web para saber **por dónde va el bus de tu ruta** de la Universidad EIA, **cuánto le falta para llegar a tu parada** y **si ya pasó**.

> Proyecto independiente de demostración. No es una app oficial de la Universidad EIA.

## Qué hace

- Las 7 rutas de la EIA (Mayorca, Sofasa – Aguacatala – Bosques de Zúñiga, Clínica Las Américas – Palacé, San Antonio – Loreto, Rionegro, Éxito de Robledo y Mayorca – Bosques de Zúñiga Unificada), trazadas sobre las calles reales a partir de los mapas que publica la universidad.
- Recogida (hacia la U) y salida (desde la U).
- Hora actual y hora de salida de cada bus, según el horario de la semana.
- Distancia del bus a tu parada (medida por la ruta, no en línea recta), tiempo estimado y hora aproximada de llegada.
- Aviso de "el bus ya pasó por tu parada".
- Notificación cuando el bus está a 5 minutos.
- Guarda tu ruta y tu parada en el celular.
- Enlaces a Google Maps (tiempo con tráfico real) y Waze.
- Se puede instalar como app en el celular.

## Cómo está hecha

- HTML, CSS y JavaScript, sin frameworks.
- Mapa con [Leaflet](https://leafletjs.com) y OpenStreetMap.
- Diseño inspirado en el sistema de diseño de Vercel (Geist, monocromático).
- Hecha trabajando con IA (Claude).

## Archivos

| Archivo | Qué tiene |
|---|---|
| `index.html` | La app completa |
| `rutas.js` | Recorrido de cada ruta |
| `horarios.js` | Horarios de salida. **Se actualiza cada semana.** |
| `sw.js`, `manifest.webmanifest` | Para instalarla como app |

## Estado actual

Es una **demostración**: la posición del bus se calcula con la hora de salida y una velocidad promedio, y hay un modo de simulación. Para usarla con buses reales falta:

1. Una página para el conductor que envíe la ubicación GPS del celular.
2. Un servidor (por ejemplo Firebase) que reciba esa ubicación y la comparta con los estudiantes.
3. Autorización de la universidad y de la empresa de transporte.

Hecho por Pablo Ortiz Ochoa.
