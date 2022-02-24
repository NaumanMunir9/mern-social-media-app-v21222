// libraries
import Image from "next/image";
// pics
import birthdayPic from "../public/gift.png";
import adPic from "../public/ad.png";
// styles
import styles from "../styles/Rightbar.module.css";

export default function Rightbar() {
  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayContainer}>
          <Image
            src={birthdayPic}
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
          src={adPic}
          width={500}
          height={350}
          className={styles.rightbarAd}
        />
      </div>
    </div>
  );
}
