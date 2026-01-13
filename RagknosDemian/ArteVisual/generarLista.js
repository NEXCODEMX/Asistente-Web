const fs = require("fs");
const path = require("path");

const carpeta = path.join(__dirname, "FotosRagknosDemianIdeas");
const archivos = fs.readdirSync(carpeta).filter(file =>
  /\.(jpg|jpeg|png|gif)$/i.test(file)
);

fs.writeFileSync(path.join(__dirname, "fotos.json"), JSON.stringify(archivos, null, 2));

console.log("✅ Archivo fotos.json generado con", archivos.length, "fotos.");
