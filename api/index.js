const express = require('express');
const app = express();
const port = 3001;

const materias = require('./materias.json')

app.get('/api/materias/buscar', (req, res) => {
  const busqueda = req.query.q;
  res.json(materias.filter(materia => materia.nombre.toLowerCase().includes(busqueda.toLowerCase())));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
