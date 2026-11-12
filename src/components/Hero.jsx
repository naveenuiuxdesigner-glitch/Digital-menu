import { ArrowRight, MessageCircle } from 'lucide-react'

export function Hero({ business }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Premium bakery collection</span>
        <h1>{business.tagline}</h1>
        <p>{business.heroText}</p>

        <div className="hero-actions">
          <a href="#products" className="primary-button">
            Explore Products
            <ArrowRight size={16} />
          </a>
          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="secondary-button">
            <MessageCircle size={16} />
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Premium chocolate cake photo">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
          alt="Premium chocolate cake"
          loading="eager"
        />
      </div>
    </section>
  )
}
