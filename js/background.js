(function () {
  // Gradient animation
  const bg = document.getElementById("gradient-bg");
  window.colors = [
    [179, 217, 255], // Light Blue
    [179, 255, 255], // Light Cyan
    [217, 255, 242], // Light Mint
    [200, 200, 255], // Light Periwinkle
  ];

  // Start with random color index
  window.t = Math.random() * colors.length;

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function updateGradient() {
    t += 0.002;

    // Create smooth transitions between colors
    const i1 = Math.floor(t) % colors.length;
    const i2 = (i1 + 1) % colors.length;
    const i3 = (i2 + 1) % colors.length;

    const mix = t % 1;

    // Interpolate between colors
    const c1 = colors[i1].map((c, i) => lerp(c, colors[i2][i], mix));
    const c2 = colors[i2].map((c, i) => lerp(c, colors[i3][i], mix));

    // Create mesh gradient
    bg.style.background = `
              radial-gradient(at 0% 0%, rgba(${c1.join(
                ","
              )},0.9) 0%, transparent 50%),
              radial-gradient(at 100% 0%, rgba(${c2.join(
                ","
              )},0.9) 0%, transparent 50%),
              radial-gradient(at 100% 100%, rgba(${c1.join(
                ","
              )},0.9) 0%, transparent 50%),
              radial-gradient(at 0% 100%, rgba(${c2.join(
                ","
              )},0.9) 0%, transparent 50%)
            `;

    requestAnimationFrame(updateGradient);
  }

  // Dynamic noise effect
  const noise = document.getElementById("noise");
  const noiseCanvas = document.createElement("canvas");
  const noiseCtx = noiseCanvas.getContext("2d");

  noiseCanvas.width = 256;
  noiseCanvas.height = 256;

  function updateNoise() {
    const imageData = noiseCtx.createImageData(
      noiseCanvas.width,
      noiseCanvas.height
    );
    const pixels = imageData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const value = Math.random() * 255;
      pixels[i] = value; // R
      pixels[i + 1] = value; // G
      pixels[i + 2] = value; // B
      pixels[i + 3] = 255; // A
    }

    noiseCtx.putImageData(imageData, 0, 0);
    noise.style.background = `url(${noiseCanvas.toDataURL()})`;

    requestAnimationFrame(updateNoise);
  }

  // updateGradient();
  // updateNoise();
})();
