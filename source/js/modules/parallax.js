import {gsap} from '../vendor/gsap/gsap.min';
import {ScrollTrigger} from '../vendor/gsap/ScrollTrigger.min';

gsap.registerPlugin(ScrollTrigger);

const initParallax = () => {
  // GSAP functional
  const figureContent = document.querySelector('[data="figure-content"] img');
  const imgTimeLine = gsap.timeline({paused: true});
  // начало анимации от и до
  imgTimeLine.fromTo(figureContent, {yPercent: 5, scale: 1.15}, {yPercent: -5, scale: 1.35});

  ScrollTrigger.create({
    animation: imgTimeLine,
    scrub: true,
    trigger: figureContent,
    start: 'top center',
    end: 'bottom top',
  });
};

export {initParallax};
