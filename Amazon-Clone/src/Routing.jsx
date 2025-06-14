 import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Order from './Pages/Orders/Order'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/payment' element={<Auth />} />
      <Route path='/order' element={<Order />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/category/:categoryName' element={<Results />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
    </Routes>
  )
}

export default Routing
