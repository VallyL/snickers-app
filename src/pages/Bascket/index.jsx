import styles from "../../pages/Bascket/styles.module.css";
import BascketItem from "../../components/BascketItem";
import { useSelector } from "react-redux";

function Bascket() {
  const cart = useSelector((state) => state.cart);

  return (
    <section className={styles.bascketContainer}>
      <h1>Basket</h1>
      <hr></hr>
      <nav>
        <div>
          {cart.length === 0 ? (
            <p>Your basket is empty ...</p>
          ) : (
            cart.map((item) => <BascketItem key={item.id} product={item} />)
          )}
        </div>
        <div></div>
      </nav>
    </section>
  );
}

export default Bascket;
