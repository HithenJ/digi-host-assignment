import { nextChapter } from '../data/content'
import { useRef, useEffect, useState } from 'react'
import nextChapterImg from '../assets/next-chapter.png'

function NextChapter() {
  const sectionRef = useRef(null)
  const [visibleWords, setVisibleWords] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate words one by one for each line
            nextChapter.lines.forEach((line, lineIndex) => {
              const words = line.split(' ')
              words.forEach((_, wordIndex) => {
                setTimeout(() => {
                  setVisibleWords((prev) => ({
                    ...prev,
                    [`${lineIndex}-${wordIndex}`]: true
                  }))
                }, (lineIndex * 1000) + (wordIndex * 150))
              })
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="next-chapter" ref={sectionRef} className="py-20 sm:py-28" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Word-by-word scrolling text */}
        <div className="space-y-16 text-center">
          {nextChapter.lines.map((line, lineIndex) => {
            const words = line.split(' ')
            return (
              <div
                key={lineIndex}
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '64px',
                  lineHeight: '120%',
                  letterSpacing: 'normal',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                }}
              >
                {words.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="transition-colors duration-500"
                    style={{
                      color: visibleWords[`${lineIndex}-${wordIndex}`] ? '#052C27' : '#dfdfdf',
                    }}
                  >
                    {word}{' '}
                  </span>
                ))}
              </div>
            )
          })}
        </div>

        {/* Image with text overlay */}
        <div className="mt-16 relative">
          <img
            src={nextChapterImg}
            alt="Next Chapter"
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <h3
              className="text-center"
              style={{
                fontFamily: 'Kaushan Script, cursive',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '36px',
                lineHeight: '140%',
                letterSpacing: '0',
                textAlign: 'center',
                verticalAlign: 'bottom',
                textTransform: 'capitalize',
                color: '#F5F5F5',
              }}
            >
              {nextChapter.cta.title}
            </h3>
            <p
              className="mt-4 text-center"
              style={{
                fontFamily: 'Kaushan Script, cursive',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '36px',
                lineHeight: '140%',
                letterSpacing: '0',
                textAlign: 'center',
                verticalAlign: 'bottom',
                textTransform: 'capitalize',
                color: '#F5F5F5',
              }}
            >
              {nextChapter.cta.subtitle}
            </p>
            <p
              className="text-center"
              style={{
                fontFamily: 'Kaushan Script, cursive',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '36px',
                lineHeight: '140%',
                letterSpacing: '0',
                textAlign: 'center',
                verticalAlign: 'bottom',
                textTransform: 'capitalize',
                color: '#F5F5F5',
              }}
            >
              {nextChapter.cta.tagline}
            </p>
            <p
              className="mt-6 text-center"
              style={{
                fontFamily: 'Altone, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '140%',
                letterSpacing: '0',
                textAlign: 'center',
                background: 'linear-gradient(to right, #F8EEA4, #C7A008)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
             - Alkesh Gupta
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NextChapter
