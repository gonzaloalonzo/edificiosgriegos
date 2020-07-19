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

                //selecion imagen xl 
                var mini = e.target.src;
                var archivo = mini.substr(mini.length-10);
                var imagenlx="./img/"+archivo

                // crea tag img y carga la imagen grande
                var imagen = document.createElement("img");
                imagen.id = "image";
                imagen.src=imagenlx;
                imagen.style.display="block";
                imagen.style.position = "absolute";
                // prevencion en caso de no carga
                imagen.addEventListener("load", function () {
                    centrar(this);
                    fondoNegro.appendChild(imagen);
                },false);
                imagen.addEventListener("click", function () {
                    if(fondoNegro){
                        fondoNegro.parentNode.removeChild(fondoNegro);
                    }                    
                },false)
            
        }else{
            console.log("No IMG")
        }
    },
    false);
    function centrar(imagen) {
        var xx= (window.innerWidth-imagen.width)/2;
        var yy= (window.innerHeight-imagen.height)/2;
        imagen.style.top = yy+"px";
        imagen.style.left = xx+"px";
        return imagen;
        
    }
};
