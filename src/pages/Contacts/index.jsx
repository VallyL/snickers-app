import styles from "../../pages/Contacts/styles.module.css";
import Snapshat from "../../assets/icons/Group 25.svg";
import Facebook from "../../assets/icons/Symbol.svg.svg";
import X from "../../assets/icons/x_icon.jpeg.svg";
import MessageForm from "../../components/MessageForm";

function Contacts() {
  return (
    <section className={styles.contactsContainer}>
      <h1>Contacts</h1>
      <hr></hr>
      <ul>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>
      <nav className={styles.messageNav}>
        <div className={styles.sendMessageDiv}>
          <MessageForm />
        </div>
        <div className={styles.findUsDiv}>
          <p>Find us:</p>
          <div>
            <a href="">
              <img src={Snapshat} alt="snapchat" />
            </a>
            <a href="">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={X} alt="x" />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Contacts;
