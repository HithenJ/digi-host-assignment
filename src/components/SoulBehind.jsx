

const soulBehindTexts = [
    {
      text: "When I'm not building, I'm observing — people, silence, stories.",
      align: "left"
    },
    {
      text: "I find clarity in long drives, in chai over deep conversations, in music that feels like truth.",
      align: "right"
    },
    {
      text: "I've realized success doesn't come from balance — it comes from alignment.",
      align: "left"
    }
]

function SoulBehind() {

  return (
    <section className="relative w-full">
      {/* The background remains pinned while the section's text scrolls over it. */}
      <div aria-hidden="true" className="pointer-events-none sticky top-0 h-screen bg-brand-image" />

      <div className="relative z-10 -mt-[100vh] mx-auto flex w-full max-w-6xl flex-col px-6">
        {/* Title Block */}
        <div className="min-h-screen flex flex-col justify-center">
          <h2 className="text-left text-[40px] font-medium text-cream font-altone leading-tight">
            The Soul Behind
            <span className="block">the Brand</span>
          </h2>
        </div>

        {/* Quotes Blocks - scrollable one after another */}
        {soulBehindTexts.map((item) => (
          <div
            key={item.text}
            className="min-h-screen flex flex-col justify-center"
          >
            <div className={`w-[40%] ${item.align === 'left' ? 'text-left' : 'ml-auto text-right'}`}>
              <p className="text-[24px] font-altone text-cream leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SoulBehind
