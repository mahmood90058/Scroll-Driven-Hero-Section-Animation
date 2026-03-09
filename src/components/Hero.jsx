import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Stats from "./Stats"
import Car from "./Car"

gsap.registerPlugin(ScrollTrigger)

function Hero() {

  const titleRef = useRef(null)
  const statsRef = useRef([])
  const carRef = useRef(null)
  const sectionRef = useRef(null)

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const letters = titleRef.current.querySelectorAll("span")

      // Intro timeline
      const tl = gsap.timeline()

      tl.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out"
        }
      )

      tl.to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8
        },
        "-=0.3"
      )

      // Scroll animation
      gsap.to(carRef.current, {

        x: 800,
        rotate: 5,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true
        }

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  const text = "WELCOME ITZ FIZZ"

  return (

    <section
      ref={sectionRef}
      className="h-screen flex flex-col justify-center items-center text-center"
    >

      <h1
        ref={titleRef}
        className="text-6xl tracking-[18px] font-bold mb-10"
      >

        {text.split("").map((letter, index) => (
          <span key={index} className="inline-block opacity-0">
            {letter}
          </span>
        ))}

      </h1>

      <Car carRef={carRef} />

      <Stats statRef={statsRef} />

    </section>

  )

}

export default Hero