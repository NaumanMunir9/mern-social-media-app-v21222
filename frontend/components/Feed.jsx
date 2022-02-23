// components
import Share from "./Share";
import Post from "./Post";
// styles
import styles from "../styles/Feed.module.css";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        <Post />
      </div>
    </div>
  );
}
