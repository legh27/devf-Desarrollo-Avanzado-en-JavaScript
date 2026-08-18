const btnFetch = document.getElementById('btn-fetch');
const btnAxios = document.getElementById('btn-axios');
const dataContainer = document.getElementById('data-container');

const API_URL = 'https://rickandmortyapi.com/api/character';

// Función para mostrar los personajes en el contenedor
function displayCharacters(characters) {
    dataContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos
    
    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        
        dataContainer.appendChild(card);
    });
}

// Función usando Fetch
async function getWithFetch() {
    try {
        dataContainer.innerHTML = '<p>Cargando con Fetch...</p>';
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error usando Fetch:', error);
        dataContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Función usando Axios
async function getWithAxios() {
    try {
        dataContainer.innerHTML = '<p>Cargando con Axios...</p>';
        const response = await axios.get(API_URL);
        // Axios parsea el JSON automáticamente en response.data
        displayCharacters(response.data.results);
    } catch (error) {
        console.error('Error usando Axios:', error);
        dataContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Asignar eventos a los botones
btnFetch.addEventListener('click', getWithFetch);
btnAxios.addEventListener('click', getWithAxios);
