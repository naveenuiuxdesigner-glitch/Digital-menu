import { MessageCircle, Phone, X } from 'lucide-react'
import { categories } from '../data/categories'

const availabilityMeta = {
  available: { label: 'Available', className: 'available' },
  'on-request': { label: 'On Request', className: 'on-request' },
  unavailable: { label: 'Unavailable', className: 'unavailable' },
}

export function ProductDetails({ product, business, onClose }) {
  if (!product) return null

  const status = availabilityMeta[product.availability] ?? availabilityMeta.available
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hello, I am interested in your ${product.name}. Could you please share its current availability and product details?`,
  )}`

  return (
    <div className="details-overlay" onClick={onClose}>
      <div className="details-panel" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose} aria-label="Close product details">
          <X size={18} />
        </button>

        <div className="details-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-body">
          <div className="details-header-row">
            <span className="details-category">{categories.find((category) => category.id === product.category)?.label ?? product.category}</span>
            <span className={`status-badge ${status.className}`}>{status.label}</span>
          </div>

          <h2>{product.name}</h2>
          <p>{product.fullDescription}</p>

          <div className="details-actions">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="primary-button details-whatsapp">
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
            <a href={`tel:${business.phone}`} className="secondary-button details-call">
              <Phone size={16} />
              Call Owner
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
