// libraries
import Image from "next/image";
// components
import Online from "./Online";
// dummy data
import { Users } from "../dummyData";
// styles
import styles from "../styles/Rightbar.module.css";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>This is Profile Page Rightbar</h4>

        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City:</span>
            <span className={styles.rightbarInfoValue}>Karachi</span>
          </div>

          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From:</span>
            <span className={styles.rightbarInfoValue}>Pakistan</span>
          </div>

          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship:</span>
            <span className={styles.rightbarInfoValue}>Single</span>
          </div>
        </div>

        <h4 className={styles.rightbarTitle}>Users Friends</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <Image
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
              width={100}
              height={100}
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Muhammad</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <Image
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
              width={100}
              height={100}
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Muhammad</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <Image
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
              width={100}
              height={100}
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Muhammad</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <Image
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
              width={100}
              height={100}
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Muhammad</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <Image
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
              width={100}
              height={100}
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Muhammad</span>
          </div>

          <div className={styles.rightbarFollowing}>
            <Image
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
              width={100}
              height={100}
              className={styles.rightbarFollowingImg}
            />
            <span className={styles.rightbarFollowingName}>Muhammad</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.rightbarWrapper}>
        <ProfileRightbar />
      </div>
    </div>
  );
}
