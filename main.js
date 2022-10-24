'use strict'; 

const head= document.querySelector('#head');

const height = Number.parseFloat(getComputedStyle(document.querySelector('.landing')).height)

document.querySelector('.begain-arrow').addEventListener('click', function(e){
e.preventDefault();
document.querySelector('.articles').scrollIntoView({behavior:'smooth'})
})

const scrollingFun = function(entries, observe){
    const [enry] = entries;
    console.log(enry.isIntersecting)
    console.log(height)

    if(!enry.isIntersecting) head.style.position='sticky';
}
const scrollingObs = new IntersectionObserver(scrollingFun,{
    root:null,
    threshold:0,
    // rootMargin:`-${height}px`
})
scrollingObs.observe(document.querySelector('.landing'))