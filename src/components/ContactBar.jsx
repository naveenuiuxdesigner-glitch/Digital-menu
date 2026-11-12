import { MessageCircle, Phone } from 'lucide-react'

export function ContactBar({ business }) {
  return (
    <div className="mobile-contact-bar" aria-label="Quick bakery contact actions">
      <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="bar-button whatsapp">
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>
      <a href={`tel:${business.phone}`} className="bar-button call">
        <Phone size={18} />
        Call Owner
      </a>
    </div>
  )
}
