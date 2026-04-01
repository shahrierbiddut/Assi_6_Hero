import './App.css'
import './index.css'

import { useEffect, useState } from 'react'

import Navbar from './assets/Component/Navbar'
import Banner from './assets/Component/Banner'
import Activeuser from './assets/Component/Activeuser'
import GetStarted from './assets/Component/getstarted'

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [modelPromise, setModelPromise] = useState(Promise.resolve([]))

  // Load JSON data
  useEffect(() => {
    const promise = fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        return data
      })
    setModelPromise(promise)
  }, [])

  // Add to Cart
  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id)
    if (!exists) {
      setCart([...cart, product])
    }
  }

  // Remove from Cart
  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  // Checkout
  const handleCheckout = () => {
    setCart([])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />

      {/* 🔥 Models Section */}
      <GetStarted modelPromise={modelPromise} />

      {/* Toggle Buttons */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setShowCart(false)}>Products</button>
        <button onClick={() => setShowCart(true)} style={{ marginLeft: '10px' }}>
          Cart
        </button>
      </div>

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