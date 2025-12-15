import { useTheme } from "../context/ThemeContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { theme } = useTheme();

  // Sample products data
  const products = [
    { id: 1, name: "Laptop", price: 12000000, description: "High-performance laptop" },
    { id: 2, name: "Smartphone", price: 5000000, description: "Latest smartphone" },
    { id: 3, name: "Headphones", price: 800000, description: "Wireless headphones" },
    { id: 4, name: "Keyboard", price: 600000, description: "Mechanical keyboard" },
    { id: 5, name: "Mouse", price: 300000, description: "Gaming mouse" },
    { id: 6, name: "Monitor", price: 2500000, description: "27-inch monitor" },
  ];

  return (
    <div className={`product-list ${theme}`}>
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
