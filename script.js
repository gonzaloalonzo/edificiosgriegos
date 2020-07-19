window.onload = function () {
  var fotos = document.querySelector("div");

  fotos.addEventListener(
    "click",function(e) {
        if(e.target.tagName === "IMG"){
            // crea un div para el overlay
            var fondoNegro = document.createElement("div");
                fondoNegro.id ="overlay";
                // se agraga al docuemnto
                document.body.appendChild(fondoNegro);
                // se indica posicion y background
                fondoNegro.style.position="absolute";
                fondoNegro.style.top=0;
                fondoNegro.style.backgroundColor= "rgba(0,0,0,0.5)";
                fondoNegro.style.cursor="pointer";

                // se le asignan e ancho y largo de la ventana
                fondoNegro.style.width = window.innerWidth+"px";
                fondoNegro.style.height = window.innerHeight + "px";
                // posicion con offset Y e X
                fondoNegro.style.top = window.pageYOffset + "px";
                fondoNegro.style.left = window.pageXOffset + "px";
        }else{
            console.log("No IMG")
        }
    },
    false);
};
