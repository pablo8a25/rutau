// Horarios de salida de cada bus (formato 24 h), tomados de la publicación de @eiabienestar
// del 26 de octubre de 2026 (semana del 26 al 31 de octubre). Para actualizarlos basta con
// cambiar estas horas cada semana.
//
// Cómo se leen los nombres del horario de la EIA:
//   "Palace"         → Clínica Las Américas – Palacé (americas)
//   "Bosque Zúñiga"  → Sofasa – Aguacatala – Bosques de Zúñiga (sofasa)
//   "Mayorca – Bosques de Zúñiga" → ruta unificada (unificada)
//
// Cada sentido tiene horarios por día: "semana" (lunes a jueves, o lunes a viernes si no hay
// "viernes"), "viernes", "sabado" y "domingo". Si un día no aparece, ese día no hay buses.
window.HORARIOS = {
  semana: "Horario de ejemplo: semana del 26 al 31 de octubre de 2026",
  recogida: {            // de la parada inicial hacia la sede Las Palmas
    semana: {            // lunes a viernes
      mayorca:    ["04:55", "06:10", "06:30", "08:30"],
      sofasa:     ["04:55", "06:10", "06:30", "08:30"],
      americas:   ["04:55", "06:20", "06:30", "08:45", "09:00", "12:40"],
      sanantonio: ["06:30"],
      rionegro:   ["05:00", "06:20", "08:00", "10:45"],
      robledo:    ["04:45", "06:20"],
      unificada:  ["12:30"]
    },
    sabado: {
      americas:   ["06:45"],
      rionegro:   ["07:00"],
      unificada:  ["06:45"]
    }
  },
  salida: {              // de la sede Las Palmas de vuelta por la misma ruta
    semana: {            // lunes a jueves
      mayorca:    ["16:10", "17:05", "18:10"],
      sofasa:     ["16:10", "18:10"],
      americas:   ["10:10", "12:10", "14:10", "16:10", "17:05", "18:10", "20:00"],
      sanantonio: ["17:05"],
      rionegro:   ["14:10", "17:05", "18:10", "20:00"],
      unificada:  ["10:10", "12:10", "14:10", "20:00"]
    },
    viernes: {
      mayorca:    ["12:10", "14:10", "16:10"],
      sofasa:     ["12:10", "14:10", "16:10"],
      americas:   ["10:10", "12:10", "14:10", "16:10", "18:10"],
      sanantonio: ["14:10"],
      rionegro:   ["14:10", "16:10", "18:10"],
      unificada:  ["10:10", "18:10"]
    },
    sabado: {
      americas:   ["12:15"],
      rionegro:   ["12:15"],
      unificada:  ["12:15"]
    }
  }
};
