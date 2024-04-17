


  var miBoton = document.getElementById('nav-menu');
  var navElement = document.querySelector('.nav');


miBoton.addEventListener('click', function() {
 
  var currentDisplay = navElement.style.display;

  if (currentDisplay === 'none' || currentDisplay === '') {
    navElement.style.display = 'block';
  } else {
    navElement.style.display = 'none';
  }
});