import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar(){
 const cart=useSelector((state)=>state.cart);
 const totalQuantity=cart.reduce((total,item)=>total+item.quantity,0);
 return <nav className="navbar"><Link className="brand" to="/">🌿 Paradise Nursery</Link><div className="nav-links"><Link to="/">Home</Link><Link to="/products">Plants</Link><Link className="cart-link" to="/cart">🛒 <span className="cart-count">{totalQuantity}</span></Link></div></nav>;
}
