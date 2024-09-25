import { Link } from "react-router-dom";
import styles from "../../components/Header/styles.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">Snickers - shop</Link>
      <div className={styles.linksContainer}>
        <Link to="/">Home</Link>
        <Link to="/bascket">Basket</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </header>
  );
}

export default Header;
