// styles
import styles from "../styles/Login.module.css";

export default function login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>MNM</h3>
          <span className={styles.loginDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>Login box</div>
        </div>
      </div>
    </div>
  );
}
