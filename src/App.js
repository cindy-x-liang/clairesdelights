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

      <Router >
        <Navbar/>
        <Routes>
          <Route path = "/clairesdelights/" element={<Home/>} />
          <Route path = "/clairesdelights/shop" element={<Shop/>} />
          <Route path = "/clairesdelights/cart"element={<Cart/>} />
          <Route path = "/clairesdelights/checkout"element={<Checkout/>} />
          <Route path = "/clairesdelights/orderplaced"element={<Finished/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
