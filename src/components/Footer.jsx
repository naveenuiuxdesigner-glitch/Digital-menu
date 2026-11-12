export function Footer({ business }) {
  return (
    <footer className="site-footer">
      <div>
        <span className="brand-name">{business.name}</span>
        <p>{business.address}</p>
      </div>
      <div>
        <p>Call</p>
        <a href={`tel:${business.phone}`}>{business.phone}</a>
      </div>
      <div>
        <p>WhatsApp</p>
        <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
          {business.whatsapp}
        </a>
      </div>
    </footer>
  )
}
