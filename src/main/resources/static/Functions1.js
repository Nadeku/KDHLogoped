

/* Toggle between adding and removing the "responsive" class to navbar from menu click in small screen*/
function menuToggle() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/* Remove responsive class on window resize*/
function removeResponsiveClass(){
  var x = document.getElementById("navbar");
  x.classList.remove("responsive");
    x.className = "navbar";
}

window.addEventListener("resize", removeResponsiveClass);