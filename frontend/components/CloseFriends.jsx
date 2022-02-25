// libraries
import Image from "next/image";
// styles
import styles from "../styles/CloseFriends.module.css";

export default function CloseFriends({ user }) {
  return (
    <>
      <li className={styles.closeFriendsFriend}>
        <Image
          src={user.profileImg}
          width={32}
          height={32}
          className={styles.closeFriendsFriendImg}
        />
        <span className={styles.closeFriendsFriendName}>{user.username}</span>
      </li>
    </>
  );
}
