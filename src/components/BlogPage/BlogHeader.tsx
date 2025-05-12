import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

const BlogHeader = () => {
  return (
    <div className="blogHead-container">
      <div className="ball-design"></div>
      <h2>Blog</h2>
      <div className="breadCrumb">
        <Link href={"/"}>HOME</Link> <MdDoubleArrow className="breadIco" />
        <b>BLOG</b>
      </div>
    </div>
  );
};

export default BlogHeader;
