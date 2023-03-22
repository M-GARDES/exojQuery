$(document).ready(function() {
  let images = ["img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg"];
  let index = 0;
  let duration = 5000; // durée en millisecondes

  // afficher l'image suivante
  function showNextImage() {
    $("img").fadeOut("slow", function() {
      $(this).attr("src", images[index]);
      $(this).fadeIn("slow");
      index++;
      if (index >= images.length) {
        index = 0;
      }
    });
  }

  // démarrer le diaporama
  setInterval(showNextImage, duration);
});
