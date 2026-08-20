document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Limpiar mensajes de error previos
  const errorMsgs = document.querySelectorAll('.error-msg');
  errorMsgs.forEach(msg => msg.textContent = '');

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const archivo = document.getElementById('archivo').files[0];

  let isValid = true;

  // Validación 1: Nombre debe tener al menos 3 caracteres y solo letras
  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (nombre.length < 3) {
    document.getElementById('error-nombre').textContent = 'El nombre debe tener al menos 3 caracteres.';
    isValid = false;
  } else if (!nombreRegex.test(nombre)) {
    document.getElementById('error-nombre').textContent = 'El nombre solo debe contener letras y espacios.';
    isValid = false;
  }

  // Validación 2: Correo electrónico con formato válido
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    document.getElementById('error-correo').textContent = 'Ingresa un correo electrónico válido.';
    isValid = false;
  }

  // Validación 3: Teléfono debe tener exactamente 10 dígitos numéricos
  const telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefono)) {
    document.getElementById('error-telefono').textContent = 'El teléfono debe contener exactamente 10 dígitos.';
    isValid = false;
  }

  // Validación de intereses (ya estaba parcialmente, pero se agrega mensaje custom)
  if (intereses.length === 0) {
    document.getElementById('error-intereses').textContent = 'Debes seleccionar al menos un interés.';
    isValid = false;
  }

  // Validación de horario
  if (!horario) {
    document.getElementById('error-horario').textContent = 'Debes seleccionar un horario preferido.';
    isValid = false;
  }

  // Validación 4 (Opcional): Si hay archivo, que no pese más de 2MB
  if (archivo) {
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (archivo.size > maxSize) {
      document.getElementById('error-archivo').textContent = 'El archivo no debe pesar más de 2MB.';
      isValid = false;
    }
  }

  // Si todo está bien
  if (isValid) {
    alert('Registro exitoso. ¡Gracias por registrarte!');
    // Reinicia el formulario para un nuevo registro
    event.target.reset();
  }
});
