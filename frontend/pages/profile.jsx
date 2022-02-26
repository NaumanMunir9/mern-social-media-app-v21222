// components
import Image from "next/image";
import { Seo, Topbar, Sidebar, Feed, Rightbar } from "../components";
// styles
import styles from "../styles/Profile.module.css";

export default function ProfilePage() {
  return (
    <>
      <Seo />
      <Topbar />
      <div className={styles.profileContainer}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <div className={styles.profileCoverImgDiv}>
                <Image
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  layout="fill"
                  className={styles.profileCoverImg}
                />
              </div>
              <div className={styles.profileUserImgDiv}>
                <Image
                  src="https://avatars.githubusercontent.com/u/41162751?v=4"
                  width={150}
                  height={150}
                  className={styles.profileUserImg}
                />
              </div>
            </div>

            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>MNM</h4>
              <span className={styles.profileInfoDesc}>
                Full Stack Software Developer and Blockchain Engineer
              </span>
            </div>
          </div>

          <div className={styles.profileRightBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
