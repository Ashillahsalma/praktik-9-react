import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { theme } = useTheme();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { isAuthenticated } = useUser();

  // Jika user belum login
  if (!isAuthenticated) {
    return (
      <div className={`cart ${theme}`}>
        <h2>Shopping Cart</h2>
        <p>Please login to view your cart.</p>
      </div>
    );
  }

  // Jika cart kosong
  if (cartItems.length === 0) {
    return (
      <div className={`cart ${theme}`}>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // Tampilkan cart
  return (
    <div className={`cart ${theme}`}>
      <div className="cart-header">
        <h2>Shopping Cart ({cartItems.length} items)</h2>
        <button onClick={clearCart} className="btn btn-outline">
          Clear Cart
        </button>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h4>{item.name}</h4>
              <p>Rp {item.price.toLocaleString("id-ID")}</p>
            </div>

            <div className="item-controls">
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="btn btn-sm"
                >
                  -
                </button>

                <span className="quantity">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="btn btn-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>

            <div className="item-total">
              Rp {(item.price * item.quantity).toLocaleString("id-ID")}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total">
          <strong>Total: Rp {getTotalPrice().toLocaleString("id-ID")}</strong>
        </div>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
