// libraries
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Image from "next/image";
// styles
import styles from "../styles/Topbar.module.css";

export default function Topbar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>MNM</span>
      </div>

      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon} />
          <input
            placeholder="Search for friends, Posts, Videos"
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>HomePage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <Person />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Chat />
            <span className={styles.topbarIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Notifications />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
        </div>

        <Image
          src="https://avatars.githubusercontent.com/u/41162751?v=4"
          width={32}
          height={32}
          className={styles.topbarImg}
        />
      </div>
    </div>
  );
}
