import "./Navbar.css";

export default function Navbar({
  cartCount,
  cartTotal,
  searchTerm,
  setSearchTerm,
  wishlistCount,
  onCartClick,
  theme,
  toggleTheme,
}) {
  return (
    <nav className="navbar">
      <div className="logo">
        🛒 {theme === "light" ? "LightStore" : "DarkStore"}
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="search-input"
          />
        </div>

        {/* Wishlist Icon with Badge */}
        <div className="wishlist-icon" id="wishlist-icon">
          🩷
          {wishlistCount > 0 && (
            <span className="wishlist-badge">{wishlistCount}</span>
          )}
        </div>

        {/* Cart Icon — opens CartPanel on click */}
        <div className="cart-icon" id="cart-icon" onClick={onCartClick}>
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
          {cartCount > 0 && (
            <span className="cart-total">${cartTotal}</span>
          )}
        </div>

        {/* Theme Toggle Button */}
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <div className="nav-buttons">
          <button className="login-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}