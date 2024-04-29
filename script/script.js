//Index

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin)

const chap1SpriteStand = document.querySelector('#chapitre1 .man');
const chap2SpriteJ = document.querySelector('#chapitre2 .man');
const chap4SpriteJ = document.querySelector('#chapitre4 .man');
const chap5SpriteJ = document.querySelector('#chapitre5 .man');
const chapitre1 = document.querySelector('#chapitre1');
const chapitre2 = document.querySelector('#chapitre2');
const chapitre4 = document.querySelector('#chapitre4');
const chapitre5 = document.querySelector('#chapitre5');
const bodyIndex = document.querySelector('body');

let timeline = gsap.timeline().from(['.fleche-down'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
})

const techniqueGsap = document.querySelector('.technique-gsap');
let scrollIndex;
if (techniqueGsap != null) {
    window.addEventListener('scroll', () => {
        bodyIndex.classList.add('is-scrolling');
        window.clearTimeout(scrollIndex);
        scrollIndex = setTimeout(removeClassIsScrolling, 100);
    });

    function removeClassIsScrolling() {
        bodyIndex.classList.remove('is-scrolling');
    }
}

//Chapitre 1

let timeline1 = gsap.timeline({
    duration: 40,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre1',
        start: 'top 10%',
        end: '150% 0',
        toggleActions: 'play pause reverse pause',
    }
}).to('#chapitre1', {
    backgroundPosition: "-10% 0",
    ease: "ease.out",
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre1',
        start: 'top 0%',
        end: '180% 5%',
        pin: true,
    }
})
.from(chap1SpriteStand, {
    x: '-80vw',
    duration: 40,
    onStart: () => {
        chap1SpriteStand.classList.remove('standJ');
        chap1SpriteStand.classList.add('walkJ');
        chapitre1.classList.add('bgMove');
    },
    onComplete: () => {
        chapitre1.classList.add('bgMoveStop');
    }
    }, '-=40.5'
).to('#chapitre1 .text',{
    duration: 8,
    text: {
        speed: 1,
        value: "Je m\'avance dans ce rêve qui m\'est inconnu.",
    },
    ease: "none"
}, '-=45')
.fromTo('#chapitre1 .sol-1', {x: 0}, { scrub: 1,x: '-50vw', duration: 60}, '-=48')
.fromTo('#chapitre1 .roche', {x: 0}, { scrub: 1,x: '-10vw', duration: 60}, '-=48');

//Chapitre 2

const tl2 = gsap.timeline().fromTo('.cercleBlanc', {scale: 1}, { scale: 1.4, repeat: -1, duration: 4,  yoyo: true, ease: 'power1'}, '-=32');

let timeline2 = gsap.timeline({
    duration: 60,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre2',
        start: 'top 10%',
        end: '150% 0',
        toggleActions: 'play pause reverse pause',
    }
}).to('#chapitre2', {
    backgroundPosition: "-10% 0",
    ease: "none",
    duration: 60,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre2',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
})
.fromTo('#chapitre2 .sprite.man', {x: 0}, {
    x: '30vmin',
    duration: 68,
    onStart: () => {
        chap2SpriteJ.classList.add('walkJ');
        chapitre2.classList.add('bgMove');
    },
    onComplete: () => {
        chap2SpriteJ.classList.remove('walkJ');
        chap2SpriteJ.classList.add('standJ');
        chapitre2.classList.add('bgMoveStop');
    }
    }, '-=60.5'
).to('#chapitre2 .text', {
    duration: 10,
    text: "Je vois un carpeau de lumière qui m\'emporte plus loin dans ce rêve des plus intrigant.",
    ease: "none"
}, '-=5').fromTo('#chapitre2 .sol-1', {x: 0}, { scrub: 1,x: '-500px', duration: 60}, '-=68')
.fromTo('#chapitre2 .roche', {x: 0}, { scrub: 1,x: '-10vw', duration: 60}, '-=68')
.fromTo('#chapitre2 .sprite.frog, #chapitre2 .cercleBlanc', {x: 0}, { scrub: 1,x: '-8vmin', duration: 20}, '-=68')
.fromTo('#chapitre2', {opacity: 1}, {opacity: 0, duration: 5, ease: 'ease.out'}, '+=5')
//.fromTo('.cercleBlanc', {scale: 1}, { scale: 1.4, repeat: -1, duration: 4,  yoyo: true, ease: 'power1'}, '-=32');

//Chapitre 3
const textChap3 = document.querySelector('#chapitre3 .textBox');
const chap1papierUn = document.querySelector('#chapitre3 .un');
const pathOne = document.querySelector('#pathOne');
const pathTwo = document.querySelector('#pathTwo');
const pathTree = document.querySelector('#pathTree');
const pathFour = document.querySelector('#pathFour');

let tl = gsap.timeline().from('#chapitre3 .sprite.man',{ rotation: 360, duration: 2, ease:'none', repeat: -1})
.from('#chapitre3 .papier', { rotation: 360, duration: 2, ease:'ease', yoyo: true, repeat: -1});

let timeline3 = gsap.timeline({
    duration: 8,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre3',
        start: 'top 100%',
        end: '75% 0',
        toggleActions: 'play pause reverse pause',
        onEnter: () => { 
            textChap3.classList.add('fixed');
        }, 
        onLeave: () => {
            textChap3.classList.remove('fixed');
        },
        onLeaveBack: () => {
            textChap3.classList.remove('fixed');
        },
        onEnterBack: () => {
            textChap3.classList.remove('fixed');
        }
    }
}).from('#chapitre3 .text', {
    duration: 20,
    text: {
        speed: 0.3,
        value: "♦♦♦♦♦♦♦♦♦♦♦¿♦♦♦♦♦♦♦♦♦¿♦♦♦♦♦♦♦♦♦♦♦¿♦♦♦♦\n♦♦♦♦♦♦♦♦♦¿♦♦♦♦♦♦♦♦♦¿♦♦♦♦♦♦♦♦♦♦♦¿♦♦",
    },
    ease: "none",
}, '-=8').fromTo('#chapitre3 .papier.cinq, #chapitre3 .papier.six, #chapitre3 .sprite.man', {y: 0}, { y: '400vh', duration: 90, ease:'none'}, '-=8')
.fromTo(['#chapitre3 .fromeBriser'], {y: 0}, { y: '50vh', duration: 5, stagger: { each: 2}}, '-=80')
.from('#chapitre3 .papier.un', {
    duration: 70,
    motionPath:{
      path: pathOne,
      align: pathOne,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: 0.6,
      end: 0,
    }}, '-=80')
.from('#chapitre3 .papier.deux', {
    duration: 70,
    motionPath:{
        path: pathTwo,
        align: pathTwo,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.6,
        end: 0,
    }}, '-=80')
.from('#chapitre3 .papier.troix', {
    duration: 70,
    motionPath:{
        path: pathTree,
        align: pathTree,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.6,
        end: 0,
    }}, '-=80')
.from('#chapitre3 .papier.quatre', {
    duration: 70,
    motionPath:{
        path: pathFour,
        align: pathFour,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0.6,
        end: 0,
    }}, '-=80')
//.from('#chapitre3 .sprite.man',{ rotation: 360, duration: 2, ease:'none', repeat: -1})
//.from('#chapitre3 .papier', { rotation: 360, duration: 2, ease:'bounce', yoyo: true, repeat: -1})


//Chapitre 4

let timeline4 = gsap.timeline({
    duration: 60,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre4',
        start: 'top 50%',
        end: '150% 0',
        toggleActions: 'play pause reverse pause',
    }
}).from('#chapitre4', {
    backgroundPosition: "-10% 0",
    ease: "ease.out",
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre4',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
}).fromTo('#chapitre4 .sprite.man', {x: '-70vw'},{
    x: '70vw',
    duration: 60,
    onStart: () => {
        chap4SpriteJ.classList.add('walkJ');
        chapitre4.classList.add('bgMove');
    },
    onComplete: () => {
        chap4SpriteJ.classList.remove('walkJ');
        chap4SpriteJ.classList.add('standJ');
        chapitre4.classList.add('bgMoveStop');
    }
    }, '-=5'
).to('#chapitre4 .text', {
    duration: 8,
    text: {
        value: "Je touche le fond. Je vois une entrée. Je rentre.",
        speed: 0.5,
    },
    ease: "none"
}, '-=65')
.fromTo('#chapitre4 .sol-1, #chapitre4 .sol-2', {x: 0}, { scrub: 1,x: '-50vw', duration: 60}, '-=50')
.fromTo('#chapitre4 .roche', {x: 0}, { scrub: 1,x: '-10vw', duration: 60}, '-=50')
.fromTo('#chapitre4',{opacity: 1}, {opacity: 0, duration: 10, ease: 'ease.out'}, '+=5');

//Chapitre 5

const effectObjectGrotteChap5 = gsap.timeline()
.fromTo(['#chapitre5 .object'], {y: 0, opacity: 0.3}, {y: '10vh', opacity: 1, repeat: -1, yoyo: true, duration: 2, stagger: { each: 0.2}}, '-=60')
.fromTo(['#chapitre5 .effect'], {scale: 1}, {scale: 1.5, repeat: -1, yoyo: true, duration: 3});

effectObjectGrotteChap5.pause();

let timeline5 = gsap.timeline({
    duration: 60,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chapitre5',
        start: 'top 50%',
        end: '150% 0',
        toggleActions: 'play pause reverse pause',
        onEnter: () => {
            effectObjectGrotteChap5.play();
        },
        onLeave: () => {
            effectObjectGrotteChap5.pause();
        }
    }
}).from('#chapitre5', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre5',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
})
.fromTo('#chapitre5', {opacity: 0}, {opacity: 1, duration: 10, ease: 'ease.in'})
.fromTo('#chapitre5 .sprite.man', {x: 0}, {
    x: '50vw',
    duration: 60,
    onStart: () => {
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
    duration: 20,
    text: {
        value: "Je rentre dans une grotte émerveillant rempli d\'étoiles.",
        speed: 0.5,
    },
    ease: "none"
}, '-=65').to('#chapitre5 .sol-1, #chapitre4 .sol-2', { scrub: 1,x: '-300px', duration: 10}, '-=55')
.fromTo(['#chapitre5 .roche'], {x: 0}, { scrub: 1,x: '-10vw', duration: 10, stagger: { each: 0.5}}, '-=55');


//Chapitre 6

const effectObjectGrotteChap6 = gsap.timeline()
.fromTo(['#chapitre6 .object'], {y: 0, opacity: 0.3}, {y: '10vh', opacity: 1, repeat: -1, yoyo: true, duration: 2, stagger: { each: 0.2}}, '-=60')
.fromTo(['#chapitre6 .effect'], {scale: 1}, {scale: 1.5, repeat: -1, yoyo: true, duration: 3});

effectObjectGrotteChap6.pause();

let timeline6 = gsap.timeline({
    duration: 60,
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre6',
        start: 'top 50%',
        end: '150% 0',
        toggleActions: 'play pause reverse pause',
        onEnter: () => {
            effectObjectGrotteChap6.play();
        },
    }
}).from('#chapitre6', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#chapitre6',
        start: 'top 0%',
        end: '300% 5%',
        pin: true,
    }
}).to('#chapitre6 .text', {
    duration: 20,
    text: {
        value: "J\'admire les étoiles.",
        speed: 1,
    },
    ease: "none"
});


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