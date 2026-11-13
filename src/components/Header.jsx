import { Phone } from 'lucide-react'

export function Header({ business }) {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <a href="#products" className="brand-mark" aria-label="SR Enterprises menu">
          <svg viewBox="0 0 64 64" role="img" aria-label="SR bakery hat and wheat monogram">
            <path d="M18 26c0-8 6-14 14-14s14 6 14 14v3H18z" fill="currentColor" />
            <path d="M14 30h36v5H14zM21 37v4m22-4v4M32 39v15m0-3c-8-1-11-5-12-9m12 5c7-1 10-5 11-9m-11 1c-6-1-8-4-9-7m9 3c5-1 8-4 9-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <text x="32" y="34" textAnchor="middle" fontSize="12" fontFamily="Georgia,serif" fontWeight="700" fill="#5a2e19">SR</text>
          </svg>
        </a>
        <div className="brand-copy">
          <span className="brand-name">{business.name}</span>
          <span className="brand-subtitle">{business.subtitle}</span>
        </div>
      </div>
      <nav className="header-actions" aria-label="Contact SR Enterprises">
        <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="icon-button whatsapp" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="currentColor">
            <path d="M12.04 2a9.85 9.85 0 0 0-8.46 14.9L2 22l5.27-1.38A9.94 9.94 0 1 0 12.04 2Zm0 18.13a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 1 1 6.95 3.86Zm4.5-6.14c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.56.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.78 2.72 4.31 3.82.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </a>
        <a href={`tel:${business.phone}`} className="icon-button call" aria-label="Call SR Enterprises">
          <Phone size={18} />
        </a>
      </nav>
    </header>
  )
}
