# "Taller: ¡Node.js para Novatos Aventureros!"

¡Manos a la Obra!
Sigue las siguientes instrucciones para la elaboración de tu proyecto con Node.js y JavaScript.

### Paso 1: ¡Preparando la Nave Espacial! (Instrucciones para la práctica)

1. Crea una carpeta: Llamémosla `mi-exploracion-espacial`. ¡Será la base de nuestra aventura!
2. Abre tu terminal: Navega hasta la carpeta que creaste.¡Inicia el viaje!

3. Ejecuta el comando `npm init -y`. Esto creará un archivo `package.json` con la información básica de nuestro proyecto.

### Paso 2: ¡Construyendo el Registro Planetario!

1. Crea un archivo: Llamémoslo `planetas.js`. Aquí guardaremos los datos de nuestros planetas. ¡A registrar planetas!

2. Dentro de `planetas.js`, crea un array con objetos. Cada objeto representará un planeta y tendrá propiedades como `nombre`, `descripcion` y `descubiertoEn`.
```JavaScript
const planetas = [
  {
    nombre: "Titán",
    descripcion: "La luna más grande de Saturno, con lagos de metano.",
    descubiertoEn: "1655"
  },
  {
    nombre: "Próxima Centauri b",
    descripcion: "Un exoplaneta rocoso en la zona habitable de su estrella.",
    descubiertoEn: "2016"
  }
  // ¡Añade más planetas!
];

module.exports = planetas;
```
### Paso 3: ¡Compartiendo Nuestros Descubrimientos!

1. Crea un nuevo archivo: Llamémoslo `index.js`. ¡Será el centro de comunicaciones de nuestra expedición! ¡Conectando con la base!

2. Dentro de `index.js`, importa el array de planetas desde `planetas.js`.
```JavaScript
const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas
```
3. ¡Enviando un reporte! Recorre el array de planetas e imprime la información de cada uno en la consola.
```JavaScript

planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});
```
### Paso 4: ¡Automatizando el Despegue!

1. Abre `package.json`:

2. Busca la sección "scripts".
3. ¡Configura un nuevo comando!
  - Añade un nuevo script llamado `explorar`. Este script ejecutará nuestro archivo `index.js`.
```JSON

"scripts": {
  "explorar": "node index.js"
},
```
### Paso 5: ¡La Gran Revelación!

1. ¡De vuelta a la terminal! Ejecuta el comando `npm run explorar`.
2. ¡Observa la magia! Verás la información de tus planetas impresos en la consola.
3.  ¡Misión cumplida! ¡Felicidades, Explorador Espacial!

Has completado tu primer proyecto `Node.js`. ¡Ahora puedes registrar y compartir tus descubrimientos planetarios con el mundo!

¿Quieres ir más lejos?

### (Opcional) ¡Añade más planetas! Cuantos más, mejor.
- ¡Crea nuevas propiedades! ¿Qué tal si añades imágenes o coordenadas estelares?
- ¡Comparte tu código! Sube tu proyecto a GitHub para que otros exploradores puedan unirse a tu aventura.
- Experimenta instalando un paquete como [cowsay](https://github.com/piuccio/cowsay). Revisa su documentación y agrégalo al proyecto como se te ocurra.
- En caso de instalar paquetes, agrega siempre un archivo llamado `.gitignore` para evitar subir archhivos innecesarios al repositorio en la carpeta de tu proyecto para que tenga el siguiente contenido.
```sh
node_modules/
```
¡Este es solo el comienzo de tu viaje en el mundo de Node.js!