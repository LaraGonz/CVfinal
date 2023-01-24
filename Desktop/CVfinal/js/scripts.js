

window.addEventListener('DOMContentLoaded', event => {

    // Contraer la responsive navbar cuando el toggler está visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Validación de formulario con Bootstrap 
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop para evitar el submit
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            //Si la validación está OK, muestro los datos en consola
            console.log("Capturamos el evento onclick del elemento botonEnviar");
            var nombreCap = document.getElementById("inputNombre").value;
            console.log("Nombre: "+nombreCap)
            var mailCap = document.getElementById("inputEmail").value;
            console.log("E-mail: "+mailCap)
            var telCap = document.getElementById("inputTel").value;
            console.log("Teléfono: "+telCap)
            var mensajeCap = document.getElementById("inputMensaje").value;
            console.log("Mensaje: "+mensajeCap)
            //Mando un alerta
            window.alert("El mensaje fué enviado con éxito!");
            //Y limpio el formulario
            document.getElementById('formulario').reset();
          } 
        
        form.classList.add('was-validated')
        }, true)
    })
})()

