// components
import { Seo } from "../components";
// styles
import styles from "../styles/Login.module.css";

export default function login() {
  return (
    <>
      <Seo />
      <div className={styles.loginContainer}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginLeft}>
            <h3 className={styles.loginLogo}>MNM</h3>
            <span className={styles.loginDesc}>
              MNM social helps you connect and share with the people in your
              life.
            </span>
          </div>
          <div className={styles.loginRight}>
            <div className={styles.loginBox}>
              <input placeholder="Email" className={styles.loginInput} />
              <input placeholder="Password" className={styles.loginInput} />
              <button className={styles.loginButton}>Login</button>
              <span className={styles.loginPassword}>Forgot Password?</span>
              <button className={styles.loginRegisterButton}>
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
