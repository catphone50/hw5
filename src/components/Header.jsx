import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
