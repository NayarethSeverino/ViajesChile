$(document).ready(function() {
    $(window).scroll(function() {
      const navbar = document.getElementById('navbar');
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > window.innerHeight / 2) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });

  
$(document).ready(function(){
    $('#carouselExample').carousel({
        interval: 3500
    });
  });

  
$(document).ready(function() {
    $("#enviarCorreo").click(function () {
      var nombre = $("#exampleInputNombre").val();
      var email = $("#exampleInputMail").val();
      var mensaje = $("#exampleMensaje").val();

      if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
      } else {
        alert("Gracias por contactarte con nosotros, en breve te responderemos.");
      }
    });
  });