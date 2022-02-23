// libraries
import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
// styles
import styles from "../styles/Post.module.css";

export default function Post() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <Image
              className={styles.postProfileImg}
              src="/person/1.jpeg"
              width={32}
              height={32}
            />
            <span className={styles.postUserName}>Nauman Munir</span>
            <span className={styles.postDate}>5 mins ago</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>

        <div className={styles.postCenter}>
          <span className={styles.postText}>Hey! It's my first post</span>
          <Image
            className={styles.postImg}
            src="/post/1.jpeg"
            width={40}
            height={40}
          />
        </div>

        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <Image
              src="/like.png"
              width={32}
              height={32}
              className={styles.likeIcon}
            />
            <Image
              src="/heart.png"
              width={32}
              height={32}
              className={styles.likeIcon}
            />
            <span className={styles.postLikeCounter}>15 people like it</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>6 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
