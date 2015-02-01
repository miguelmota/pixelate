# Pixelate

Pixelate an image with canvas.

# Demo

[http://lab.moogs.io/pixelate](http://lab.moogs.io/pixelate)

# Install

```bash
bower install pixelate
```

# Usage

```javascript
var image = document.querySelector('.image');
var pixelate = new Pixelate(image, {
  amount: 0.7, // default: 0.7, pixelation percentage amount (range from 0 to 1)
});
```

Re-render with different amount:

```javascript
pixelate.setAmount(0.5).render();
```

Make it responsive:

```javascript
window.onresize = function() {
  pixelate.setWidth(image.parentNode.clientWidth).render();
};
```

# License

MIT
