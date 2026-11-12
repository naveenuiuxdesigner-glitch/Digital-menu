export function CategoryNavigation({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-strip" aria-label="Product categories">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-chip ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => onSelect(category.id)}
          aria-pressed={activeCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
