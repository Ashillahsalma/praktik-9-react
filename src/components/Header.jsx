import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme } = useTheme();
  const { user, isAuthenticated, logout } = useUser();
  const { getTotalItems } = useCart();

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <div className="logo">
          <h1>🛍️ MyShop</h1>
        </div>

        <nav className="nav">
          <ThemeToggle />

          <div className="cart-info">
            <span>🛒 Cart: {getTotalItems()} items</span>
          </div>

          <div className="user-info">
            {isAuthenticated ? (
              <div className="user-menu">
                <span>Hello, {user.name}</span>
                <button onClick={logout} className="btn btn-outline">
                  Logout
                </button>
              </div>
            ) : (
              <span>Please login</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
