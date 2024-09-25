import styles from "../../pages/Bascket/styles.module.css";
import BascketItem from "../../components/BascketItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../redux/actions/action";
import { useEffect } from "react";

function Bascket() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

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
