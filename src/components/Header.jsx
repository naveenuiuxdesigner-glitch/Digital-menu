import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

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
          <WhatsAppIcon size={19} />
        </a>
        <a href={`tel:${business.phone}`} className="icon-button call" aria-label="Call SR Enterprises">
          <Phone size={18} />
        </a>
      </nav>
    </header>
  )
}
