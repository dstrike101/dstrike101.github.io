document.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById('box');
  var step = 30; // Number of pixels to move on each key press

  document.addEventListener('keydown', function(e) {
    var currentLeft = parseInt(box.style.left) || 0;
    var currentTop = parseInt(box.style.top) || 0;

    switch (e.key) {
      case 'ArrowLeft':
        box.style.left = (currentLeft - step) + 'px';
        break;
      case 'ArrowRight':
        box.style.left = (currentLeft + step) + 'px';
        break;
      case 'ArrowUp':
        box.style.top = (currentTop - step) + 'px';
        break;
      case 'ArrowDown':
        box.style.top = (currentTop + step) + 'px';
        break;
    }
  });
});