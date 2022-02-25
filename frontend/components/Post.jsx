// libraries
import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
// dummyData
import { Users } from "../dummyData";
// styles
import styles from "../styles/Post.module.css";

export default function Post({ post }) {
  const user = Users.filter((user) => user.id === post.userId)[0];

  return (
    <div className={styles.postContainer}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <Image
              className={styles.postProfileImg}
              width={32}
              height={32}
              src={user.profileImg}
            />
            <span className={styles.postUserName}>{user.username}</span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>

        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <Image
            className={styles.postImg}
            src={post.photo}
            width={2000}
            height={2000}
          />
        </div>

        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <div className={styles.postLikeIcon}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/889/889140.png"
                width={24}
                height={24}
                className={styles.likeIcon}
              />
            </div>
            <div className={styles.postLoveIcon}>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png"
                width={24}
                height={24}
                className={styles.heartIcon}
              />
            </div>
            <span className={styles.postLikeCounter}>
              {post.like} people like it
            </span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
