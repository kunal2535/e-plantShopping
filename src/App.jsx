import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="background-image">
      <div className="landing-content">
        <section className="welcome-section">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Where green meets serenity</p>
          <button className="get-started-button" onClick={() => navigate('/products')}>Get Started</button>
        </section>
        <AboutUs />
      </div>
    </div>
  );
}

export default function App() {
  return <Routes><Route path="/" element={<LandingPage/>}/><Route path="/products" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/></Routes>;
}
