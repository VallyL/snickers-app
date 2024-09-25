import styles from "../../components/Goods/styles.module.css";
import { useFetchProducts } from "../useFetchProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/action";
import { useState } from "react";

function Goods() {
  const { products, loading, error } = useFetchProducts();
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <nav className={styles.goodsContainer}>
      {showSuccessMessage && (
        <div className={styles.successMessage}>
          <p>Item added to basket!</p>
        </div>
      )}
      {products.map((product) => (
        <div key={product.id} className={styles.snickerCart}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div className={styles.priceDiv}>
            <div>
              <p>PRICE:</p>
              <h3>{product.price}$</h3>
            </div>
            <button onClick={() => handleAddToCart(product)}>+</button>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Goods;
