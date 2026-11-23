
const mongoose = require('mongoose');

// Definir la estructura de un envío
const envioSchema = new mongoose.Schema({

    numeroPedido: {
        type: String,
        required: [true, 'El número de pedido es obligatorio'],
        unique: true,
        trim: true
    },

    remitente: {
        type: String,
        required: [true, 'El remitente es obligatorio'],
        trim: true
    },

    destinatario: {
        type: String,
        required: [true, 'El destinatario es obligatorio'],
        trim: true
    },

    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        trim: true
    },

    estado: {
        type: String,
        enum: ['pendiente', 'en tránsito', 'entregado'],
        default: 'pendiente'
    }

}, {
    timestamps: true
});

// Crear y exportar el modelo
const Envio = mongoose.model('Envio', envioSchema);

module.exports = Envio;
