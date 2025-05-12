import React from "react";
import "@/components/BlogPage/BlogPage.css";
import BlogPost from "./BlogPost";
import BlogCategories from "./BlogCategories";
const BlogSidebar = () => {
  return (
    <div className="blogSideBar-container">
      <BlogPost />
      <BlogCategories />
    </div>
  );
};

export default BlogSidebar;
