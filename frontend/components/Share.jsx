// libraries
import Image from "next/image";
import { PermMedia, Room, EmojiEmotions, Label } from "@mui/icons-material";
// styles
import styles from "../styles/Share.module.css";

export default function Share() {
  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <Image
            src="/person/1.jpeg"
            className={styles.shareProfileImg}
            width={50}
            height={50}
          />
          <input
            type="text"
            className={styles.shareInput}
            placeholder="What's in your mind?"
          />
        </div>

        <hr className={styles.shareHr} />

        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMedia htmlColor="tomato" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo/Video</span>
            </div>

            <div className={styles.shareOption}>
              <Label htmlColor="blue" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>

            <div className={styles.shareOption}>
              <Room htmlColor="green" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>

            <div className={styles.shareOption}>
              <EmojiEmotions
                htmlColor="goldenrod"
                className={styles.shareIcon}
              />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>

          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}
