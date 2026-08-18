// Inicializamos nuestros datos simulando el contenido de un archivo JSON
let bibliotecaJSON = JSON.stringify([
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
    { titulo: "1984", autor: "George Orwell", genero: "Ciencia ficción", disponible: false },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", genero: "Fábula", disponible: true }
]);

// 1. Simular lectura de datos (Asíncrona con callback)
function leerDatos(callback) {
    console.log("Leyendo datos de la biblioteca...");
    setTimeout(() => {
        // Simulamos que parseamos el JSON al leerlo
        const datos = JSON.parse(bibliotecaJSON);
        callback(null, datos);
    }, 1000); // 1 segundo de retraso simulado
}

// 2. Simular escritura de datos (Asíncrona con callback)
function escribirDatos(nuevosDatos, callback) {
    console.log("Guardando cambios en la biblioteca...");
    setTimeout(() => {
        // Convertimos a JSON nuevamente
        bibliotecaJSON = JSON.stringify(nuevosDatos, null, 2);
        callback(null, "¡Datos guardados exitosamente!");
    }, 1000); // 1 segundo de retraso simulado
}

// --- Funciones para interactuar con el inventario ---

// Consultar libros
function consultarLibros() {
    leerDatos((err, libros) => {
        if (err) return console.error(err);
        console.log("\n--- INVENTARIO DE LIBROS ---");
        libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} por ${libro.autor} - ${libro.disponible ? '🟢 Disponible' : '🔴 Prestado'}`);
        });
        console.log("----------------------------\n");
    });
}

// Agregar libros
function agregarLibro(nuevoLibro, callbackExterna) {
    leerDatos((err, libros) => {
        if (err) return console.error(err);
        
        libros.push(nuevoLibro);
        
        escribirDatos(libros, (errEscritura, mensaje) => {
            if (errEscritura) return console.error(errEscritura);
            console.log(`[Éxito]: El libro "${nuevoLibro.titulo}" ha sido agregado.`);
            if(callbackExterna) callbackExterna();
        });
    });
}

// Actualizar la disponibilidad
function actualizarDisponibilidad(titulo, estaDisponible, callbackExterna) {
    leerDatos((err, libros) => {
        if (err) return console.error(err);
        
        const libroEncontrado = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        
        if (libroEncontrado) {
            libroEncontrado.disponible = estaDisponible;
            escribirDatos(libros, (errEscritura, mensaje) => {
                if (errEscritura) return console.error(errEscritura);
                console.log(`[Éxito]: La disponibilidad de "${titulo}" ha sido actualizada a ${estaDisponible ? 'Disponible' : 'Prestado'}.`);
                if(callbackExterna) callbackExterna();
            });
        } else {
            console.log(`[Error]: No se encontró el libro con el título "${titulo}".`);
            if(callbackExterna) callbackExterna();
        }
    });
}


// --- Flujo de ejecución simulado ---
console.log("=== INICIANDO SISTEMA DE BIBLIOTECA ===");

// Ejecución anidada de callbacks para asegurar el orden (Callback Hell)
consultarLibros(); // Muestra el estado inicial

setTimeout(() => {
    // 1. Agregamos un libro nuevo
    const nuevo = { titulo: "Dune", autor: "Frank Herbert", genero: "Ciencia ficción", disponible: true };
    agregarLibro(nuevo, () => {
        
        // 2. Al terminar, actualizamos la disponibilidad de otro libro
        actualizarDisponibilidad("1984", true, () => {
            
            // 3. Al terminar, volvemos a consultar para verificar los cambios
            console.log("\n>>> ESTADO FINAL DESPUÉS DE LAS OPERACIONES:");
            consultarLibros();
        });
    });
}, 1500);
