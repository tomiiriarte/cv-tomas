function enviarFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Limpiar mensajes de error previos
    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mensajeError').textContent = '';

    if (nombre.trim() === '') {
        document.getElementById('nombreError').textContent = 'Este campo es obligatorio.';
    }

    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Este campo es obligatorio.';
    }

    if (mensaje.trim() === '') {
        document.getElementById('mensajeError').textContent = 'Este campo es obligatorio.';
    }

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Es obligatorio rellenar todos los campos.');
        return;
    }

    // Aquí puedes agregar lógica adicional, como enviar los datos a un servidor
    alert('Formulario enviado:\n\nNombre: ' + nombre + '\nEmail: ' + email + '\nMensaje: ' + mensaje + '\n¡Gracias por su contacto! A la brevedad me estaré comunicando.');

    // Limpiar los campos después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
}


