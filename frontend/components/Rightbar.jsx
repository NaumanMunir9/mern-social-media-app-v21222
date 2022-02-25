// libraries
import Image from "next/image";
// dummy data
import { Users } from "../dummyData";
// styles
import styles from "../styles/Rightbar.module.css";
import Online from "./Online";

export default function Rightbar() {
  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayContainer}>
          <Image
            src="https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width={40}
            height={40}
            className={styles.birthdayImg}
          />
          <span className={styles.birthdayText}>
            <em>Muhammad</em> and <em>2 other friends</em> are celebrating their
            birthday!
          </span>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1645640932680-8967074c34b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          width={500}
          height={350}
          className={styles.rightbarAd}
        />

        <div className={styles.rightbarOnlineFriends}>
          <h4 className={styles.rightbarTitle}>Online Friends</h4>

          <ul className={styles.rightbarFriendsList}>
            {Users.map((user, index) => (
              <Online key={index} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
