const intro = document.getElementById('intro');
const video = document.getElementById('videoIntro');

let introCerrada = false;

// Cuando termina el video, se pausa en el último fotograma
video.addEventListener('ended', () => {
    video.pause();
});

// Función para cerrar la introducción
function cerrarIntro() {

    if (introCerrada) return;

    introCerrada = true;

    // Pausar el video
    video.pause();

    // Aplicar desvanecimiento
    intro.classList.add('ocultar');

    // Eliminar completamente la pantalla
    setTimeout(() => {
        intro.classList.add('desaparecer');
    }, 1500);
}

// Cerrar al hacer clic o tocar la pantalla
intro.addEventListener('click', cerrarIntro);
intro.addEventListener('touchend', cerrarIntro);