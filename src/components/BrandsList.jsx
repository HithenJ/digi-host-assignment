import { brands } from '../data/content'
import brandCarry from '../assets/brand-carry.png'

function BrandsList() {
  return (
    <section id="brands" className="bg-gray-100 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-medium text-[#052C27] sm:text-4xl">
          Brands That Carry My Soul
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[#5C5C5C]">
        Over the Years I’ve had the privilege of shaping brands that became
          more than their business — they became movements.
        </p>
      </div>

      {/* Full-width list — the dividers span the whole screen, content stays centered */}
      <ul className="mt-14 w-full border-t border-[#052C27]">
        {brands.map((brand, i) => {
          const alwaysVisible = i === 0
          return (
            <li
              key={brand.name}
              className="group border-b border-[#052C27]"
            >
              <div className="mx-auto flex max-w-5xl items-center px-6 py-9 transition-all duration-500 ease-out group-hover:py-16">
                {/* Left image — accordion: height grows on hover so the row opens up.
                    Width is reserved so the text never shifts sideways. */}
                <div
                  className={`mr-6 w-56 shrink-0 overflow-hidden rounded-lg transition-all duration-500 ease-out ${
                    alwaysVisible
                      ? 'h-[140px] opacity-100'
                      : 'h-0 opacity-0 group-hover:h-[140px] group-hover:opacity-100'
                  }`}
                >
                  <img
                    src={brandCarry}
                    alt=""
                    className="h-[140px] w-56 rounded-lg object-cover"
                  />
                </div>

                {/* Text — stays put */}
                <div>
                  <h3 className="font-anton text-4xl leading-none font-normal text-[#052C27] sm:text-5xl md:text-6xl">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-xl text-[#5C5C5C]">{brand.desc}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default BrandsList
