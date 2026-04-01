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

  const [activeTab, setActiveTab] = useState('Products')
  const [carts, setCarts] = useState([])

  return (
    <>
      {/* 🔥 Cart count navbar এ পাঠাও */}
      <Navbar carts={carts} />

      <Banner />
      <Activeuser />

      <div className='text-center pb-10'>
        <h2 className='font-bold md:text-5xl text-4xl'>Premium Digital Tools</h2>
        <p className='text-gray-700 pt-3'>
          Choose from our curated collection of premium digital products <br />
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-box justify-center mb-10 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-30"
          aria-label="Products"
          onClick={() => setActiveTab('Products')}
          defaultChecked
        />

        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-30"
          aria-label="Carts"
          onClick={() => setActiveTab('Carts')}
        />
      </div>

      {/* 🔥 Products Section */}
      {activeTab === 'Products' && (
        <Models
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}

      {/* 🔥 Cart Section (FIXED) */}
      {activeTab === 'Carts' && (
        <Cart
          carts={carts}
          setCarts={setCarts}
        />
      )}

      <Getstarted />
      <TransparentPricing />
      <Workflow />
      <Footer />
    </>
  )
}

export default App