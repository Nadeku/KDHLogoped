

/* HIDE SHOW MOBILE MENU navbar2*/
function openNav() {
  document.getElementById("nav").style.display = "block";
}

function closeNav() {
  document.getElementById("nav").style.display = "none";
}




/* Toggle between adding and removing the responsive class
 to navbar from menu click in small screen*/
function menuToggle() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/* Make sure responsive class is not present if screen >= 600px*/
function removeResponsiveClass() {
  var x = document.getElementById("navbar");
  if (x.classList.contains("responsive") && window.innerWidth >= 600) {
    x.classList.remove("responsive");
    x.className = "navbar";
  }
}

window.addEventListener("resize", removeResponsiveClass);