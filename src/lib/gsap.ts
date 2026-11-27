import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export const reducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export { gsap, ScrollTrigger }
