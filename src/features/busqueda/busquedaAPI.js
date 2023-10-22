// simula una request de materias
const MATERIAS = [
  { id: 1, nombre: 'Intro. Bases de Datos', cht: 64 },
  { id: 2, nombre: 'Aprendizaje Automático', cht: 64 },
  { id: 3, nombre: 'Organización del Computador I', cht: 96 },
  { id: 4, nombre: 'Lógica y Computabilidad', cht: 112 }
]

export default function fetchMaterias() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(MATERIAS), 500)
  );
}
