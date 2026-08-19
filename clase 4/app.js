// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
      // de lo contrario, recházala con un mensaje adecuado.
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Se confirmaron ${mesasSolicitadas} mesas.`);
      } else {
        reject(`No hay disponibilidad suficiente. Solo tenemos ${mesasDisponibles} mesas disponibles.`);
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Simula un envío de correo. Usa Math.random() 
      // para simular si el correo se envió correctamente o si ocurrió un error.
      const simulacionExito = Math.random() > 0.3; // 70% de probabilidades de éxito

      if (simulacionExito) {
        resolve(`Correo enviado exitosamente a ${nombreCliente} confirmando la reserva.`);
      } else {
        reject(`Error en el sistema de correos al intentar enviar a ${nombreCliente}.`);
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(`=== Nueva solicitud de reserva ===`);
    console.log(`Cliente: ${nombreCliente} | Mesas solicitadas: ${mesasSolicitadas}`);
    console.log("Verificando disponibilidad de mesas...");
    
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log("✅ Disponibilidad confirmada:", disponibilidad);
    
    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    console.log("Procesando envío de correo...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log("✅ Envío exitoso:", confirmacion);
    
    console.log("🎉 Reserva completada satisfactoriamente.");

  } catch (error) {
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
    console.log("❌ Error en la reserva:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
console.log("--- INICIANDO PRUEBAS DEL SISTEMA DE RESERVAS ---");

// 1. Intenta hacer una reserva exitosa (mesasSolicitadas <= mesasDisponibles)
hacerReserva("Juan Pérez", 3);

// 2. Intenta hacer una reserva donde NO hay mesas (mesasSolicitadas > mesasDisponibles)
// Retrasamos esta ejecución para que los logs no se crucen inmediatamente
setTimeout(() => {
    hacerReserva("María López", 7);
}, 5000);

// 3. Otra prueba dentro del rango de mesas permitidas
setTimeout(() => {
    hacerReserva("Carlos Slim", 1);
}, 10000);
