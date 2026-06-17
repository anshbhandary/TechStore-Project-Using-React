import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductSection from "./components/ProductSection";
import CartPanel from "./components/CartPanel";
import Footer from "./components/Footer";
import products from "./data/products";
import { useState, useEffect } from "react";
import CatWidget from "./components/CatWidget";

function App() {

  // Theme - 'dark' or 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const allBrands = [...new Set(products.map(p => p.brand))];

  //State

  //cart - array of products in the cart
  const [cartItems, setCartItems] = useState([]);

  // Wishlist = array of Product IDs that are wishlisted
  const [wishList, setWishList] = useState([]);

  //Search - what user types in the search box
  const [searchTerm, setSearchTerm] = useState("");

  //Brand Filter  - which brand is selected ('All' means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  //Sort - how to sort products ('default', 'low-to-high', 'high-to-low', 'rating')
  const [sortBy, setSortBy] = useState("default");

  //Cart Panel - whether the cart sidebar is open or closed
  const [isCartOpen, setIsCartOpen] = useState(false);


  // ... is called as spread operator previous items will remain as it as after that you are continuing with the new things


  function addToCart(product) {
    //React 12 class 37:00
    // this is to check if Cart Item Exits or not, it will return true if it exits else it will return undefined
    const existingItem = cartItems.find(item => item.id === product.id);


    //This is used if the cart item exits increase the quantity by 1
    if (existingItem) {
      setCartItems(cartItems.map(item => //[ARRAY OF OBJECTS]
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    }
    else {
      //If the product does not exist
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }


  // Remove a product entirely from the cart
  function removeFromCart(productID) {
    setCartItems(cartItems.filter(item => item.id !== productID));
  }


  // Update quantity of a cart item (if newQty is 0, remove it)
  function updateCartQuantity(productID, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(productID);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productID ? { ...item, quantity: newQuantity } : item
      ));
    }
  }


  //Calculate Total Number of Cart Items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //Calculate Total price
  const cartTotal = cartItems.reduce((total, item) => total + (item.discountPrice) * (item.quantity), 0);

  //Calculate Wishlist Count
  const wishlistCount = wishList.length;


  //Wishlist Function

  function toggleWishlist(productID) {
    //Check if it is wishlisted or not
    if (wishList.includes(productID)) {
      //Already Existing  - Remove it
      setWishList(wishList.filter(id => id !== productID));
    }
    else {
      // Not in the WISHLIST -  JUST ADD IT
      setWishList([...wishList, productID])
    }

  }



  //STEP 1 : FILTER BASED ON THE SEARCH [BASED ON THE TITLE AND BRAND]

  let filteredProducts = products.filter(product => {

    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    // STEP 2: FILTER BASED ON THE BRAND
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;

  });


  // STEP 3: SORT THE FILTERED PRODUCTS
  if (sortBy === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (sortBy === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.discountPrice - a.discountPrice);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }


  return (
    <>
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        wishlistCount={wishlistCount}
        onCartClick={() => setIsCartOpen(true)}
        theme={theme}
        toggleTheme={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
      />
      <Hero />
      <Stats />
      <ProductSection
        products={filteredProducts}
        allBrands={allBrands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        sortBy={sortBy}
        setSortBy={setSortBy}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishList={wishList}
      />
      <Footer />

      {/* Cart Slide-Out Panel */}
      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        cartCount={cartCount}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateCartQuantity}
      />

      <CatWidget />

    </>
  );
}

export default App;