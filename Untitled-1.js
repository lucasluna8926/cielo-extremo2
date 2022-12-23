const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach(link => {
  link.addEventListener('click', handleClick);
});

function handleClick(event) {
    // Obtén el número de página solicitado
    const pageNumber = event.target.getAttribute('data-page');
  
    // Actualiza el carousel para mostrar la página solicitada
    $('#carouselExampleControls').slickGoTo(pageNumber - 1);
  }
  