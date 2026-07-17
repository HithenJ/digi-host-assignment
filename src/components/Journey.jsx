import { useEffect, useRef, useState } from 'react'
import PhilosophyCards from './PhilosophyCards'
import { questions } from '../data/content'
import digihostImg from '../assets/digihost.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const gallery = [img1, img2, img3, img4, img5]

function Journey() {
  const headingRef = useRef(null)
  const storyRef = useRef(null)
  const philosophyRef = useRef(null)
  const [headingVisible, setHeadingVisible] = useState(false)
  const [storyVisible, setStoryVisible] = useState(false)
  const [philosophyVisible, setPhilosophyVisible] = useState(false)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true)
          observer.unobserve(heading)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(heading)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const philosophy = philosophyRef.current
    if (!philosophy) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhilosophyVisible(true)
          observer.unobserve(philosophy)
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(philosophy)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const story = storyRef.current
    if (!story) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true)
          observer.unobserve(story)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(story)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="brand-soul" className="overflow-hidden bg-cream py-20 sm:py-28">
      {/* Heading + questions */}
      <div className="mx-auto max-w-6xl px-6">
        <h2 ref={headingRef} className="text-2xl leading-tight font-medium text-[#052C27] sm:text-3xl md:text-5xl">
          <span className={`block transition-transform duration-1000 ease-out ${headingVisible ? 'translate-x-0' : '-translate-x-full'}`}>
            My journey didn’t start with a business plan
          </span>
          <span className={`mt-2 block transition-transform delay-200 duration-1000 ease-out ${headingVisible ? 'translate-x-0' : '-translate-x-full'}`}>
            It started with questions
          </span>
        </h2>

        <div className="mt-10 md:mt-16 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-6 md:col-start-2">
            {questions.map((q, index) => (
              <p
                key={q}
                className="text-xl leading-relaxed text-[#3A3A3A]"
                style={{
                  transform: headingVisible ? 'translateX(0)' : 'translateX(110vw)',
                  opacity: headingVisible ? 1 : 0,
                  transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s ease-out',
                  transitionDelay: `${400 + index * 200}ms`,
                  willChange: 'transform, opacity',
                }}
              >
                {q}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Wide brand image — fills width with a 20px side gap */}
      <div className="mt-14 px-5 sm:mt-20">
        <img
          src={digihostImg}
          alt="DiigiiHost — Brand Soul, Found"
          className="block h-auto w-full rounded-lg"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Understood people */}
        <p
          ref={storyRef}
          className="mx-auto mt-14 max-w-3xl text-center text-xl font-medium leading-relaxed text-[#5C5C5C]"
          style={{
            transform: storyVisible ? 'translateY(0)' : 'translateY(56px)',
            opacity: storyVisible ? 1 : 0,
            transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease-out',
          }}
        >
          What began as a small digital agency slowly evolved into a place where
          we didn’t just design websites or logos...<br />{' '}
          <span className="text-2xl text-[#052C27]">we understood people.</span>
        </p>

        {/* Team gallery */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg"
              style={{
                transform: storyVisible ? 'translateY(0)' : 'translateY(48px)',
                opacity: storyVisible ? 1 : 0,
                transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease-out',
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              <img
                src={src}
                alt={`Team moment ${i + 1}`}
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>

        {/* Philosophy lead-in */}
        <p className="mx-auto mt-16 max-w-2xl text-center text-xl leading-relaxed text-[#5C5C5C]">
          And somewhere along that path, the idea that defined everything I do
          was born
        </p>
        <h3
          ref={philosophyRef}
          className="mt-4 text-center text-5xl font-medium text-[#052C27]"
          style={{
            transform: philosophyVisible ? 'translateY(0)' : 'translateY(48px)',
            opacity: philosophyVisible ? 1 : 0,
            transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease-out',
          }}
        >
          The Brand Soul Philosophy.
        </h3>

        <PhilosophyCards visible={philosophyVisible} />

        <p className="mx-auto mt-14 max-w-2xl text-center text-xl leading-relaxed text-[#5C5C5C]">
          Because every brand, just like every human, has a soul. When you find
          it, align with it, and express it with integrity{' '}
          <span className="text-[#052C27]">— it creates a movement.</span>
        </p>
      </div>
    </section>
  )
}

export default Journey
