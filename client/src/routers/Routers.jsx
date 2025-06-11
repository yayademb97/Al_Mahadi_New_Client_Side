import { Routes, Route, Navigate } from 'react-router-dom'



import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Cart from '../pages/Cart/Cart'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import Checkout from '../pages/Checkout/Checkout'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      {/* ****************  *****************/}
      <Route path='/home'  element={<Home />} />
      {/* ****************  *****************/}
      <Route path='/shop'  element={<Shop />} />
      {/* ****************  *****************/}
      <Route path='/shop/:id'  element={<ProductDetail />} />
      {/* ****************  *****************/}
      <Route path='/cart'  element={<Cart />} />
      {/* ****************  *****************/}
      <Route path='/checkout'  element={<Checkout />} />
      {/* ****************  *****************/}
      <Route path='/login'  element={<Login />} />
      {/* ****************  *****************/}
      <Route path='/register'  element={<Register />} />
    </Routes>
  )
}

export default Routers
