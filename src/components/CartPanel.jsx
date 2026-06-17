import "./CartPanel.css";

export default function CartPanel({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  cartCount,
  onRemoveItem,
  onUpdateQuantity,
}) {
  return (
    <>
      {/* Dark overlay behind the panel */}
      <div
        className={`cart-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className={`cart-panel ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-panel-header">
          <h2>🛒 Your Cart <span className="cart-panel-count">({cartCount})</span></h2>
          <button className="cart-panel-close" onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>Your cart is empty</p>
            <span className="cart-empty-hint">Add some products to get started!</span>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} className="cart-item-img" />

                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.title}</h4>
                    {item.brand && <span className="cart-item-brand">{item.brand}</span>}
                    <span className="cart-item-price">${item.discountPrice}</span>

                    {/* Quantity Controls */}
                    <div className="cart-item-qty">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <span className="cart-item-subtotal">
                      ${item.discountPrice * item.quantity}
                    </span>
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with Total */}
            <div className="cart-panel-footer">
              <div className="cart-summary-row">
                <span>Items</span>
                <span>{cartCount}</span>
              </div>
              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout →</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
