import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/action";
import BasketImg from "../../assets/icons/Vector copy 3.svg";
import styles from "../../components/BascketItem/styles.module.css";

function BascketItem({ product }) {
  const dispatch = useDispatch();

  return (
    <nav className={styles.itemContainer}>
      <img src={product.image} alt={product.name} />
      <hr></hr>
      <div className={styles.nameDiv}>
        <h3>{product.name}</h3>
        <div>
          <p>PRICE:</p>
          <h3>{product.price}$</h3>
        </div>
      </div>
      <button onClick={() => dispatch(removeFromCart(product.id))}>
        <img src={BasketImg} alt="delete" />
      </button>
    </nav>
  );
}

export default BascketItem;
