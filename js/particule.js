// Attendons que votre site web soit prêt
document.addEventListener("DOMContentLoaded", function () {
  // Création du containeur de script qui ajouter Particles.JS à votre site
  let partJS = document.createElement("script");
  partJS.setAttribute(
    "src",
    "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
  );
  partJS.addEventListener("load", launchParticules);
  document.body.appendChild(partJS);
  // Création du conteneur qui recevera les flocons de neige
  let snowJS = document.createElement("div");
  snowJS.setAttribute("id", "snow-js");
  snowJS.setAttribute(
    "style",
    "position: absolute;width: 100%;height: 100%;z-index: -1;top:0px;opacity:0;transition: opacity 1s ease-in;"
  );
  document.body.appendChild(snowJS);
  // Fade in the snow effect
  setTimeout(() => {
    snowJS.style.opacity = "1";
  }, 100);

  // Lancement des particules, avec Particles.JS
  function launchParticules() {
    particlesJS("snow-js", {
      particles: {
        number: {
          value: 32,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#FF69B4", // Couleur rose fixe
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble",
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }
});
