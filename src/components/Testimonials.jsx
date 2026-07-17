import { useRef, useEffect, useState } from 'react'
import testImg from '../assets/testimonials.jpg'

const testimonials = [
  {
    quote: "Working with Alkesh doesn't feel like outsourcing. It feels like building together.",
    name: 'Suman Vyas',
    role: 'Project Head, DiigiiHost',
    img: testImg,
  },
  {
    quote: 'He understands people — and that changes everything.',
    name: 'Dr. Gaikwad',
    role: 'The Smile Architect',
    img: testImg,
  },
  {
    quote: "Working with Alkesh doesn't feel like outsourcing. It feels like building together.",
    name: 'Suman Vyas',
    role: 'Project Head, DiigiiHost',
    img: testImg,
  },
  {
    quote: "He never talks about trends. He talks about truth. And somehow, that always works.",
    name: 'Siddhant Jadhav',
    role: 'Graphics and  Content Lead',
    img: testImg,
  },
]

function Testimonials() {
  const trackRef = useRef(null)
  const animRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const autoScrollSpeed = 0.6
  const [paused, setPaused] = useState(false)

  // Auto-scroll loop
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tick = () => {
      if (!isDragging.current && !paused) {
        track.scrollLeft += autoScrollSpeed
        // Seamless loop: when we've scrolled past the first set, reset
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0
        }
      }
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [paused])

  // Drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  const stopDrag = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const handleMouseLeave = () => {
    stopDrag()
    setPaused(false)
  }

  // Touch handlers
  const onTouchStart = (e) => {
    isDragging.current = true
    startX.current = e.touches[0].pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
  }

  const onTouchMove = (e) => {
    if (!isDragging.current) return
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  // Duplicate cards for seamless loop
  const allCards = [...testimonials, ...testimonials]

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="mx-auto max-w-5xl px-6">
        <h2
          className="mb-12 text-center"
          style={{
            color: '#151515',
            fontFamily: 'Altone, system-ui, sans-serif',
            fontSize: '40px',
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: '120%',
            letterSpacing: '0',
          }}
        >
          What People Say
        </h2>
      </div>

      {/* Draggable carousel track */}
      <div
        ref={trackRef}
        className="testimonial-track flex select-none gap-6 overflow-x-scroll"
        style={{
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: '5vw',
          paddingRight: '5vw',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={handleMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
        onMouseEnter={() => setPaused(true)}
      >
        {allCards.map((t, i) => (
          <figure
            key={i}
            className="flex-shrink-0 flex flex-col justify-between rounded-3xl p-7"
            style={{
              width: '320px',
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <blockquote
              className="leading-relaxed"
              style={{ fontSize: '16px', color: '#151515' }}
            >
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                draggable={false}
                className="rounded-full object-cover flex-shrink-0"
                style={{ width: '48px', height: '48px' }}
              />
              <span>
                <span
                  className="block font-altone"
                  style={{ fontSize: '20px', fontWeight: 600, color: '#052C27' }}
                >
                  {t.name}
                </span>
                <span
                  className="block font-altone"
                  style={{ fontSize: '16px', color: '#151515' }}
                >
                  {t.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        .testimonial-track::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}

export default Testimonials
