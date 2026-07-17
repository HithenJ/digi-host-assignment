import logo from '../assets/alkesh-footer-logo.png'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#151515' }} className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p
              style={{
                color: '#c6a15b',
                fontFamily: 'Altone, system-ui, sans-serif',
                fontSize: '24px',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0',
              }}
            >
              Maybe it’s time we build<br />
              something together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <ul className="space-y-5">
              {['about', 'work', 'services', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-xl transition-colors hover:text-gold" style={{ color: '#f4f3ee' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="space-y-5">
              {['diigiihost', 'quote your price', 'best rate websites'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xl transition-colors hover:text-gold" style={{ color: '#f4f3ee' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="space-y-5">
              {['instagram', 'facebook', 'youtube', 'linkedin', 'X'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xl transition-colors hover:text-gold" style={{ color: '#f4f3ee' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <img src={logo} alt="Alkesh Logo" className="h-8 w-auto" />
          <p
            className="text-center sm:text-right"
            style={{
              color: '#f4f3ee',
              opacity: 0.6,
              fontFamily: 'Altone, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '100%',
              letterSpacing: '0',
            }}
          >
            Copyright &copy; <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>2026</span> Alkesh Gupta. All Rights Reserved. Powered By : DIIGIIHOST
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
