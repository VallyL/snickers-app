import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../../components/Goods/styles.module.css";

function Goods() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://66f3c85977b5e8897096cdc5.mockapi.io/productData"
        );
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <nav className={styles.goodsContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.snickerCart}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div className={styles.priceDiv}>
            <div>
              <p>PRICE:</p>
              <h3>{product.price}$</h3>
            </div>
            <button>+</button>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Goods;
