// libraries
import Image from "next/image";
// styles
import styles from "../styles/Online.module.css";

export default function Online({ user }) {
  return (
    <>
      <li className={styles.onlineFriend}>
        <div className={styles.onlineProfileImgContainer}>
          <Image
            src={user.profileImg}
            width={40}
            height={40}
            className={styles.onlineProfileImg}
          />
          <span className={styles.onlineSpan}></span>
        </div>
        <span className={styles.onlineUsername}>{user.username}</span>
      </li>
    </>
  );
}
