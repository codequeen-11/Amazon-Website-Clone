import React from 'react'
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Signup from './Pages/Auth/Signup';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart';
import Four04 from './Pages/Four04';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
function Routing() {
  return (
     <Router>
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path='/auth' element ={<Signup/>}/>
        <Route path='/payment' element ={<Payment/>}/>
        <Route path='/order' element ={<Order/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/category/:categoryName' element={<Results/>}/>
        <Route path='/product/:productId' element= {<ProductDetail/>}/>

        <Route path='*' element={<Four04/>}/>



      </Routes>

     </Router>
  )
}

export default Routing