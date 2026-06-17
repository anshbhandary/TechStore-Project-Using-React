import ProductCard from "./ProductCard";
import "./ProductSection.css";

export default function ProductSection({
  products,
  allBrands,
  selectedBrand,
  setSelectedBrand,
  sortBy,
  setSortBy,
  addToCart,
  toggleWishlist,
  wishList
}) {
  return (
    <section className="products" id="products-section">

      <h2>🔥 Best Products In The Market</h2>

      {/* Filter & Sort Controls */}
      <div className="filter-controls">

        {/* Brand Filter Buttons */}
        <div className="brand-filters">
          <button
            className={`brand-btn ${selectedBrand === "All" ? "active" : ""}`}
            onClick={() => setSelectedBrand("All")}
          >
            All
          </button>
          {allBrands.map((brand) => (
            <button
              key={brand}
              className={`brand-btn ${selectedBrand === brand ? "active" : ""}`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="sort-control">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low → High</option>
            <option value="high-to-low">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

      </div>

      {/* Product Count */}
      <p className="product-count">
        Showing {products.length} product{products.length !== 1 ? "s" : ""}
      </p>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishList.includes(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>😕 No products found</p>
          <span>Try a different search or filter</span>
        </div>
      )}
    </section>
  );
}