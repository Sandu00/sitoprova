document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.animated-text');

  
  function animateText() {
      setTimeout(function() {
          textElement.style.opacity = 1; 
          setTimeout(function() {
              textElement.style.opacity = 0;
              animateText(); 
          }, 3000); 
      }, 1000);
  }

  animateText();
});
