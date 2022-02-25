// components
import { Seo, Topbar, Sidebar, Feed, Rightbar } from "../components";
// styles
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <Seo />
      <Topbar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
