import { useTheme } from "../context/ThemeContext";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import UserProfile from "../components/UserProfile";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`home-page ${theme}`}>
      <div className="container">

        <div className="main-content">
          <ProductList />
        </div>

        <div className="sidebar">
          <UserProfile />
          <Cart />
        </div>

      </div>
    </div>
  );
};

export default Home;
