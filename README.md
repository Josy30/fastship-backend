FastShip Backend

1. Descripción del proyecto

En este proyecto se desarrolló un backend para FastShip, una empresa que se dedica al envío de paquetes.
El objetivo es tener un sistema que permita guardar y administrar la información de los envíos. Por ejemplo, registrar un nuevo pedido, consultar sus datos, actualizar su información, cambiar su estado y eliminarlo.
Para realizar este proyecto se utilizaron Node.js, Express y MongoDB.

2. Tecnologías utilizadas

Las herramientas que se utilizaron para desarrollar el proyecto fueron:
Node.js
Express
MongoDB
Mongoose
dotenv
Nodemon
Postman

3. Estructura del proyecto

El proyecto está organizado en diferentes carpetas para que el código sea más facil de entender y mantener.

fastship-backend/
├── config/
│   └── db.js
├── controllers/
│   └── envioController.js
├── evidencias/
├── models/
│   └── Envio.js
├── routes/
│   └── envios.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

4. Instalación del proyecto

Primero, se debe descargar el proyecto desde GitHub:
git clone https://github.com/Josy30/fastship-backend.git
Luego, ingresar a la carpeta del proyecto:
cd fastship-backend
Después, instalar las dependencias:
npm install

5. Configuración de MongoDB

Para que el proyecto funcione, es necesario tener MongoDB instalado y ejecutándose.
También se debe crear un archivo llamado .env en la carpeta principal del proyecto con la siguiente configuración:
MONGO_URI=mongodb://127.0.0.1:27017/fastship
PORT=3000
Este archivo permite configurar la conexión con la base de datos y el puerto del servidor.

6. Cómo ejecutar el proyecto

Para iniciar el servidor en modo desarrollo, ejecutar el siguiente comando:
npm run dev
Si todo funciona correctamente, aparecerán mensajes indicando que MongoDB se conectó y que el servidor está funcionando.
La dirección del servidor es:
http://localhost:3000

7. Funciones del sistema

El sistema permite realizar las siguientes operaciones:
Registrar nuevos envíos.
Mostrar todos los envíos registrados.
Buscar un envío por su ID.
Consultar los envíos que todavía están pendientes o en tránsito.
Actualizar la información de un envío.
Cambiar el estado de un envío.
Eliminar un envío.

8. Datos de los envíos

Cada envío guarda los siguientes datos:
Campo
Descripción
numeroPedido
Número que identifica el pedido
remitente
Nombre de la persona que envía el paquete
destinatario
Nombre de la persona que recibe el paquete
direccion
Dirección donde se entregará el paquete
estado
Estado actual del envío
Los estados permitidos son:
pendiente
en tránsito
entregado
Cuando se registra un nuevo envío, su estado comienza automáticamente como pendiente.

9. Rutas de la API

Las rutas que se utilizaron para trabajar con los envíos son:
Método
Ruta
Función
POST
/api/envios
Registrar un envío
GET
/api/envios
Mostrar todos los envíos
GET
/api/envios/activos
Mostrar los envíos activos
GET
/api/envios/:id
Buscar un envío por ID
PUT
/api/envios/:id
Actualizar un envío
PATCH
/api/envios/:id/estado
Cambiar el estado de un envío
DELETE
/api/envios/:id
Eliminar un envío

10. Pruebas realizadas

Para comprobar que el sistema funciona correctamente, se utilizó Postman.
Se realizaron pruebas para registrar, consultar, actualizar y eliminar envíos.
También se probaron algunos casos donde los datos eran incorrectos, por ejemplo, registrar un pedido con un número que ya existe o intentar guardar un envío sin completar los campos obligatorios.
Las capturas de estas pruebas se encuentran en la carpeta evidencias.

11. Argumentación técnica

Por qué se utilizó MongoDB?
Se eligió MongoDB porque permite guardar la información en documentos y organizar los datos de cada envío. De esta manera, podemos consultar y modificar la información de los pedidos cuando sea necesario.
Por qué se utilizaron rutas y controladores en Express?
Se separaron las rutas y los controladores para tener el proyecto más ordenado. Las rutas reciben las solicitudes y los controladores se encargan de realizar las operaciones con los envíos.
Cómo se manejan los errores y las validaciones?

Se utilizaron validaciones con Mongoose para comprobar que los campos obligatorios estén completos y que los estados sean los permitidos.
También se agregaron controles para evitar registrar números de pedido repetidos y para mostrar mensajes cuando ocurre algún error, por ejemplo, cuando no se encuentra un envío.

12. Conclusiones

Durante el desarrollo del proyecto, uno de los desafíos fue configurar la conexión entre Express y MongoDB y conseguir que todas las rutas funcionaran correctamente. Las pruebas con Postman ayudaron a encontrar errores y comprobar que las operaciones se realizaran correctamente.

Con este proyecto aprendí que es importante organizar el backend utilizando modelos, rutas y controladores. También comprendí que las validaciones y el manejo de errores ayudan a evitar problemas con los datos y permiten que el sistema funcione mejor.

13. Autor

Proyecto realizado para el laboratorio8 de base de datos avanzados con desarrollo de backend en Express y MongoDB.
Repositorio GitHub: https://github.com/Josy30/fastship-backend





