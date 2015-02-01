var image = document.querySelector('.image');
var pixelate = new Pixelate(image);

var output = document.getElementById('output');

var amount = 0;
var addAmount = 0.001;

function animate() {
  if (amount >= 1) {
    addAmount = addAmount * -1;
  } else if (amount <= 0) {
    addAmount = Math.abs(addAmount);
  }

  amount += addAmount;
  output.textContent = (amount * 100).toFixed(2) + '%';

  pixelate.setAmount(amount).render();
  requestAnimationFrame(animate);
}

animate();

window.onresize = function() {
  pixelate.setWidth(image.parentNode.clientWidth).render();
};
