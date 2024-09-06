const submitFunction = (event) => {
    event.preventDefault(); // NO permite que se actulice la WEB
    const valido = validarFormulario();
};

document.getElementById('formRegistro').addEventListener('submit', submitFunction);

function validarFormulario() {

    // Validar campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validationCorrect = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es requerido');
            validationCorrect = false;

        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Debe tener al menos 3 letras');
        } else {
            ocultarError(errorCampo)
        };
    });

    //Validar email

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // Expresión regular para validar email
        ocultarError(errorEmail)
    } else {
        mostrarError(errorEmail, 'Ingrese un correo válido');
    };

    //Validar edad

    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 años');
        validationCorrect = false;
    } else {
        ocultarError(errorEdad);
    };

    // Validar Actividad

    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Debes seleccionar una actividad');
        validationCorrect = false;
    } else {
        ocultarError(errorActividad);
    };

    // Validad Nivel de Estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorEstudio');

    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, 'Debes seleccionar tus estudios');
        validationCorrect = false;

    } else {
        ocultarError(errorNivelEstudio);
    };

    // Validad Términos y Condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones');
        validationCorrect = false;
    } else {
        ocultarError(errorAceptoTerminos);
    };

    return validationCorrect; // Esto dirá si el formulario está correcto o no
};

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
}
