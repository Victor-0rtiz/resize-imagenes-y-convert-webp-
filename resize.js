const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folderPath = './webp'; // Asegúrate de que esta ruta sea correcta
const outfolderPath = './rezie'; // Asegúrate de que esta ruta sea correcta


fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error al leer la carpeta:', err);
        return;
    }
    console.log(files)

    

    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const outfilepath = path.join(outfolderPath, file);
         
        sharp(filePath)
            .resize(380, 200) // Ajusta las dimensiones según tus necesidades
            .toFile(outfilepath, (err, info) => {
                if (err) {
                    console.error(`Error al redimensionar ${file}:`, err);
                } else {
                    console.log(`Imagen redimensionada exitosamente: ${file}`);
                }
            });
    });
});
