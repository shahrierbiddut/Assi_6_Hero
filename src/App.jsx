
import { useState } from 'react'
import './App.css'
import Activeuser from './assets/Component/Activeuser'
import Banner from './assets/Component/Banner'
import Cart from './assets/Component/Cart'
import Footer from './assets/Component/Footer'
import Getstarted from './assets/Component/Getstarted'
import Models from './assets/Component/Models'
import Navbar from './assets/Component/Navbar'
import TransparentPricing from './assets/Component/TransparentPricing'
import Workflow from './assets/Component/Workflow'

const getModels = async () => {
  const res = await fetch('/products.json')
  return res.json()
}

const modelPromise = getModels()

function App() {
  const [page, setPage] = useState('home')
  const [carts, setCarts] = useState([])

  return (
    <>
      {/* 🔥 Cart count navbar */}
      <Navbar carts={carts} onCartClick={() => setPage('cart')} onLogoClick={() => setPage('home')} />

      {page === 'home' && (
        <>
          <Banner />
          <Activeuser />

          <div className='text-center pb-8'>
            <h2 className='font-bold md:text-5xl text-4xl'>Premium Digital Tools</h2>
            <p className='text-gray-700 pt-3'>
              Choose from our curated collection of premium digital products <br />
              designed to boost your productivity and creativity.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              type="button"
              className="px-5 py-2.5 rounded-full text-sm font-semibold border bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-transparent"
            >
              Products
            </button>
            <button
              type="button"
              onClick={() => setPage('cart')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold border bg-white text-gray-700 border-gray-200"
            >
              Cart ({carts.length})
            </button>
          </div>

          <Models
            modelPromise={modelPromise}
            carts={carts}
            setCarts={setCarts}
          />

          <Getstarted />
          <TransparentPricing />
          <Workflow />
          <Footer />
        </>
      )}

      {page === 'cart' && (
        <>
          <Cart carts={carts} setCarts={setCarts} onBack={() => setPage('home')} />
          <Footer />
        </>
      )}
    </>
  )
}

export default App