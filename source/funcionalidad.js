// Obtén elementos del DOM
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');

// Abrir cuadro flotante
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Cerrar cuadro flotante
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});