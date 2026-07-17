import { useEffect, useRef, useState } from 'react'

function BrandStatement() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="overflow-hidden bg-cream pb-20 sm:pb-28">
      <div ref={ref} className="w-full px-6 sm:px-10">
        <h2 className="font-anton text-5xl leading-tight font-normal tracking-normal text-[#052C27] capitalize sm:text-7xl md:text-9xl">
          {/* Slides fully in from the left edge of the screen */}
          <span
            className={`block transition-transform duration-1000 ease-out ${
              visible ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            The Stronger The Soul
          </span>
          {/* Slides fully in from the right edge of the screen */}
          <span
            className={`block whitespace-nowrap transition-transform delay-200 duration-1000 ease-out ${
              visible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            The Stronger The Brand
          </span>
        </h2>
      </div>
    </section>
  )
}

export default BrandStatement
