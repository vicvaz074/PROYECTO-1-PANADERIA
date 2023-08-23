// Variables del carrusel
const carruselContainer = document.querySelector('.carrusel-container');
let scrollPosition = 0;

// Función para desplazar a la izquierda
function scrollLeft() {
    if (scrollPosition > 0) {
        scrollPosition -= window.innerWidth * 0.6;  // Desplazamiento del 60% del ancho de la ventana
        carruselContainer.scrollLeft = scrollPosition;
    }
}

// Función para desplazar a la derecha
function scrollRight() {
    if (scrollPosition < carruselContainer.scrollWidth - window.innerWidth) {
        scrollPosition += window.innerWidth * 0.6;  // Desplazamiento del 60% del ancho de la ventana
        carruselContainer.scrollLeft = scrollPosition;
    }
}

// Función para mostrar un mensaje de agradecimiento al enviar el formulario
function thankYouMessage() {
    alert('¡Gracias por contactarte con nosotros! Responderemos a tu mensaje lo antes posible.');
}

// Eventos
document.querySelector('.scroll-left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-right').addEventListener('click', scrollRight);
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío real del formulario
    thankYouMessage();
});

