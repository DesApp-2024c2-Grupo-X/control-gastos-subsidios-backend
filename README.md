# 👨‍💻 Control Gastos Subsidios 👨‍💻

# Tecnologías usadas

Comúnmente los proyectos de desarrollo de aplicaciones tienen dos partes básicas: Front-end
(lado del cliente) y Back-end (lado del servidor), que se combinan en el desarrollo de Full-stack.
En este proyecto se decidió utilizar el Stack PERN, el cual consiste en PostgreSQL, ExpressJS,
ReactJS y NodeJS, tecnologías populares en el desarrollo Full-stack.

## PostgreSQL

Es un motor de base de datos de código abierto poderoso, muy popular en la actualidad. Pero
más allá de eso, la principal razón por la cual se escogió este motor es porque el SIU Pilagá
(Módulo económico, presupuestario, financiero y contable, hermano del SIU Guaraní) utiliza
PostgreSQL. Una de las mejoras importantes que se planteó para el futuro en conversaciones
con el usuario, sería el conectar este proyecto con el servicio de Pilagá. Así que se consideró
que lo mejor era utilizar la misma tecnología para facilitar el trabajo al equipo que deseara
desarrollar esa conexión.

## ExpressJS

Es un framework gratuito que permite facilitar la implementación y desarrollo de aplicaciones
web. La razón de su elección es el excelente trabajo en conjunto que realiza con las demás
tecnologías presentadas.

## ReactJs

React es una biblioteca para construir interfaces de usuario, ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web, la cual contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.
Es importante señalar que ReactJS no es un framework de JavaScript.
React propone una arquitectura basada en componentes, que son piezas de código en las que se utiliza HTML, CSS y Javascript, de modo que contienen tanto la lógica como la presentación.
Se consideró usar el mismo ya que todo el equipo tenía gran conocimiento sobre esta biblioteca y su amplio soporte online.

## NodeJS

Es un entorno en tiempo de ejecución que permite correr lenguaje Javascript de una manera eficiente y
escalable, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de
herramientas de lado servidor y aplicaciones en JavaScript.
Fue escogida por su amplio soporte online en caso de dificultades.

# Descarga e instalación

## GitHub

Para descargar el proyecto deberás contar con github instalado, el cual es un sistema de control de versiones distribuido que te ayuda a realizar un seguimiento de los cambios en tu código fuente y permite una colaboración fluida entre desarrolladores. Si no sabes lo que es te dejamos un link.
Link de github: https://docs.github.com/es/get-started

## Descargar e instalar NodeJS

Para publicar e instalar paquetes hacia y desde el registro público de npm o un registro privado de npm, debe instalar Node.js y la interfaz de línea de comandos de npm utilizando un administrador de versiones de Node o un instalador de Node.

Link de descargar NodeJS: https://nodejs.org/en/download .

Una vez instalado npm podrás ubicarte en el proyecto e instalar las dependencias.

## Front-end (Local)

#### Para descargar e instalar el proyecto del lado Front-End localmente se deben seguir los siguientes pasos.

1. Clonar o descargar el repositorio

Si eliges clonar el repositorio lo puedes hacer desde una terminal con el comando git clone "url del repositorio"
Si eliges descargarlo solo debes ingresar al link.

Link front-end: "https://github.com/unahur-desapp/control-gastos-subsidios-backend".

2. Correr los comandos para instalación y disponer del proyecto.

Una vez descargado o clonado el proyecto debemos abrir una terminal, situarnos donde descargamos o clonamos el proyecto.
Ej: "C:\Users\Windows\Proyecto\control-gastos-subsidios-frontend".
Ejecutar el comando npm -i (para instalar las dependencias).
Después de terminar la instalación de las mismas ejecutar npm start para correr el proyecto localmente.
El mismo quedará corriendo en la url “localhost” puerto 3000.
Esto dejará corriendo el proyecto mientras no cierres la terminal, recuerda que hasta que no instales y corras el backend nadie responderá tus consultas y por ende no podrás logearte.

# Back-end (Local)

#### Para descargar e instalar el proyecto del lado Back-End localmente se deben seguir los siguientes pasos.

1. Clonar o descargar el repositorio

Si eliges clonar el repositorio lo puedes hacer desde una terminal con el comando git clone "url del repositorio"
Si eliges descargarlo solo debes ingresar al link.

Link front-back-end: "https://github.com/unahur-desapp/control-gastos-subsidios-backend".

2. Correr los comandos para instalación y disponer del proyecto.

Una vez descargado o clonado el proyecto debemos abrir una terminal, situarnos donde descargamos o clonamos el proyecto.
Ej: "C:\Users\Windows\Proyecto\control-gastos-subsidios-backend".
Ejecutar la orden npm -i (para instalar las dependencias).
Después de terminar la instalación de las mismas ejecutar npm start para correr el proyecto localmente. El mismo quedará corriendo en la url “localhost” puerto 3001.
Esto dejará corriendo la base de datos mientras no cierres la terminal, responderá a las consultas del front-end.

//////////////////////////////////// HASTA ACA MIRE 08/11 01:37 min lucho //////////////////////////////////

## Descargar e instalar el motor de base de datos postgres y herramienta de gestión de base de datos

Se debe instalar el motor de base y gestor.
Como motor usamos postgres y como herramienta de gestión recomendamos pgAdmin
Para ello dejamos un link donde puedes descargar ambos de un mismo lugar.
Link de Postgres y pgAmdin : https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

En caso de no funcionar puede descargar el motor de base de datos postgres por algun otro link y pgAdmin de su página oficial.

# Pasos extra

En el repositorio tendras el archivo .env.development que deberas modificar con los datos de tu base de datos.
La cual tendras que crear en tu base, para esto puede usar pgAdmin y crear una base con el nombre que le indiques en este archivo.
Una ves echo este paso puedes migrar la base y los seeder.

# Colleccion de postman:

Dejamos un link con la coleccion y sus metodos funcionales en local host:

https://app.getpostman.com/join-team?invite_code=b41ed2c4593d46cd8a8ff446253ae922

# Como subir el proyecto a la nube

Para esto debes seguir ciertos pasos; en primer lugar elegir una plataforma en la nube para deployar tanto el back-end como le front-end, en nuestro caso dejaremos un ejemplo con la plataforma de railway; dejamos el link de la pag oficial "https://railway.app/".

Para ello deberas seguir los pasos para create una cuenta una vez echo esto podras crear maquinas virtuales

# Deployando el back en la nube.

Para ellos deberas apuntar el ropositorio del mismo y configurar las variables de entorno con tu servidor posgrest el cual tambien deberas configurar en la pagina.

# Variables de entorno de railway

Use este codigo en raw editor para editar las variables de entorno.

NODE_ENV= "nombre de entorno"
SQL_HOST="url del host"
SQL_DATABASE="nombre de la base de datos"
SQL_PORT="Puerto de la base de datos"
SQL_PASSWORD=""Contraseña de la base de datos""
SQL_USERNAME="Usuario de la base de datos"

Guarde el archivo y visualizara la variables de entorno en UI.
