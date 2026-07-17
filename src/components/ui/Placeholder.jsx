/*
  Renders the real image when `src` is provided, otherwise a styled
  placeholder box so the layout is fully visible before assets arrive.
  Swap assets by setting `image` in src/data/content.js.
*/
function Placeholder({ src, alt = '', label, className = '', dark = false }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${
        dark
          ? 'bg-forest-deep/60 text-cream/40'
          : 'bg-neutral-200 text-neutral-400'
      } ${className}`}
      role="img"
      aria-label={alt || label || 'image placeholder'}
    >
      <span className="px-3 text-center text-[10px] font-medium tracking-widest uppercase">
        {label || 'Image'}
      </span>
    </div>
  )
}

export default Placeholder
