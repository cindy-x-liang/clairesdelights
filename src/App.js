import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/navbar'
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import {Home} from './pages/home/home'
import {Checkout} from './pages/checkout/checkout'
import {Finished} from './pages/finished/finished'
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>

      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/shop" element={<Shop/>} />
          <Route path = "/cart"element={<Cart/>} />
          <Route path = "/checkout"element={<Checkout/>} />
          <Route path = "/orderplaced"element={<Finished/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
