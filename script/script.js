//Index

gsap.registerPlugin(ScrollTrigger);

gsap.from(['.fleche-down'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
});

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

/*
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

const sprite = document.querySelectorAll('.sprite');
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

