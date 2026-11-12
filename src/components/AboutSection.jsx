export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-copy">
        <span className="eyebrow">About our bakery</span>
        <h2>Freshly prepared with care and consistency.</h2>
        <p>
          Our bakery manufacturing unit brings together traditional recipes, quality ingredients and a passion for fresh daily production.
          From celebration cakes to everyday favourites, every item is carefully prepared to offer flavour, freshness and dependable quality.
        </p>
        <p>
          We focus on a wide product range, careful preparation and a warm customer-first approach. Availability can change through the day, so please contact us to confirm an item.
        </p>
      </div>

      <div className="about-gallery" aria-label="Bakery manufacturing photography">
        <img
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80"
          alt="Bakery pastry display"
        />
        <img
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80"
          alt="Fresh bakery items"
        />
        <img
          src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80"
          alt="Bakery production close-up"
        />
      </div>
    </section>
  )
}
