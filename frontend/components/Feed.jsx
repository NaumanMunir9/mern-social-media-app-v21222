// components
import Share from "./Share";
import Post from "./Post";
// dummyData
import { Posts } from "../dummyData";
// styles
import styles from "../styles/Feed.module.css";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {Posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
