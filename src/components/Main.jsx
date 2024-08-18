import styles from "../styles/Main.module.css";
import IconBox from "./IconBox";

function Main() {
  return (
    <div className={styles.headerContainer}>
      <h2>LIFE IS WASTED ON THE LIVING</h2>
      <p>
        Sign in <br /> with
      </p>
      <IconBox />
    </div>
  );
}

export default Main;
