import './App.css'
import './index.css'

import { useEffect, useState } from 'react'

import Navbar from './assets/Component/Navbar'
import Banner from './assets/Component/Banner'
import Activeuser from './assets/Component/Activeuser'

function App() {

  // 🔹 Products state
  const [products, setProducts] = useState([])

  // 🔹 Cart state
  const [cart, setCart] = useState([])

  // 🔹 Toggle (products/cart)
  const [showCart, setShowCart] = useState(false)

  // 🔹 Load JSON data
  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // 🔹 Add to Cart
  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id)

    if (!exists) {
      setCart([...cart, product])
    }
  }

  // 🔹 Remove from Cart
  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  // 🔹 Clear Cart (Checkout)
  const handleCheckout = () => {
    setCart([])
  }

  return (
    <>
      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Banner */}
      <Banner />

      {/* Toggle Buttons */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setShowCart(false)}>
          Products
        </button>

        <button onClick={() => setShowCart(true)} style={{ marginLeft: '10px' }}>
          Cart
        </button>
      </div>

      {/* Main Section */}
      <Activeuser
        products={products}
        cart={cart}
        showCart={showCart}
        handleAddToCart={handleAddToCart}
        handleRemove={handleRemove}
        handleCheckout={handleCheckout}
      />
    </>
  )
}

export default App