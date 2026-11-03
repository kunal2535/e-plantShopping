import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice.jsx';
import { plants } from '../data/plants.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <Link className="brand" to="/">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link className="cart-link" to="/cart" aria-label={`Cart with ${totalQuantity} items`}>
            🛒 <span className="cart-count">{totalQuantity}</span>
          </Link>
        </div>
      </nav>

      <main className="product-page">
        <h1>Our Plants</h1>
        {plants.map((group) => (
          <section className="plant-category" key={group.category}>
            <h2>{group.category}</h2>
            <div className="product-grid">
              {group.items.map((plant) => (
                <article className="product-card" key={plant.id}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p className="product-cost">${plant.cost.toFixed(2)}</p>
                  <button className="add-to-cart-btn" disabled={isInCart(plant.id)} onClick={() => dispatch(addItem(plant))}>
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
