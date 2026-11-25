FastShip Backend

1. Descripción del proyecto

En este laboratorio desarrollé un backend para una empresa de envios llamada FastShip
La idea del proyecto es tener un sistema donde se pueda guardar la informacion de los paquetes que se van a enviar y tambien poder consultar sus datos cuando sea necesario, por ejemplo se puede registrar un nuevo envio indicando quien lo envia quien lo recibe y a que direccion debe llegar. Tambien se puede cambiar el estado del paquete para saber si esta pendiente si esta en camino o si ya fue entregado.
Para realizar este trabajo utilice Node.js Express y MongoDB.

2. Herramientas utilizadas

Para desarrollar el proyecto utilice las siguientes herramientas
Node.js para ejecutar JavaScript
Express para crear el servidor y las rutas
MongoDB para guardar la informacion de los envios
Mongoose para trabajar con la base de datos
dotenv para configurar las variables de entorno
Nodemon para reiniciar el servidor cuando se realizan cambios
Postman para probar las rutas y comprobar que funcionen correctamente

3. Estructura del proyecto

Para tener el codigo mas ordenado cree diferentes carpetas y archivos y cada uno tiene una funcion dentro del proyecto

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

La carpeta config contiene la conexion con MongoDB
En controllers se encuentra el codigo que realiza las operaciones de los envios
En models se define la informacion que va a guardar cada envio
En routes se encuentran las rutas que permiten realizar las diferentes operaciones
El archivo server.js es el encargado de iniciar el servidor y conectar las diferentes partes del proyecto
La carpeta evidencias contiene las capturas de las pruebas realizadas en Postman

4. Instalación y configuracion

Primero se debe descargar el proyecto desde GitHub utilizando el siguiente comando
git clone https://github.com/Josy30/fastship-backend.git
Despues se ingresa a la carpeta del proyecto
cd fastship-backend
Luego se instalan las dependencias necesarias
npm install


5. Cómo ejecutar el proyecto

Para iniciar el servidor en modo desarrollo se utiliza el siguiente comando
npm run dev
Cuando todo funciona correctamente aparecen dos mensajes en la terminal. Uno indica que MongoDB se conecto correctamente y el otro que el servidor esta funcionando.
La direccion para acceder al servidor es
http://localhost:3000

6. Funciones y rutas de la API

El sistema permite realizar las siguientes operaciones
Registrar nuevos envios.
Mostrar todos los envios registrados.
Buscar un envio por su ID.
Consultar los envios pendientes o en transito.
Actualizar la informacion de un envio.
Cambiar el estado de un envio.
Eliminar un envio.
Cada envio guarda el numero de pedido el remitente el destinatario la direccion de entrega y el estado.
Los estados permitidos son pendiente en transito y entregado. Cuando se registra un nuevo envio su estado comienza como pendiente.
Para realizar las pruebas se utilizo Postman. Se probaron las operaciones de registro consulta actualizacion y eliminacion. Tambien se probaron datos incorrectos y numeros de pedido repetidos.
Las capturas de estas pruebas se encuentran en la carpeta evidencias.


7. Argumentación técnica

Por que elegi MongoDB para este proyecto?
Para desarrollar este proyecto decidi utilizar MongoDB porque necesitaba guardar la informacion de los envios de una manera organizada y que fuera facil de consultar, y cda envio tiene varios datos como el numero del pedido el remitente el destinatario la direccion y el estado. Con MongoDB puedo guardar toda esta informacion dentro de un mismo documento y acceder a ella cuando necesito consultar o modificar un envio.
Tambien utilice Mongoose porque me permitio definir como se deben guardar los datos y establecer algunas reglas para evitar que se registren envios incompletos o con informacion incorrecta.
Por ejemplo configure el numero de pedido como unico para evitar que dos envios tengan el mismo numero. Tambien estableci que el destinatario la direccion y el remitente sean campos obligatorios.

Por que separe las rutas y los controladores en Express?
Al desarrollar el backend decidi separar las rutas de los controladores para que el codigo estuviera mejor organizado y no tener todas las instrucciones dentro de un solo archivo.
Las rutas se encargan de recibir las solicitudes que llegan a la API. Por ejemplo cuando quiero registrar un envio utilizo el metodo POST y cuando necesito consultar todos los envios utilizo GET, tambienlos controladores contienen las instrucciones que se ejecutan para cada solicitud. Alli se encuentra la logica para registrar consultar actualizar cambiar el estado y eliminar los envios.
Esta separacion me ayudo a entender mejor como funciona Express y tambien hizo que fuera mas facil encontrar y corregir errores durante el desarrollo.

Como maneje los errores y las validaciones?
Durante el desarrollo comprendi que no basta con hacer que el sistema registre informacion sino que tambien es necesario comprobar que los datos sean correctos, por eso utilice las validaciones de Mongoose para indicar que algunos campos son obligatorios y para establecer los estados que puede tener un envio, asi el sistema no permite registrar un envio sin los datos necesarios ni utilizar un estado que no esta permitido.
Tambien agregue controles en los controladores para manejar diferentes situaciones, por ejemplo cuando intento registrar un numero de pedido que ya existe el sistema responde con un error indicando que ese numero ya esta registrado. Si busco un envio que no existe tambien recibo un mensaje indicando que no se encontro el registro.
Para comprobar que estas validaciones funcionaran realice diferentes pruebas con Postman. Esto me permitio observar las respuestas del servidor y corregir algunos errores durante el desarrollo.

8. Conclusiones

Durante el desarrollo de este laboratorio tuve algunas dificultades principalmente al configurar la conexion entre Express y MongoDB y al conseguir que todas las rutas funcionaran correctamente, al principio necesitaba comprobar que el servidor se conectara con la base de datos y que cada solicitud realizara la operacion esperada y para resolver estos problemas fui probando las rutas con Postman y revisando las respuestas que devolvia el servidor, con estas pruebas pude encontrar errores y entender mejor como se comunican las diferentes partes de un backend.

Al realizar este proyecto aprendi que es importante organizar el codigo y no colocar todas las funciones en un solo archivo. Separar los modelos las rutas y los controladores me ayudo a entender mejor la funcion de cada uno y a trabajar de una manera mas ordenada, tambien comprendi que las validaciones y el manejo de errores son necesarios porque permiten controlar la informacion que se guarda y evitar problemas cuando un usuario envia datos incorrectos.

Otra cosa que aprendi es que probar una API es tan importante como programarla con Postman pude comprobar si las operaciones de registrar consultar actualizar y eliminar realmente funcionaban, tambien pude probar situaciones en las que los datos estaban incompletos o el numero de pedido ya existia y esto me ayudo a comprender que un backend no solamente debe funcionar cuando los datos son correctos sino que tambien debe responder adecuadamente cuando ocurre algun error.






