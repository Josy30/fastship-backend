# FastShip Backend

## 1. Descripción del proyecto

Este proyecto consiste en crear un backend para FastShip, una empresa de envíos.

El sistema permite registrar envíos, consultar la información, modificar los datos, cambiar el estado de un envío y eliminarlo.

Para desarrollar este proyecto se utilizaron Node.js, Express y MongoDB.

## 2. Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- Nodemon
- Postman

## 3. Estructura del proyecto

El proyecto está organizado en las siguientes carpetas y archivos:

```text
fastship-backend/
├── config/
│   └── db.js
├── controllers/
│   └── envioController.js
├── models/
│   └── Envio.js
├── routes/
│   └── envios.js
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

## 4. Instalación del proyecto

Primero, se debe descargar el proyecto desde GitHub:

```bash
git clone https://github.com/Josy30/fastship-backend.git
```

Luego, ingresar a la carpeta:

```bash
cd fastship-backend
```

Instalar las dependencias:

```bash
npm install
```

## 5. Configuración de MongoDB

Para que el proyecto funcione, MongoDB debe estar instalado y ejecutándose.

También se debe crear un archivo llamado `.env` en la carpeta principal del proyecto con los siguientes datos:

```env
MONGO_URI=mongodb://127.0.0.1:27017/fastship
PORT=3000
```

## 6. Cómo ejecutar el proyecto

Para iniciar el servidor en modo desarrollo, ejecutar:

```bash
npm run dev
```

Si todo funciona correctamente, aparecerá un mensaje indicando que MongoDB se conectó y que el servidor está funcionando.

La dirección del servidor es:

```text
http://localhost:3000
```

## 7. Funciones del sistema

El backend permite realizar las siguientes operaciones:

- Registrar nuevos envíos.
- Mostrar todos los envíos registrados.
- Buscar un envío por su ID.
- Actualizar la información de un envío.
- Cambiar el estado de un envío.
- Eliminar un envío.
- Mostrar solamente los envíos que todavía están pendientes o en tránsito.

## 8. Datos de los envíos

Cada envío tiene los siguientes datos:

| Campo | Descripción |
|---|---|
| numeroPedido | Número del pedido |
| destinatario | Nombre de la persona que recibe el envío |
| direccion | Dirección donde se entregará el pedido |
| estado | Estado actual del envío |

Los estados que se pueden utilizar son:

- pendiente
- en tránsito
- entregado

Cuando se registra un nuevo envío, su estado inicial es `pendiente`.

## 9. Rutas de la API

Las rutas utilizadas para trabajar con los envíos son:

| Método | Ruta | Función |
|---|---|---|
| POST | `/api/envios` | Registrar un envío |
| GET | `/api/envios` | Mostrar todos los envíos |
| GET | `/api/envios/activos` | Mostrar envíos activos |
| GET | `/api/envios/:id` | Buscar un envío por ID |
| PUT | `/api/envios/:id` | Actualizar un envío |
| PATCH | `/api/envios/:id/estado` | Cambiar el estado |
| DELETE | `/api/envios/:id` | Eliminar un envío |

## 10. Pruebas realizadas

Se utilizó Postman para probar las diferentes rutas del sistema.

Se realizaron pruebas para registrar, consultar, actualizar y eliminar envíos. También se probaron algunos casos de error, como registrar un envío sin completar los campos obligatorios, utilizar un estado incorrecto o repetir un número de pedido.

## 11. Autor

Proyecto realizado para el laboratorio8 de base de datos avanzados con desarrollo de backend en Express y MongoDB.