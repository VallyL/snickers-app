import Banner from "../../assets/images/Banner.svg";
import styles from "../../pages/MainPage/styles.module.css";
import Goods from "../../components/Goods";

function MainPage() {
  return (
    <section className={styles.mainContainer}>
      <img src={Banner} alt="banner" />
      <h2>Goods</h2>
      <hr></hr>
      <Goods />
    </section>
  );
}

export default MainPage;
