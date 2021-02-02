var particlesJson1 = {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": false,
                "value_area": 1040
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 2,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "images/canvas-dot.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#182987",
            "opacity": 1,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
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
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}
var particlesJson2 = {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": false,
                "value_area": 1040
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 2,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "images/canvas-dot2.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 40,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 40,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
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
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}


$(function () {
    
    particlesJS("particles-js1", particlesJson1);
    particlesJS("particles-js2", particlesJson2);

    $('.menu01').on('click', '.item', function () {
        var index = $(this).data('index');
        var degs = index * 45 + 90;
        $('.menu01').css('transform','rotate(-' + degs + 'deg)');
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.menu02-list').eq(index).addClass('on').siblings().removeClass('on');
    })

})