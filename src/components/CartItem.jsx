import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/CartSlice.jsx';
import Navbar from './Navbar.jsx';

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

  return <><Navbar/><main className="cart-container"><h1>Shopping Cart</h1><div className="cart-summary"><p>Total Cart Amount: {totalQuantity}</p><p>Total Cart Cost: ${totalAmount.toFixed(2)}</p></div>{cartItems.map((item)=><article className="cart-item" key={item.id}><img className="cart-item-image" src={item.image} alt={item.name}/><div className="cart-item-details"><h2>{item.name}</h2><p>Unit Price: ${item.cost.toFixed(2)}</p><p>Total Cost: ${(item.cost*item.quantity).toFixed(2)}</p></div><div className="cart-item-quantity"><button onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}))}>-</button><span>{item.quantity}</span><button onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}))}>+</button></div><button className="cart-item-delete" onClick={()=>dispatch(removeItem(item.id))}>Delete</button></article>)}<div className="cart-actions"><button className="checkout-button" onClick={()=>alert('Coming Soon!')}>Checkout</button><Link className="continue-shopping-button" to="/products">Continue Shopping</Link></div></main></>;
}
