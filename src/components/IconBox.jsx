import styles from "../styles/IconBox.module.css";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import exe from "../assets/x.svg";

function IconBox() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.apple}></div>
      <div className={styles.google}></div>
      <div className={styles.exe}></div>
    </div>
  );
}

export default IconBox;
