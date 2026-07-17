import soul from '../assets/soul.png'
import science from '../assets/science.png'
import scale from '../assets/scale.png'

const cards = [
  { src: soul, alt: 'Soul' },
  { src: science, alt: 'Science', lifted: true },
  { src: scale, alt: 'Scale' },
]

function PhilosophyCards({ visible }) {
  return (
    <div className="mx-auto mt-16 grid max-w-[760px] items-start gap-4 sm:grid-cols-3">
      {cards.map((card, index) => (
        <img
          key={card.alt}
          src={card.src}
          alt={card.alt}
          className={`mx-auto h-[300px] w-[240px] object-cover transition-all duration-700 ease-out ${
            visible
              ? card.lifted
                ? 'translate-y-0 opacity-100 sm:-translate-y-8'
                : 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: `${200 + index * 150}ms` }}
        />
      ))}
    </div>
  )
}

export default PhilosophyCards
