// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
  // Define que el nombre debe ser una cadena no vacía.
  name: z.string().min(1, { message: "El nombre es obligatorio" }),

  // Valida que el correo tenga el formato correcto.
  email: z.string().email({ message: "El correo electrónico no es válido" }),

  // La contraseña debe tener al menos 6 caracteres.
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Limpiar mensajes anteriores
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("generalError").textContent = "";
  
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.remove("show");

  // Capturamos los valores ingresados
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    // Usa el método parse de Zod para validar el esquema.
    registerSchema.parse(formData);
    
    // Si la validación es exitosa, mostramos mensaje de éxito y limpiamos el form
    successMessage.classList.add("show");
    document.getElementById("registerForm").reset();

  } catch (error) {
    if (error instanceof z.ZodError) {
      // Muestra los mensajes de error en la página bajo cada campo o de forma general
      error.errors.forEach(err => {
        const fieldName = err.path[0]; // name, email, o password
        const errorElement = document.getElementById(`${fieldName}Error`);
        if (errorElement) {
          errorElement.textContent = err.message;
        }
      });
      document.getElementById("generalError").textContent = "Por favor, corrige los errores en el formulario.";
    } else {
      console.error("Error inesperado", error);
    }
  }
});
