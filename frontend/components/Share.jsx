// libraries
import Image from "next/image";
// styles
import styles from "../styles/Share.module.css";

export default function Share() {
  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <Image
            src="/person/1.jpeg"
            className={styles.shareProfileImg}
            width={34}
            height={34}
          />
          <input
            type="text"
            className={styles.shareInput}
            placeholder="What's in your mind?"
          />
        </div>

        <hr className={styles.shareHr} />

        <div className={styles.shareBottom}></div>
      </div>
    </div>
  );
}
