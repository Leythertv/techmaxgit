document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario_contacto").addEventListener('submit',validacionformulario);
});


var msjerror = document.getElementById("msjerror");

// Función para validar los campos de entrada del formulario
function validacionformulario(evento) {
    evento.preventDefault();  // Para evitar ejecutar el formulario de manera predeterminada

    // Comprueba si el campo nombre es válido (no está vacío)
    var nombre = document.getElementById("txtnombres").value;
    if(nombre===null || nombre.length==0) {        
        msjerror.innerHTML="El nombre no debe estar vacío";
        return false;
    }    
    var regExpSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    if(regExpSoloLetras.test(nombre)==false) {
        msjerror.innerHTML="El nombre sólo debe contener letras y espacios";
        return false;
    }  

    // Comprueba si la dirección de correo tiene un formato válido
    var regExpCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var correo = document.getElementById("txtcorreo").value;    
    if(regExpCorreo.test(correo)==false) {
        msjerror.innerHTML="El correo electrónico ingresado no tiene un formato válido";
        return false;
    }   

    // Comprueba si el teléfono contiene sólo números
    var regExpSoloNumeros=/^[0-9]+$/;
    var telefono = document.getElementById("txtcelular").value;
    if(regExpSoloNumeros.test(telefono)==false) {
        msjerror.innerHTML="El teléfono debe contener sólo números";
        return false;
    }

    // Comprueba si esta vacio la seccion tema
    var tema = document.getElementById("txttema").value;
    if(tema==null || tema.length==0) {
        msjerror.innerHTML="El tema no debe estar vacío";
        return false;
    }

    // Comprueba si ha seleccionado un elemento de la lista 
    var i = document.getElementById("lstconsultoria").selectedIndex;
    if(i==null || i==0) {
        msjerror.innerHTML="Debe seleccionar un tipo de consultoria de la lista";
        return false;
    }
    
    // Comprueba si esta vacio la seccion mensaje
    var mensaje = document.getElementById("txtmensaje").value;
    if(mensaje==null || mensaje.length==0) {
        msjerror.innerHTML="El mensaje no debe estar vacío";
        return false;
    }   
    
    // Comprueba si ha marcado el checkbox de terminos y condiciones
    var acepto = document.getElementById("chkacepto").checked;
    if(acepto==false) {
        msjerror.innerHTML="Debe aceptar los términos y condiciones de privacidad";
        return false;
    }
    // Comprueba si ha marcado el checkbox de anuncios
    var anuncios = document.getElementById("chkinfo").checked;
    if(anuncios==false) {
        msjerror.innerHTML="Debe aceptar recibir informacion de la empresa Techmax";
        return false;
        
    }

    // Si paso todas las fases de validación, entonces ejecutará el programa PHP
    this.submit();
}