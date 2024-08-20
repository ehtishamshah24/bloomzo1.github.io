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
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#bc9ddb"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


$(document).ready(function() {
    var currentIndex = 0;
    var items = $('#text-slider .slider-item');
    var itemAmt = items.length;

    function cycleItems() {
        var currentItem = items.eq(currentIndex);
        var previousIndex = currentIndex === 0 ? itemAmt - 1 : currentIndex - 1;
        var previousItem = items.eq(previousIndex);

        items.removeClass('active').removeClass('previous');
        previousItem.addClass('previous');
        currentItem.addClass('active');
    }

    var autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex >= itemAmt) {
            currentIndex = 0;
        }
        cycleItems();
    }, 3000); // Change text every 3 seconds
});

$(document).ready(function() {
    function adjustSliderHeight() {
        var maxHeight = 0;
        $('#text-slider .slider-item').each(function() {
            var itemHeight = $(this).outerHeight();
            if (itemHeight > maxHeight) {
                maxHeight = itemHeight;
            }
        });
        $('#text-slider').height(maxHeight);
    }

    adjustSliderHeight();
    $(window).resize(adjustSliderHeight); // Adjust height on window resize
});


// hide and show service section

$(document).ready(function() {
  $(".read-more").click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var $textDiv = $this.closest('.text');
      var $shortText = $textDiv.find('.short-text');
      var $fullText = $textDiv.find('.full-text');
      
      if ($shortText.is(':visible')) {
          $shortText.slideUp();
          $fullText.slideDown().addClass('show');
          $this.text('Read Less');
      } else {
          $fullText.slideUp().removeClass('show');
          $shortText.slideDown();
          $this.text('Read More');
      }
  });
});









