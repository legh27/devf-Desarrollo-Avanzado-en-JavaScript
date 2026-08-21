import './style.css';

let numeroSecreto;
let intentosRestantes;

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const intentosSpan = document.getElementById('intentos');

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 7; // Funcionalidad adicional: Contador de intentos
    
    intentosSpan.textContent = intentosRestantes;
    mensaje.textContent = '';
    mensaje.className = 'mensaje';
    inputNumero.value = '';
    inputNumero.disabled = false;
    botonAdivinar.disabled = false;
    botonReiniciar.classList.add('hidden');
    inputNumero.focus();
}

function manejarAdivinanza() {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        mensaje.className = 'mensaje error';
        return;
    } 

    intentosRestantes--;
    intentosSpan.textContent = intentosRestantes;

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '🎉 ¡Felicidades! ¡Adivinaste el número!';
        mensaje.className = 'mensaje exito';
        terminarJuego();
    } else if (intentosRestantes === 0) {
        mensaje.textContent = `💀 ¡Fin del juego! El número era ${numeroSecreto}.`;
        mensaje.className = 'mensaje error';
        terminarJuego();
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = '📈 El número es más alto.';
        mensaje.className = 'mensaje pista';
    } else {
        mensaje.textContent = '📉 El número es más bajo.';
        mensaje.className = 'mensaje pista';
    }
}

function terminarJuego() {
    inputNumero.disabled = true;
    botonAdivinar.disabled = true;
    botonReiniciar.classList.remove('hidden');
}

botonAdivinar.addEventListener('click', manejarAdivinanza);

inputNumero.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        manejarAdivinanza();
    }
});

botonReiniciar.addEventListener('click', iniciarJuego);

// Iniciar al cargar
iniciarJuego();
