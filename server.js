
require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const enviosRoutes = require('./routes/envios');
const app = express();

app.use(express.json());
app.use('/api/envios', enviosRoutes);
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de FastShip',
        estado: 'Servidor funcionando correctamente'
    });
});


const PORT = process.env.PORT || 3000;

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
