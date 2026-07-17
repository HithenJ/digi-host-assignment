import heroBg from '../assets/hero-bg.png'

function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-forest-deep"
    >
      {/* Full portrait — shown complete, never cropped (height follows the image) */}
      <img
        src={heroBg}
        alt="Alkesh Gupta seated in a leather chair"
        className="block h-auto w-full"
      />

      {/* Headline overlay — Altone, 40px, centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h1
          className="max-w-3xl text-center text-cream"
          style={{
            color: '#F5F5F5',
            fontFamily: 'Altone, system-ui, sans-serif',
            fontSize: '40px',
            fontWeight: 600,
          }}
        >
          Hi, I’m{' '}
          <span className="font-semibold" style={{ color: '#F8EEA4' }}>
            Alkesh Gupta
          </span>{' '}
          — a Founder, Creator, and Soul Alchemist.
        </h1>
      </div>
    </section>
  )
}

export default Hero
