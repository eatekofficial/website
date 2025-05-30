import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Creates a fade-in-up animation for the specified elements
 * @param selector CSS selector for target elements
 * @param duration Animation duration in seconds
 * @param opacity Target opacity (0-1)
 * @returns GSAP timeline
 */
export const fadeInUp = (selector: string, duration = 0.5, opacity = 1) => {
  return gsap.timeline().fromTo(selector, { y: 50, opacity: 0 }, { y: 0, opacity, duration, ease: "power2.out" })
}

/**
 * Creates a staggered fade-in-up animation for multiple elements
 * @param selector CSS selector for target elements
 * @param stagger Stagger time between elements in seconds
 * @param duration Animation duration in seconds
 * @returns GSAP timeline
 */
export const staggerFadeInUp = (selector: string, stagger = 0.1, duration = 0.5) => {
  return gsap
    .timeline()
    .fromTo(selector, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger, duration, ease: "power2.out" })
}

/**
 * Creates a scroll trigger for an animation
 * @param trigger CSS selector for trigger element
 * @param animation GSAP timeline to trigger
 * @param start Start position (default: "top 80%")
 * @param toggleActions ScrollTrigger toggle actions (default: "play none none reverse")
 */
export const createScrollTrigger = (
  trigger: string,
  animation: gsap.core.Timeline,
  start = "top 80%",
  toggleActions = "play none none reverse",
) => {
  if (typeof window === "undefined") return

  ScrollTrigger.create({
    trigger,
    start,
    toggleActions,
    animation,
  })
}

/**
 * Creates a parallax scroll effect
 * @param selector CSS selector for target elements
 * @param speed Parallax speed (positive values move element up, negative down)
 */
export const createParallax = (selector: string, speed = 0.5) => {
  if (typeof window === "undefined") return

  gsap.to(selector, {
    y: () => speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
}
