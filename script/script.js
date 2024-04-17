//Index

gsap.registerPlugin(ScrollTrigger);

const chap1SpriteStand = document.querySelector('#chapitre1 .man');
const chap2SpriteJ = document.querySelector('#chapitre2 .man');
const chapitre1 = document.querySelector('#chapitre1');
const chapitre2 = document.querySelector('#chapitre2');
const bodyIndex = document.querySelector('body');

gsap.timeline().from(['.fleche-down'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
}).to(chap1SpriteStand, {
    x: '80vw',
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
).to('#chapitre1 .sol-1', { scrub: 1,x: '-500px', duration: 3}, '-=5')
.to('#chapitre1 .roche', { scrub: 1,x: '-10vw', duration: 3}, '-=2' )
.to('#chapitre2 .sprite.man', {
    x: '30vmin',
    duration: 5,
    onStart: () => {
        bodyIndex.classList.add('is-scrolling');
        chap2SpriteJ.classList.add('walkJ');
        chapitre2.classList.add('bgMove');
    },
    onComplete: () => {
        chap2SpriteJ.classList.remove('walkJ');
        chap2SpriteJ.classList.add('standJ');
        chapitre2.classList.add('bgMoveStop');
    }
    }, '-=0.5'
).to('#chapitre2 .sol-1', { scrub: 1,x: '-500px', duration: 3}, '-=5')
.to('#chapitre2 .roche', { scrub: 1,x: '-10vw', duration: 3}, '-=3' )
.to('#chapitre2 .sprite.frog, #chapitre2 .cercleBlanc', { scrub: 1,x: '-8vmin', duration: 3}, '-=3' )
.to('.cercleBlanc', { scale: 1.4, repeat: -1, duration: 4,  yoyo: true, ease: 'power1'}, '-=5')
.to('#chapitre3 .papier, #chapitre3 .sprite.man', { y: '300vh', duration: 10, ease:'ease.in'})
.to('#chapitre3 .sprite.man', { rotation: 360, duration: 1.5, ease:'none', repeat: -1}, '-=12')
.to('#chapitre3 .papier', { rotation: 360, duration: 2, ease:'bounce', yoyo: true, repeat: -1}, '-=8')

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
    window.addEventListener('scroll', () => {
        let y = window.scrollY;
        body.classList.add('is-scrolling');
        setTimeout(removeClassIsScrolling, 100);
      });
      
      function removeClassIsScrolling() {
          body.classList.remove('is-scrolling');
      }
      
      function addClassIsScrolling() {
          body.classList.add('is-scrolling');
      }
}


