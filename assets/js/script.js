$(document).ready(function(){
  // Agrega un "eventListener" a las anclas del navbar
  $("ul>li>a").click(function(event){
    // Prevenir evento por defecto
    event.preventDefault();

    // Necesito obtener el valor href del enlace
    let cajaId = $(this).attr("href");

    $("html, body").animate(
      // parametros de animación
      { scrollTop: $(cajaId).offset().top },
      // tiempo de animación
      1900,
      // callback (acción que ejecutaremos al terminar el proceso)
      function(){
        window.location.hash = cajaId;
      }
    )

  })
});