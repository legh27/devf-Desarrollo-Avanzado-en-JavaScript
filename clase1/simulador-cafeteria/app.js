const addOrderBtn = document.getElementById('add-order-btn');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');
const pendingCount = document.getElementById('pending-count');
const completedCount = document.getElementById('completed-count');

let orderIdCounter = 1;

// Posibles items de la cafetería para variar
const menuItems = [
    'Café Americano', 'Latte Macchiato', 'Capuchino', 
    'Espresso Doble', 'Té Matcha', 'Frappé de Caramelo',
    'Panini de Pavo', 'Croissant de Almendra'
];

// Función 1: Recepción de un nuevo pedido
function receiveOrder() {
    const id = orderIdCounter++;
    const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
    
    const order = {
        id: id,
        item: randomItem,
        status: 'En Proceso'
    };
    
    // Actualizar UI para mostrarlo en proceso
    renderOrder(order, pendingList);
    updateCounts();

    // Iniciar preparación asincrónica
    processOrderAsync(order);
}

// Función 2: Simulación de la preparación de pedidos con Promises y setTimeout
function simulatePreparation(order) {
    return new Promise((resolve) => {
        // Tiempo aleatorio entre 2 y 6 segundos
        const preparationTime = Math.floor(Math.random() * 4000) + 2000;
        
        setTimeout(() => {
            order.status = 'Completado';
            resolve(order);
        }, preparationTime);
    });
}

// Función 3: Actualización visual del estado usando async/await
async function processOrderAsync(order) {
    try {
        // Esperamos a que la preparación termine
        const completedOrder = await simulatePreparation(order);
        
        // Removemos de la lista pendiente
        const orderElement = document.getElementById(`order-${completedOrder.id}`);
        if(orderElement) {
            orderElement.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                orderElement.remove();
                // Lo agregamos a la lista de completados
                renderOrder(completedOrder, completedList);
                updateCounts();
            }, 300); // Dar tiempo para la animación
        }
    } catch (error) {
        console.error("Error al procesar el pedido:", error);
    }
}

// Función auxiliar: Renderizar pedido en el DOM
function renderOrder(order, container) {
    const orderEl = document.createElement('div');
    orderEl.className = `order-card ${order.status === 'En Proceso' ? 'pending' : 'completed'}`;
    orderEl.id = `order-${order.id}`;

    const iconHtml = order.status === 'En Proceso' 
        ? '<div class="spinner"></div>' 
        : `<svg class="check-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    orderEl.innerHTML = `
        <div class="order-info">
            <span class="order-id">Pedido #${order.id}</span>
            <span class="order-item">${order.item}</span>
        </div>
        <div class="order-status-icon">
            ${iconHtml}
        </div>
    `;

    // Lo agregamos al inicio de la lista
    container.prepend(orderEl);
}

// Función auxiliar: Actualizar contadores
function updateCounts() {
    pendingCount.textContent = pendingList.children.length;
    completedCount.textContent = completedList.children.length;
}

// Event Listeners
addOrderBtn.addEventListener('click', receiveOrder);
