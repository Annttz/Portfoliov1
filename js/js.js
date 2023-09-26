document.addEventListener("DOMContentLoaded", function () {

	'use strict';



	Splitting();
	luxy.init();
	gsap.registerPlugin(ScrollTrigger);

	const gTl = gsap.timeline();
	gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.04, ease: "back.out" });
	// gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

	const gsapSq = gsap.utils.toArray('.section-title__square');
	gsapSq.forEach((gSq, i) => {
		const rotat = gsap.from(gSq, 3, { rotation: 360 });
		ScrollTrigger.create({
			trigger: gSq,
			animation: rotat,
			start: 'top bottom',
			scrub: 1.9
		});
	});

	let mm = gsap.matchMedia();
	//footer
	mm.add("(min-width: 450px)", () => {
		function footer() {
			gsap.from('.footer__div span', {
				y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
				opacity: 0,
				scrollTrigger: {
					trigger: '.footer',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 1.9
				}
			})
		}
		footer();
	});
	
	function activerAnimation() {
		//header
		function header() {
			gsap.to('.title_paralax', {
				scrollTrigger: {
					trigger: '.header',
					start: 'top top',
					scrub: 1.9
				},
				yPercent: -150
			})
			gsap.to('.header .stroke', {
				scrollTrigger: {
					trigger: '.header',
					start: 'top top',
					scrub: 1.9
				},
				xPercent: 50
			})
		
			gsap.to('.header__marq-wrapp', {
				scrollTrigger: {
					trigger: '.header',
					start: 'top top',
					scrub: 1.9
				},
				xPercent: -50
			})
			gsap.to('.header__marq-star img', {
				scrollTrigger: {
					trigger: '.header',
					start: 'top top',
					scrub: 1.9
				},
				rotate: -720
			})
		}
		header();


		//about
		function about() {
			gsap.from('.about__img', {
				scrollTrigger: {
					trigger: '.about',
					start: 'top bottom',
					scrub: 1.9
				},
				yPercent: 80
			})

			gsap.from('.about__img img', {
				scrollTrigger: {
					trigger: '.about',
					start: 'top bottom',
					scrub: 1.9
				},
				scale: 1.6
			})
		}
		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about__wrapp',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 50
		})
	
		about();


		//benefits
		function benefits() {
			gsap.from('.benefits__num', {
				x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
				scrollTrigger: {
					trigger: '.benefits__list',
					start: 'top bottom',
					scrub: 1.9
				}
			})
		}
		benefits();


		//portfolio
		function portfolio() {

			gsap.from('.work__item-img img', {
				scale: 1.6,
				scrollTrigger: {
					trigger: '.work__wrapp',
					start: 'top bottom',
					scrub: 1.9
				}
			})
		}
		portfolio();

		//serv
		function serv() {
			gsap.from('.serv__item-arrow', {
				x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
				scrollTrigger: {
					trigger: '.serv__list',
					start: 'top bottom',
					scrub: 1.9
				}
			})
		}
		serv();
	


		}
	if (window.innerWidth >= 768) {
    activerAnimation();
	}
	window.addEventListener('resize', function() {
    // Obtenir la largeur actuelle de la fenêtre
    var largeurFenetre = window.innerWidth;

    // Vérifier si la largeur est inférieure à 768 pixels
    if (largeurFenetre < 768) {
        // Désactiver ou détruire l'animation ScrollTrigger
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
        });
    } else {
        // Activer l'animation si la largeur est de 768 pixels ou plus
        activerAnimation();
    }
	});
	ScrollTrigger.refresh();
});