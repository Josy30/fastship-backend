
// Cargar variables de entorno
require('dotenv').config();

// Importar Express y la conexión a MongoDB
const express = require('express');
const conectarDB = require('./config/db');

// Importar las rutas de envíos
const enviosRoutes = require('./routes/envios');

// Crear aplicación Express
const app = express();

// Middleware para recibir datos JSON
app.use(express.json());
// Registrar las rutas de envíos
app.use('/api/envios', enviosRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de FastShip',
        estado: 'Servidor funcionando correctamente'
    });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor después de conectar MongoDB
const iniciarServidor = async () => {
    try {
        await conectarDB();

        app.listen(PORT, () => {
            console.log(`Servidor FastShip ejecutándose en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error.message);
        process.exit(1);
    }
};

iniciarServidor();
