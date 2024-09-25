import axios from "axios";
import { useState, useEffect } from "react";

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
    <nav>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div>
            <div>
              <p>Price:</p>
              <p>{product.price}$</p>
            </div>
            <button>+</button>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Goods;
