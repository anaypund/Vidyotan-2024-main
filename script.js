

// GSAP animation for navbar elements
const navbar = document.getElementById('navbar');
const logo = navbar.querySelector('img.w-16');
const title = navbar.querySelector('h1');
const naccImage = navbar.querySelector('img.md\\:w-\\[120px\\]');

// Create a GSAP timeline
const tl = gsap.timeline();

// Define the animation sequence
tl.from(logo, { duration: 1, opacity: 0, y: -20 })
  .from(title, { duration: 1, opacity: 0, y: -20 }, '-=0.5')
  .from(naccImage, { duration: 1, opacity: 0, y: -20 }, '-=0.5');

// Play the timeline when the page loads or when needed
tl.play();

gsap.from('#vidlogo',{
  y:-50,
  duration:1.5,
  opacity:0

})


gsap.from('#name',{
  y:50,
  duration:1.5,
  opacity:0

})


gsap.registerPlugin(ScrollTrigger);

const revealTextElements = document.querySelectorAll('.reveal-text');

revealTextElements.forEach((element) => {
    gsap.set(element, { opacity: 1, y: -20 });

    const revealTL = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Adjust start point as needed
            end: 'bottom 80%', // Adjust end point as needed
            toggleActions: 'play none none reverse', // Keep the element fully visible when scrolled into view
            // markers: true // Add markers for visualization (can be removed in production)
        }
    });

    revealTL.from(element, {
        opacity:0,
        y:0,
        duration: 1,
        // ease: 'power2.out'
    });
});






particlesJS("particles-js", {
  particles: {
    number: { value: 170, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.6397441023590567,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 207.91683326669335,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

particlesJS("particles-js", {
  particles: {
    // Particle configurations
  },
  interactivity: {
    // Interactivity configurations
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 768,
        },
        options: {
          canvas: {
            height: "100%",
          },
        },
      },
      // Add more rules for different screen sizes if needed
    ],
  },
});


