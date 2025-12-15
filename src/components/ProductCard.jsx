import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const ProductCard = ({ product }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const { isAuthenticated } = useUser();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      return;
    }

    addToCart(product);
  };

  return (
    <div className={`product-card ${theme}`}>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">Rp {product.price.toLocaleString("id-ID")}</p>
      </div>

      <button
        onClick={handleAddToCart}
        className="btn btn-primary"
        disabled={!isAuthenticated}
      >
        {isAuthenticated ? "Add to Cart" : "Login to Buy"}
      </button>
    </div>
  );
};

export default ProductCard;
