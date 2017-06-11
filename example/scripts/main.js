window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

var image = document.querySelector('.image');
var pixelate = new Pixelate(image);

var slider = document.querySelector('.slider');
var output = document.getElementById('output');

slider.addEventListener('input', function(event) {
  var amount = event.currentTarget.value;

  update(amount);
});

function update(amount) {
  output.textContent = Math.round(amount) + '%';
  pixelate.setAmount(amount / 100).render();
}

window.onresize = function() {
  pixelate.setWidth(image.parentNode.clientWidth).render();
};

update(slider.value)
