window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

var image = document.querySelector('.image');
var pixelate = new Pixelate(image);

var output = document.getElementById('output');

var amount = 0;
var addAmount = 0.05;

function animate() {
  if (amount >= 1) {
    addAmount = addAmount * -1;
  } else if (amount <= 0) {
    addAmount = Math.abs(addAmount);
  }

  amount += addAmount;
  output.textContent = Math.round((amount * 100)) + '%';

  pixelate.setAmount(amount).render();
  requestAnimationFrame(animate);
}

animate();

window.onresize = function() {
  pixelate.setWidth(image.parentNode.clientWidth).render();
};
