function moveSlide() {
  var elmnt = document.getElementById('slider');
  var x = elmnt.scrollLeft;
  document.getElementById('demo').innerHTML = 'Horizontally: ' + x + 'px';
}

function moveRight() {
  let slide = document.getElementById('slider');
  slide.scrollLeft = 500;
}

function moveLeft() {
  let slide = document.getElementById('slider');
  slide.scrollLeft = -500;
}
