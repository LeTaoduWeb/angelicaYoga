//Obtenir le bouton
mybutton = document.getElementById("topBtn");

// Montrer le bouton lorsque l'utilisateur descend au-dessus de 100px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, la page remonte vers le haut
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}