import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/action";

function BascketItem({ product }) {
  const dispatch = useDispatch();

  return (
    <nav>
      <img src={product.image} alt={product.name} />
      <hr></hr>
      <div>
        <h3>{product.name}</h3>
        <p>PRICE: {product.price}$</p>
      </div>
      <button onClick={() => dispatch(removeFromCart(product.id))}>-</button>
    </nav>
  );
}

export default BascketItem;
