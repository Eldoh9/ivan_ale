const scriptUrl = 'https://script.google.com/macros/s/AKfycbzWbgGZJ7LBg-QystqbTN3YLtFeyH0HtYGmdnBoQFEE8kLxKVve-2wEiWX6lUYVajBHtw/exec';

const form = document.forms['formconfirmacion'];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {

        // Enviar los datos
        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(form),
            mode: 'no-cors'
        });

        // Mostrar mensaje de confirmación
        await Swal.fire({
            title: '¡MUCHAS GRACIAS!',
            text: 'Tu confirmación ha sido enviada correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#AB5661'
        });

        // Limpiar formulario
        form.reset();

    } catch (error) {

        Swal.fire({
            title: '¡Ups!',
            text: 'Ocurrió un problema al enviar tu confirmación.',
            icon: 'error',
            confirmButtonColor: '#AB5661'
        });

        console.error(error);
    }
});