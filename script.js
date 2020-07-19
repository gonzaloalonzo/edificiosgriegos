window.onload = function () {
  var fotos = document.querySelector("div");

  fotos.addEventListener(
    "click",function(e) {
        if(e.target.tagName === "IMG"){
            console.log("IMG")
        }else{
            console.log("No IMG")
        }
    },
    false);
};
