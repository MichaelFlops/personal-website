/* This allows the use of the particles js library using DOM after it loads. */
Template.layout.helpers({
  invokeAfterLoad: function () {
    Meteor.defer(function () {
      particlesJS('particles-js', {
        particles: {
          color: '#a3adcc',
          color_random: false,
          shape: 'circle', // "circle", "edge" or "triangle"
          opacity: {
            opacity: 1,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0,
              sync: false
            }
          },
          size: 1,
          size_random: false,
          nb: 150,
          line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 1
          }
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 300
          },
          detect_on: 'canvas', // "canvas" or "window"
          mode: 'grab', // "grab" of false
          line_linked: {
            opacity: .5
          },
          events: {
            onclick: {
              enable: true,
              mode: 'push', // "push" or "remove"
              nb: 4
            },
            onresize: {
              enable: true,
              mode: 'out', // "out" or "bounce"
              density_auto: false,
              density_area: 1000 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
          }
        },
        /* Retina Display Support */
        retina_detect: true
      });
    });
    return "";
  }
})

Template.hero.rendered = function() {

  // This needs to be fixed so that the variables are defined after hero is created WITH particles.
  // otherwise there is no distance set between the navbar's original positition and the screen top
  // This "works" in that the navbar sticks on scroll down, but it is glitchy because the vars keep
  // getting reassigned.

  $(window).scroll(function() {
  var navbar = $('.navbar');
  var origOffsetY = navbar.offset().top;
  console.log("navbar don't exist: ",navbar,origOffsetY)


    function scroll() {
      console.log("See if sticky")
        if ($(window).scrollTop() >= origOffsetY) {
          console.log("Sticky")
            $('.navbar').addClass('affix');
            $('.content').addClass('navbar-padding');
        } else {
          console.log("UnSticky:  WindowTop "+ $(window).scrollTop() + " >= offesetY" +origOffsetY +" ")
            $('.navbar').removeClass('affix');
            $('.content').removeClass('navbar-padding');
        }
    }
    document.onscroll = scroll;
  })
}
