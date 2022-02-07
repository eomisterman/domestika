const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min
}

const drawStar = (x, y) => {
  return ({context, width, height}) => {
    context.fillStyle = 'black';

    // const x = width/2;
    // const y = height/2;
    const w = width * 0.01;
    const h = height * 0.1;

    const numLines = 12;

    for(let i = 0; i < numLines; i++) {
      context.save();
      context.translate(x, y);
      context.rotate(degToRad(i * (360/numLines)));

      context.beginPath();
      context.rect(w * -0.5, h * -0.5, w, h);
      context.fill();
      context.restore();
    }
  }
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width/2;
    const cy = height/2;

    const w = width * 0.01;
    const h = height * 0.1;

    let x,y;

    const numLines = 12;
    const radius = width * 0.3;

    for(let i = 0; i < numLines; i++) {
      const slice = math.degToRad(360/numLines);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 3), 1)

      context.beginPath();
      context.rect(w * -0.5, h * -0.5, w, h);
      context.fill();
      context.restore();
    }

    // context.save();
    // context.translate(x, y);
    // context.rotate(degToRad(45));

    // context.beginPath();
    // context.rect(w * -0.5, h * -0.5, w, h);
    // context.fill();
    // context.restore();

    // context.translate(100, 400);

    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();
  };
};

canvasSketch(sketch, settings);
