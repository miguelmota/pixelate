# Pixelate

Pixelates an image with canvas by scaling the image down and stretching. The original image `src` is replaced with the canvas image [`dataURL`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL).

<img src="https://raw.githubusercontent.com/miguelmota/pixelate/master/screenshot.gif" width="400" />

# Demo

[https://lab.miguelmota.com/pixelate](https://lab.miguelmota.com/pixelate)

# Install

```bash
npm install pixelate
```

# Usage

Basic example:

```javascript
var image = document.querySelector('.image');
var pixelate = new Pixelate(image, {
  amount: 0.7, // default: 0, pixelation percentage amount (range from 0 to 1)
});
```

Another example:

```javascript
var image = new Image();
image.src = 'images/street.jpeg';

var pixelate = new Pixelate(image, {amount: 0.7});
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
