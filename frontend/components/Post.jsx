// libraries
import Image from "next/image";
import { MoreVert } from "@mui/icons-material";
// styles
import styled from "../styles/Post.module.css";

export default function Post() {
  return (
    <div className={styled.postContainer}>
      <div className={styled.postWrapper}>
        <div className={styled.postTop}>
          <div className={styled.postTopLeft}>
            <Image
              className={styled.postProfileImg}
              src="/person/1.jpeg"
              width={32}
              height={32}
            />
            <span className={styled.postUserName}>Nauman Munir</span>
            <span className={styled.postDate}>5 mins ago</span>
          </div>
          <div className={styled.postTopRight}>
            <MoreVert />
          </div>
        </div>

        <div className={styled.postCenter}></div>

        <div className={styled.postBottom}></div>
      </div>
    </div>
  );
}
