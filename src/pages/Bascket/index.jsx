import styles from "../../pages/Bascket/styles.module.css";
import BascketItem from "../../components/BascketItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../redux/actions/action";
import { useEffect } from "react";

function Bascket() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const totalSum = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
  const itemNames = cart.map((item) => item.name);

  return (
    <section className={styles.bascketContainer}>
      <h1>Basket</h1>
      <hr></hr>
      <nav className={styles.cartContainer}>
        <div className={styles.listDiv}>
          {cart.length === 0 ? (
            <p>Your basket is empty ...</p>
          ) : (
            cart.map((item) => <BascketItem key={item.id} product={item} />)
          )}
        </div>
        <div className={styles.totalContainer}>
          <h1>Total</h1>
          <ul>
            {itemNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <hr></hr>
          <p>PRICE:</p>
          <h2>{totalSum.toFixed(2)} $</h2>
        </div>
      </nav>
    </section>
  );
}

export default Bascket;
