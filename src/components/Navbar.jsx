import { useState } from 'react'
import { nav } from '../data/content'
import logo from '../assets/alkesh-footer-logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#052C27] px-5 py-3 font-altone sm:px-7">
        {/* Wordmark */}
        <a href="#top" className="shrink-0">
          <img
            src={logo}
            alt={nav.brand}
            className="h-6 w-auto sm:h-7"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-base font-medium text-[#F5F5F5] md:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={nav.cta.href}
          className="hidden rounded-full bg-white px-5 py-2 text-base font-semibold text-[#052C27] transition-transform duration-200 hover:scale-105 md:inline-block"
        >
          {nav.cta.label}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-cream md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute top-2 left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#052C27] font-altone transition-all duration-300 md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 p-4 text-[#F5F5F5]">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-full bg-white px-4 py-3 text-center font-semibold text-[#052C27]"
            >
              {nav.cta.label}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
