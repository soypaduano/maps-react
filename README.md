# maps-react - M30 Club
M30 Club es un proyecto desarrollado por Sebastian Paduano. 
Los objetivos del proyecto son 2:
 - Trastear con la API de Google Maps + entrenar conocimientos en React & Redux & Node
 - Aportar valor a la industria musical de Espana con informacion de Geolocalizacion para los artistas y relacionados.

Todos los artistas que salen en el mapa han sido seleccionados por un grupo de personas que tienen conocimiento de la escena musical nacional. Desde artistas de rap, como grupos, colectivos, productores, etc. En un principio, la idea es mantener ese grupo como principales colaboradores del proyecto, y poco a poco, obtener mas colaboradores para que la base de datos sea mas amplia y haya mas oferta de artistas alrededor de Espana y de Europa. 

La idea del proyecto es mantenerlo como algo local y no muy abierto a artistas ya reconocidos. Es 'poner en el mapa' a diferentes artistas que estan creciendo o que no son muy conocidos. 

Porque? Porque soy un friki y me gusta tener geolocalizado todo. Porque no hacerlo con la musica. Ademas, si pudiesemos tener una base de datos gigantes con geodatos musicales, creo que seria un recurso extra para toda la documentacion musical que hay ahora en Espana. 

# Especificaciones tecnicas: 

El proyecto se construye con 2 grandes componentes: El backend y el frontend (asi se puede ver en las carpetas root). 

Frontend: 
 - Esta construido con un create-react-app y su lanzamiento es muy facil (ejecutando npm run start). Se puede ver en el package.json
 - Tiene 2 partes, la parte de cliente y la parte de admin. La parte de cliente simplemente es un mapa con todos los artistas geolocalizados y a la derecha, el perfil de cada artista con unos datos (musica, descripcion, barrio, ano, etc).
 - Utiliza Material UI, y algunos estilos los tengo con Material UI, pero tambien utilizo hoja de estilos (preferencia personal). 

 Backend:
 - El backend es mucho mas simple que el frontend. Se compone de un archivo routes.js que con Express, creamos una API para hacer todas las
 peticiones a la base de datos y asi entregar los datos. No tiene mucha complejidad y de hecho es bastante rustica. Tiene una carpeta models que sirve para estructurar los datos de MongoDB. 
 - En la base de datos utilizamos MongoDB. Las conexiones a la base de datos las tenemos en el server.js


 

