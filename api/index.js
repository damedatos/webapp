const express = require('express');
const app = express();
const port = 3001;

const materias = [
  { id: 1, nombre: 'Intro. Bases de Datos', cht: 64 },
  { id: 2, nombre: 'Aprendizaje Automático', cht: 64 },
  { id: 3, nombre: 'Organización del Computador I', cht: 96 },
  { id: 4, nombre: 'Lógica y Computabilidad', cht: 112 }
]

app.get('/api/materias/buscar', (req, res) => {
  const busqueda = req.query.q;
  res.json(materias.filter(materia => materia.nombre.toLowerCase().includes(busqueda.toLowerCase())));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
