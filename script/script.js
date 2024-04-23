//Index

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const chap1SpriteStand = document.querySelector('#chapitre1 .man');
const chap2SpriteJ = document.querySelector('#chapitre2 .man');
const chap4SpriteJ = document.querySelector('#chapitre4 .man');
const chap5SpriteJ = document.querySelector('#chapitre5 .man');
const chapitre1 = document.querySelector('#chapitre1');
const chapitre2 = document.querySelector('#chapitre2');
const chapitre4 = document.querySelector('#chapitre4');
const chapitre5 = document.querySelector('#chapitre5');
const bodyIndex = document.querySelector('body');

gsap.timeline().from(['.fleche-down'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
}).to('#chapitre1', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre1',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
})
.from(chap1SpriteStand, {
    x: '-80vw',
    duration: 5,
    onStart: () => {
        bodyIndex.classList.add('is-scrolling')
        chap1SpriteStand.classList.remove('standJ');
        chap1SpriteStand.classList.add('walkJ');
        chapitre1.classList.add('bgMove');
    },
    onComplete: () => {
        chapitre1.classList.add('bgMoveStop');
    }
    }, '-=0.5'
).to('#chapitre1 .text',{
    duration: 8,
    text: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père.",
    ease: "none"
}, '-=5')
.fromTo('#chapitre1 .sol-1', {x: 0}, { scrub: 1,x: '-500px', duration: 3}, '-=8')
.fromTo('#chapitre1 .roche', {x: 0}, { scrub: 1,x: '-10vw', duration: 3}, '-=2.6' )
.to('#chapitre2', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre2',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
})
.fromTo('#chapitre2 .sprite.man', {x: 0}, {
    x: '30vmin',
    duration: 5,
    onStart: () => {
        bodyIndex.classList.add('is-scrolling');
        chapitre2.classList.add('bgMove');
    },
    onComplete: () => {
        chap2SpriteJ.classList.remove('walkJ');
        chap2SpriteJ.classList.add('standJ');
        chapitre2.classList.add('bgMoveStop');
    }
    }, '-=0.5'
).to('#chapitre2 .text', {
    duration: 8,
    text: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père.",
    ease: "none"
}, '-=5').fromTo('#chapitre2 .sol-1', {x: 0}, { scrub: 1,x: '-500px', duration: 3}, '-=8')
.fromTo('#chapitre2 .roche', {x: 0}, { scrub: 1,x: '-10vw', duration: 3}, '-=3')
.fromTo('#chapitre2 .sprite.frog, #chapitre2 .cercleBlanc', {x: 0}, { scrub: 1,x: '-8vmin', duration: 3}, '-=3' )
.fromTo('.cercleBlanc', {scale: 1}, { scale: 1.4, repeat: -1, duration: 4,  yoyo: true, ease: 'power1'}, '-=5')
.to('#chapitre3 .text', {
    duration: 8,
    text: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père.",
    ease: "none"
}, '-=5')
.fromTo('#chapitre3 .papier, #chapitre3 .sprite.man', {y: 0}, { y: '380vh', duration: 10, ease:'ease.in'}, '-=8')
.fromTo('#chapitre3 .sprite.man',{}, { rotation: 360, duration: 2, ease:'none', repeat: -1}, '-=12')
.fromTo(['#chapitre3 .fromeBriser'], {y: 0}, { y: '50vh', duration: 5, stagger: { each: 2}}, '-=8')
.fromTo('#chapitre3 .papier', {rotation: 0}, { rotation: 360, duration: 2, ease:'bounce', yoyo: true, repeat: -1}, '-=8');

let timeline2 = gsap.timeline().from('#chapitre4', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre4',
        start: 'top 0%',
        end: '300% 5%',
        pin: true,
    }
}).fromTo('#chapitre4 .sprite.man', {x: 0},{
    x: '70vw',
    duration: 5,
    onStart: () => {
        if (bodyIndex.classList.contains('is-scrolling') != true) {
            bodyIndex.classList.add('is-scrolling');
        }
        chap4SpriteJ.classList.add('walkJ');
        chapitre4.classList.add('bgMove');
    },
    onComplete: () => {
        chap4SpriteJ.classList.remove('walkJ');
        chap4SpriteJ.classList.add('standJ');
        chapitre4.classList.add('bgMoveStop');
    }
    },
).to('#chapitre4 .text', {
    duration: 8,
    text: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père.",
    ease: "none"
}, '-=5')
.fromTo('#chapitre4 .sol-1, #chapitre4 .sol-2', {x: 0}, { scrub: 1,x: '-300px', duration: 3}, '-=8')
.fromTo('#chapitre4 .roche', {x: 0}, { scrub: 1,x: '-10vw', duration: 3}, '-=8')
.fromTo('#chapitre4', {opacity: 1, duration: 3}, {opacity: 0}, '+=2')
.fromTo('#chapitre5', {opacity: 0, duration: 3}, {opacity: 1},)
.from('#chapitre5', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre5',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
})
.fromTo('#chapitre5 .sprite.man', {x: 0}, {
    x: '50vw',
    duration: 5,
    onStart: () => {
        if (bodyIndex.classList.contains('is-scrolling') != true) {
            bodyIndex.classList.add('is-scrolling');
        }
        chap5SpriteJ.classList.add('walkJ');
        chapitre5.classList.add('bgMove');
    },
    onComplete: () => {
        chap5SpriteJ.classList.remove('walkJ');
        chap5SpriteJ.classList.add('standJ');
        chapitre5.classList.add('bgMoveStop');
    }
    },)
.to('#chapitre5 .text', {
    duration: 8,
    text: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père.",
    ease: "none"
}, '-=5').to('#chapitre5 .sol-1, #chapitre4 .sol-2', { scrub: 1,x: '-300px', duration: 3}, '-=8')
.fromTo(['#chapitre5 .roche'], {x: 0}, { scrub: 1,x: '-10vw', duration: 3, stagger: { each: 0.5}}, '-=8')
.to('#chapitre6 .text', {
    duration: 8,
    text: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père.",
    ease: "none"
}, '-=5')

/*
gsap.from(['.fleche-down'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
});



gsap.to(chap1SpriteStand, { x: '100px', duration: 5});
*/
/*
gsap.utils.toArray('section').forEach((chap) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: chap,
            start: 'top 100%',
            end: '50% 0',
            markers: true,
            toggleActions: 'play pause reverse pause',
        }
    }).to(chap, {x: 100, duration: 1});
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.all',
        start: 'top center',
        end: '+=2000px',
        markers: true,
        scrub: true,
        pin: true,
        toggleActions: 'restart pause reverse pause',
    },
})

tl.to(['.sprite'], {
    y: '-30px',
    ease: 'none',
    duration: 1,
})
.to(['.sprite'], {
    y: '10px',
    backgroundColor: 'red',
    ease: 'none',
    duration: 1,
})
.to(['.sprite'], {
    backgroundColor: 'rgba(0,0,0,0)',
    ease: 'none',
    duration: 1,
});
*/

//SrpiteSheet

const all = document.querySelector('.all');
const sprite = document.querySelectorAll('.sprite');

if (all != null) {
    const body = document.querySelector('body');
    let scroll;

    window.addEventListener('scroll', () => {
        body.classList.add('is-scrolling');
        window.clearTimeout(scroll);
        scroll = setTimeout(removeClassIsScrolling, 100);
      });
      
      function removeClassIsScrolling() {
          body.classList.remove('is-scrolling');
      }
      /*
      function addClassIsScrolling() {
          body.classList.add('is-scrolling');
      }
      */
}


