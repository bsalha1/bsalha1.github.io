/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
      particles:
      {

        // Number of particles
        number:
        {
          value: 80,
          density:
          {
            enable: true,
            value_area: 800
          }
        },

        // Color of particles
        color:
        {
          value: "#ffffff"
        },

        // Opacity of particles
        opacity:
        {
          enable: true,
          value: 0.5,
          random: true,
          anim:
          {
            enable: true,
            speed: 1.0,
            opacity_min: 0.1
          },
        },

        // Size of particles
        size:
        {
          value: 8,
          random: true
        },

        // Shape of particles
        shape:
        {
          type: "edge"
        },

        // Movement attributes
        move:
        {
          enable: true,
          speed: 5
        },

        // Line linked
        line_linked:
        {
          enable: false
        },

        interactivity:
        {
          onhover:
          {
            enable: true,
            mode: "repulse"
          }
        }
      }
    }
);