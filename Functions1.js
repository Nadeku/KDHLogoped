

/* Hide/show back to top button */
window.addEventListener("scroll", backtotop);

function backtotop() {
  
    var btn = document.getElementsByClassName("topBtn")[0];
    var scrollHeight = 200;
    if (window.scrollY > scrollHeight && window.innerWidth <= 600) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  

}


/* Toggle between adding and removing the responsive class
 to navbar from menu click in small screen
 and change toggle button*/
function menuToggle() {
  var x = document.getElementById("navbar");
  var toggleIcon = document.getElementById("toggle");

  /* Endre responsive class */
  if (x.className === "navbar") {
    x.className += " responsive";


    /* Move screen to navbar*/
    var target = document.querySelector('nav');
    var targetPosition = target.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

    /* Change icon */
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-xmark");


  } else {
    x.className = "navbar";

    /* Change icon */
    toggleIcon.classList.remove("fa-xmark");
    toggleIcon.classList.add("fa-bars");
  }



}

/* Make sure responsive class is not present if screen >= 600px */
function removeResponsiveClass() {
  var x = document.getElementById("navbar");
  var toggleIcon = document.getElementById("toggle");
  if (x.classList.contains("responsive") && window.innerWidth >= 600) {
    x.classList.remove("responsive");
    x.className = "navbar";
    /* Change icon */
    toggleIcon.classList.remove("fa-xmark");
    toggleIcon.classList.add("fa-bars");
  }
}

window.addEventListener("resize", removeResponsiveClass);
