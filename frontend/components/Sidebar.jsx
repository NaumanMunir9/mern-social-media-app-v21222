// libraries
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
// components
import CloseFriends from "./CloseFriends";
// dummy data
import { Users } from "../dummyData";
// styles
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <RssFeed className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Feed</span>
          </li>

          <li className={styles.sidebarListItem}>
            <Chat className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Chats</span>
          </li>

          <li className={styles.sidebarListItem}>
            <PlayCircleFilledOutlined className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Videos</span>
          </li>

          <li className={styles.sidebarListItem}>
            <Group className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Groups</span>
          </li>

          <li className={styles.sidebarListItem}>
            <Bookmark className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Bookmarks</span>
          </li>

          <li className={styles.sidebarListItem}>
            <HelpOutline className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Questions</span>
          </li>

          <li className={styles.sidebarListItem}>
            <WorkOutline className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Jobs</span>
          </li>

          <li className={styles.sidebarListItem}>
            <Event className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Events</span>
          </li>

          <li className={styles.sidebarListItem}>
            <School className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Courses</span>
          </li>
        </ul>

        <button className={styles.sidebarButton}>Show More</button>

        <hr className={styles.sidebarHr} />

        <ul className={styles.sidebarFriendList}>
          {Users.map((user, index) => (
            <CloseFriends key={index} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
