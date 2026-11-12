import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Header } from './components/Header'
import { CategoryNavigation } from './components/CategoryNavigation'
import { ProductCard } from './components/ProductCard'
import { ProductDetails } from './components/ProductDetails'
import { ContactBar } from './components/ContactBar'
import { categories } from './data/categories'
import { products } from './data/products'
import { business } from './config/business'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory
      const matchesSearch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.shortDescription.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <div className="app-shell">
      <Header business={business} />

      <main className="page-content">
        <section id="products" className="catalogue-section">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Our bakery collection</span>
              <h2>Freshly baked favourites</h2>
            </div>

            <label className="search-box" aria-label="Search bakery products">
              <Search size={16} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products"
              />
            </label>
          </div>

          <CategoryNavigation
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          {filteredProducts.length > 0 ? (
            <div className="catalogue-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onView={setSelectedProduct} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try another category or search term to discover more bakery favourites.</p>
            </div>
          )}
        </section>

      </main>

      <ContactBar business={business} />
      <ProductDetails product={selectedProduct} business={business} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default App
