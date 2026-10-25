const scriptUrl = 'https://script.google.com/macros/s/AKfycbzWbgGZJ7LBg-QystqbTN3YLtFeyH0HtYGmdnBoQFEE8kLxKVve-2wEiWX6lUYVajBHtw/exec';
const form = document.forms['formconfirmacion'];

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
            .then(response => Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Envíado",
        icon: "success"}))
            .then( () => { window.location.reload() } )
            .catch(error => console.error('Error', error.message))
})