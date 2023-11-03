# Control Gastos Subsidios - BackEnd

# Tecnologías usadas

Comúnmente los proyectos de desarrollo de aplicaciones tienen dos partes básicas: Front-end
(lado del cliente) y Back-end (lado del servidor), que se combinan en el desarrollo de Full-stack.
En este proyecto se decidió utilizar el Stack PERN, el cual consiste en PostgreSQL, ExpressJS,
ReactJS y NodeJS, tecnologías populares en el desarrollo Full-stack.

# PostgreSQL

Es un motor de base de datos de código abierto poderoso, muy popular en la actualidad. Pero
más allá de eso, la principal razón por la cual se escogió este motor es porque el SIU Pilagá
(Módulo económico, presupuestario, financiero y contable, hermano del SIU Guaraní) utiliza
PostgreSQL. Una de las mejoras importantes que se planteó para el futuro en conversaciones
con el usuario, sería el conectar este proyecto con el servicio de Pilagá. Así que se consideró
que lo mejor era utilizar la misma tecnología para facilitar el trabajo al equipo que deseara
desarrollar esa conexión.

# pgAdmin

pgAdmin es una herramienta de administración y desarrollo de bases de datos utilizada principalmente con el sistema de gestión de bases de datos relacional PostgreSQL. pgAdmin se utiliza para interactuar con bases de datos PostgreSQL y facilitar tareas como la creación, administración, modificación y consulta de bases de datos.

# ExpressJS

Es un framework gratuito que permite facilitar la implementación y desarrollo de aplicaciones
web. La razón de su elección es el excelente trabajo en conjunto que realiza con las demás
tecnologías presentadas.

# NodeJS

Es un entorno en tiempo de ejecución que permite correr lenguaje Javascript de una manera
eficiente y escalable. Fue escogida por su amplio soporte online en caso de dificultades.

# Instalar y correr el front-end

Se deben seguir los siguientes pasos:
Descargar el respositorio

Debemos clonar el repositorio.
Link de repositorio back-end: https://github.com/unahur-desapp/control-gastos-subsidios-backend.

# Instalar y correr el back-end

Se deben seguir los siguientes pasos:
Descargar el respositorio
Descargar e instalar NodeJS
Descargar e instalar el motor de base de datos postgres y herramienta de gestion de base de datos

# Descargar e instalar el respositorio

Para descargar el proyecto deberas contar con github instalado, el cual es un sistema de control de versiones distribuido que te ayuda a realizar un seguimiento de los cambios en tu código fuente y permite una colaboración fluida entre desarrolladores. Si no sabes lo que es te dejamos un link.
Link de github: https://docs.github.com/es/get-started

Debemos clonar el repositorio.
Link de repositorio back-end: https://github.com/unahur-desapp/control-gastos-subsidios-backend.

# Descargar e instalar NodeJS

Para publicar e instalar paquetes hacia y desde el registro público de npm o un registro privado de npm, debe instalar Node.js y la interfaz de línea de comandos de npm utilizando un administrador de versiones de Node o un instalador de Node.

Link de descargar NodeJS: https://nodejs.org/es/download .

Una ves instalado npm ubicate en el proyecto y ya puedes instalar las dependecias.

# Descargar e instalar el motor de base de datos postgres y herramienta de gestion de base de datos

Se debe instalar el motor de base y gestor. Como motor usamos postgres y como herramienta de gestion recomendamos pgAdmin
Para ello dejamos un link donde puedes descargar ambos de un mismo lugar.
Link de Postgres y pgAmdin : https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

En caso de no funcionar puede descargar el motor de base de dedatos postgres por algun otro link y pgAdmin de su pagina oficial.

# Pasos extra

En el repositorio tendras el archivo .env.development que apunta al nombre de tu base de datos.
La cual tendras que crear en tu base, para esto puede usar pgAdmin y crear una base con el nombre que le indiques en este archivo.
Una ves echo este paso puedes migrar la base y los seeder.

# Colleccion de postman:

Dejamos un link con la coleccion y sus metodos funcionales en local host:

https://app.getpostman.com/join-team?invite_code=b41ed2c4593d46cd8a8ff446253ae922
