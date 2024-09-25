import styles from "../../components/Goods/styles.module.css";
import { useFetchProducts } from "../useFetchProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/action";

function Goods() {
  const { products, loading, error } = useFetchProducts();
  const dispatch = useDispatch();

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
            <button onClick={() => dispatch(addToCart(product))}>+</button>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Goods;
