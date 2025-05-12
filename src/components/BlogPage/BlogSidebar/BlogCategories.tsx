import Link from "next/link";
import React from "react";
import "@/components/BlogPage/BlogPage.css";

const BlogCategories = () => {
  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link href={"/blog"}>All</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategories;
