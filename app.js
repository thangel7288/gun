const express = require('express');
const app = express();
const port = 3000; // Puedes elegir otro puerto si lo prefieres

// Middleware para analizar el cuerpo de las peticiones JSON
app.use(express.json());

// Ruta para la página principal (solo para probar que el servidor funciona)
app.get('/', (req, res) => {
  res.send('¡Backend de tu aplicación de podcasts está funcionando!');
});

// Ruta para el inicio de sesión
app.post('/api/login', (req, res) => {
  // Aquí recibirás los datos del formulario de inicio de sesión (en req.body)
  // En el futuro, aquí iría la lógica para verificar las credenciales
  console.log('Intento de inicio de sesión:', req.body);
  res.json({ message: 'Inicio de sesión exitoso (simulado)' });
});

// Ruta para el registro
app.post('/api/register', (req, res) => {
  // Aquí recibirás los datos del formulario de registro (en req.body)
  // En el futuro, aquí iría la lógica para crear un nuevo usuario en la base de datos
  console.log('Intento de registro:', req.body);
  res.json({ message: 'Registro exitoso (simulado)' });
});

// Inicia el servidor y haz que escuche en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});