// libraries
import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
// pictures
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
              src="https://avatars.githubusercontent.com/u/41162751?v=4"
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
            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            width={2000}
            height={2000}
          />
        </div>

        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <Image
              src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670153.png?token=exp=1645724373~hmac=491d11e4d07e21ac061a290d0591ac7d"
              width={24}
              height={24}
              className={styles.likeIcon}
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3237/3237429.png"
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
