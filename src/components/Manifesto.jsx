import { useCallback, useEffect, useRef, useState } from 'react'
import manifestoImg from '../assets/manifesto.png'
import founderImg from '../assets/founder-titlle.png'
import businessImg from '../assets/business.png'

const TOTAL_WORDS = 45

function Manifesto() {
  const sectionRef = useRef(null)
  const [revealedCount, setRevealedCount] = useState(0)
  const hasTriggered = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once — when section comes into view
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true

          // Reveal words one by one with a timed interval
          let current = 0
          const interval = setInterval(() => {
            current++
            setRevealedCount(current)
            if (current >= TOTAL_WORDS) {
              clearInterval(interval)
            }
          }, 100) // 100ms per word
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const getWordStyle = useCallback((globalIndex) => ({
    color: globalIndex < revealedCount ? '#ffffff' : 'rgba(255, 255, 255, 0.25)',
    transition: 'color 0.3s ease',
  }), [revealedCount])

  // Offset counters for each row so words reveal sequentially
  const row1Start = 0   // 14 words
  const row2Start = 14  // 15 words
  const row3Start = 29  // 16 words

  return (
    <section ref={sectionRef} className="bg-[#052C27] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-[40px] font-medium text-cream font-altone leading-tight mb-20">
          The Brand Soul Manifesto
        </h2>

        <div className="flex flex-col gap-24 sm:gap-32">
          {/* Row 1: Brand */}
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[350px_minmax(0,1fr)]">
            {/* Image (Left) */}
            <div className="w-full max-w-[350px] h-[400px] overflow-hidden rounded-3xl mr-auto sm:order-1">
              <img
                src={manifestoImg}
                alt="A Brand Illustration"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text (Right) */}
            <div className="w-full max-w-[1391px] ml-auto sm:order-2">
              <p className="text-right text-[64px] font-altone leading-tight font-medium">
                <span style={getWordStyle(row1Start + 0)}>A</span> <span style={getWordStyle(row1Start + 1)}>BRAND</span> <span style={getWordStyle(row1Start + 2)}>is</span><br />
                <span style={getWordStyle(row1Start + 3)}>not</span> <span style={getWordStyle(row1Start + 4)}>a</span> <span style={getWordStyle(row1Start + 5)}>logo.</span><br />
                <span style={getWordStyle(row1Start + 6)}>It's</span> <span style={getWordStyle(row1Start + 7)}>a</span> <span style={getWordStyle(row1Start + 8)}>living</span> <span style={getWordStyle(row1Start + 9)}>system</span><br />
                <span style={getWordStyle(row1Start + 10)}>of</span> <span style={getWordStyle(row1Start + 11)}>emotion</span><br />
                <span style={getWordStyle(row1Start + 12)}>and</span> <span style={getWordStyle(row1Start + 13)}>intention.</span>
              </p>
            </div>
          </div>

          {/* Row 2: Founder */}
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1fr)_350px]">
            {/* Text (Left) */}
            <div className="w-full max-w-[1391px] mr-auto sm:order-1">
              <p className="text-[64px] font-altone leading-tight font-medium">
                <span className="block whitespace-nowrap" style={{ marginLeft: '78px' }}><span style={getWordStyle(row2Start + 0)}>A</span> <span style={getWordStyle(row2Start + 1)}>FOUNDER</span> <span style={getWordStyle(row2Start + 2)}>Is</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '99px' }}><span style={getWordStyle(row2Start + 3)}>Not</span> <span style={getWordStyle(row2Start + 4)}>A</span> <span style={getWordStyle(row2Start + 5)}>Title.</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '138px' }}><span style={getWordStyle(row2Start + 6)}>It's</span> <span style={getWordStyle(row2Start + 7)}>The</span> <span style={getWordStyle(row2Start + 8)}>Discipline</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '179px' }}><span style={getWordStyle(row2Start + 9)}>To</span> <span style={getWordStyle(row2Start + 10)}>Build</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '217px' }}><span style={getWordStyle(row2Start + 11)}>What</span> <span style={getWordStyle(row2Start + 12)}>Others</span> <span style={getWordStyle(row2Start + 13)}>Only</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '239px' }}><span style={getWordStyle(row2Start + 14)}>Imagine.</span></span>
              </p>
            </div>
            {/* Image (Right) */}
            <div className="w-full max-w-[350px] h-[400px] overflow-hidden rounded-3xl ml-auto sm:order-2">
              <img
                src={founderImg}
                alt="A Founder Photo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Row 3: Business */}
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[350px_minmax(0,1fr)]">
            {/* Image (Left) */}
            <div className="w-full max-w-[350px] h-[400px] overflow-hidden rounded-3xl mr-auto sm:order-1">
              <img
                src={businessImg}
                alt="Business Illustration"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text (Right) */}
            <div className="w-full max-w-[1391px] ml-auto sm:order-2">
              <p className="text-[64px] font-altone leading-tight font-medium">
                <span className="block whitespace-nowrap" style={{ marginLeft: '130px' }}><span style={getWordStyle(row3Start + 0)}>And</span> <span style={getWordStyle(row3Start + 1)}>BUSINESS</span> <span style={getWordStyle(row3Start + 2)}>Is</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '112px' }}><span style={getWordStyle(row3Start + 3)}>Not</span> <span style={getWordStyle(row3Start + 4)}>About</span> <span style={getWordStyle(row3Start + 5)}>The</span> <span style={getWordStyle(row3Start + 6)}>Market</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '91px' }}><span style={getWordStyle(row3Start + 7)}>It's</span> <span style={getWordStyle(row3Start + 8)}>About</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '68px' }}><span style={getWordStyle(row3Start + 9)}>The</span> <span style={getWordStyle(row3Start + 10)}>Value</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '50px' }}><span style={getWordStyle(row3Start + 11)}>You</span> <span style={getWordStyle(row3Start + 12)}>Choose</span> <span style={getWordStyle(row3Start + 13)}>To</span> <span style={getWordStyle(row3Start + 14)}>Create,</span></span>
                <span className="block whitespace-nowrap" style={{ marginLeft: '29px' }}><span style={getWordStyle(row3Start + 15)}>Consistently</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
