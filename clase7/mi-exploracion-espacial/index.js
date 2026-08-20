const planetas = require('./planetas');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : "¡Iniciando reporte planetario! Bip bop...",
    e : "oO",
    T : "U "
}));

console.log("\n=========================================\n");

planetas.forEach(planeta => {
  console.log(`🚀 ¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`📝 Descripción: ${planeta.descripcion}`);
  console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`📍 Coordenadas: ${planeta.coordenadas}`);
  console.log('-----------------------------------------');
});

console.log(cowsay.say({
    text : "¡Reporte finalizado! Transmisión cortada.",
    e : "-O",
    T : "U "
}));
