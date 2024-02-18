
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
