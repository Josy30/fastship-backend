const Envio = require('../models/Envio');

// POST: Crear un nuevo envío
const crearEnvio = async (req, res) => {
    try {
        const nuevoEnvio = new Envio(req.body);
        const envioGuardado = await nuevoEnvio.save();

        res.status(201).json({
            mensaje: 'Envío creado correctamente',
            envio: envioGuardado
        });

    } catch (error) {

    // Verificar si el número de pedido ya existe
    if (error.code === 11000) {
        return res.status(409).json({
            mensaje: 'El número de pedido ya existe'
        });
    }

    res.status(400).json({
        mensaje: 'Error al crear el envío',
        error: error.message
    });
}
};

// GET: Listar todos los envíos
const listarEnvios = async (req, res) => {
    try {
        const envios = await Envio.find();

        res.status(200).json({
            total: envios.length,
            envios
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar los envíos',
            error: error.message
        });
    }
};




// GET: Buscar un envío por su ID
const obtenerEnvioPorId = async (req, res) => {
    try {
        const envio = await Envio.findById(req.params.id);

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Envío encontrado correctamente',
            envio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'ID de envío inválido',
            error: error.message
        });
    }
};




 // PUT: Actualizar un envío completo
const actualizarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Envío actualizado correctamente',
            envio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el envío',
            error: error.message
        });
    }
};





// PATCH: Cambiar únicamente el estado del envío
const cambiarEstadoEnvio = async (req, res) => {
    try {
        const { estado } = req.body;

        const estadosValidos = [
            'pendiente',
            'en tránsito',
            'entregado'
        ];

        if (!estado || !estadosValidos.includes(estado)) {
            return res.status(400).json({
                mensaje: 'Estado inválido',
                estadosPermitidos: estadosValidos
            });
        }

        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            { estado },
            {
                new: true,
                runValidators: true
            }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Estado actualizado correctamente',
            envio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al cambiar el estado',
            error: error.message
        });
    }
};




 // DELETE: Eliminar un envío
const eliminarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndDelete(req.params.id);

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Envío eliminado correctamente',
            envio
        });

    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar el envío',
            error: error.message
        });
    }
};




 // GET: Listar envíos activos
const listarEnviosActivos = async (req, res) => {
    try {
        const envios = await Envio.find({
            estado: { $in: ['pendiente', 'en tránsito'] }
        });

        res.status(200).json({
            total: envios.length,
            envios
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar los envíos activos',
            error: error.message
        });
    }
};





// Exportar funciones
module.exports = {
    crearEnvio,
    listarEnvios,
    obtenerEnvioPorId,
    actualizarEnvio,
    cambiarEstadoEnvio,
    eliminarEnvio,
    listarEnviosActivos
};


