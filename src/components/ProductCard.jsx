import "./ProductCard.css";
import { useState } from "react";

export default function ProductCard({ product, isWishlisted, onToggleWishlist, onAddToCart }) {

  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {
    onAddToCart();
    setAddedToCart(true);
    // Reset the "Added!" text after 1.2 seconds
    setTimeout(() => setAddedToCart(false), 1200);
  }

  return (
    <div className="product-card">

      {product.bestSeller && (
        <span className="badge">
          Best Seller
        </span>
      )}

      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        onClick={onToggleWishlist}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isWishlisted ? "🩷" : "🤍"}
      </button>

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      {product.brand && (
        <span className="brand-label">{product.brand}</span>
      )}

      <p className="rating">
        {"★".repeat(Math.floor(product.rating))}
        {product.rating % 1 >= 0.5 ? "⯨" : ""}
        {"✰".repeat(
          5 - Math.floor(product.rating) - (product.rating % 1 >= 0.5 ? 1 : 0)
        )}
        <span> {product.rating}</span>
      </p>

      <div className="price">
        <span className="discount">
          ${product.discountPrice}
        </span>

        <span className="actual">
          ${product.actualPrice}
        </span>
      </div>

      <button
        className={`add-to-cart-btn ${addedToCart ? "added" : ""}`}
        onClick={handleAddToCart}
      >
        {addedToCart ? "✓ Added!" : "Add To Cart"}
      </button>
    </div>
  );
}