import { ArrowRight, CircleAlert, CheckCircle2, Clock3 } from 'lucide-react'

const availabilityMeta = {
  available: { label: 'Available', className: 'available', icon: CheckCircle2 },
  'on-request': { label: 'On Request', className: 'on-request', icon: Clock3 },
  unavailable: { label: 'Unavailable', className: 'unavailable', icon: CircleAlert },
}

export function ProductCard({ product, onView }) {
  const current = availabilityMeta[product.availability] ?? availabilityMeta.available
  const Icon = current.icon

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-content">
        <div className="product-meta-row">
          <span className={`status-badge ${current.className}`}>
            <Icon size={12} />
            {current.label}
          </span>
        </div>

        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>

        <button type="button" className="details-button" onClick={() => onView(product)}>
          View Details
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  )
}
