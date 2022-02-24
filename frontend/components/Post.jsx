// libraries
import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
// pictures
import postProfileImg from "../public/person/1.jpeg";
import firstPost from "../public/post/1.jpeg";
import likePost from "../public/like.png";
import heartPost from "../public/heart.png";
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
              width={32}
              height={32}
              src={postProfileImg}
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
          <Image className={styles.postImg} src={firstPost} />
        </div>

        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <Image
              src={likePost}
              width={24}
              height={24}
              className={styles.likeIcon}
            />
            <Image
              src={heartPost}
              width={24}
              height={24}
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
