import Facebook from "../../assets/icons/Vector.svg";
import Twitter from "../../assets/icons/Vector copy.svg";
import Instagram from "../../assets/icons/Vector copy 2.svg";
import { Link } from "react-router-dom";
import styles from "../../components/Footer/styles.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.contactDiv}>
        <h3>Contacts</h3>
        <div>
          <a href="">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <p>8 800 000 00 00</p>
      <p>emailexample@email.com</p>
      <div className={styles.emailDiv}>
        <p>2024 Sneaker Store. All rights reserved.</p>
        <div>
          <input type="text" placeholder="Enter your email:" />
          <Link to="/contacts">Send</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
