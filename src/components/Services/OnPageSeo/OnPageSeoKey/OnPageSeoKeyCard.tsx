import React from "react";
import "@/components/Style/style.css";

const OnPageSeoKeyCard = () => {
  const key = [
    {
      id: 1,
      title: " Keyword Optimization",
      description:
        " Keywords play a vital role in search engine rankings. With the right On-Page SEO Services in Bangalore, you can ensure that your website is optimized for relevant keywords that align with your business goals. Keyword research, placement, and density are carefully analyzed to enhance visibility.",
    },
    {
      id: 2,
      title: "High-Quality Content Optimization  ",
      description:
        "Content is the backbone of on-page SEO. Well-structured, informative, and engaging content is essential for ranking high in search results. Professional On-Page SEO Services in Bangalore ensure that your website’s content is optimized for readability, keyword placement, and user engagement.",
    },
    {
      id: 3,
      title: "Meta Tags Optimization  ",
      description:
        "Title tags, meta descriptions, and header tags are crucial for improving click-through rates and search visibility. With expert On-Page SEO Services in Bangalore, these elements are optimized to make your website more appealing to search engines and users.",
    },
    {
      id: 4,
      title: "URL Structure Optimization ",
      description:
        "A well-structured URL improves both user experience and search engine rankings. On-Page SEO Services in Bangalore ensure that URLs are concise, descriptive, and keyword-rich, making it easier for search engines to understand the page content.",
    },
    {
      id: 5,
      title: "Internal Linking Strategy  ",
      description:
        "Internal linking helps search engines navigate and index your website efficiently. Effective On-Page SEO Services in Bangalore implement a strategic internal linking approach to distribute link equity and improve page authority.",
    },
    {
      id: 6,
      title: "Image Optimization  ",
      description:
        "Optimizing images for SEO improves page speed and accessibility. With On-Page SEO Services in Bangalore, images are optimized with proper alt text, file compression, and descriptive filenames to enhance SEO performance.",
    },
    {
      id: 7,
      title: "Mobile-Friendliness and Responsiveness ",
      description:
        "A mobile-friendly website is essential for rankings and user experience. On-Page SEO Services in Bangalore ensure that your site is fully responsive, providing a seamless experience across different devices.",
    },
    {
      id: 8,
      title: "Page Speed Optimization  ",
      description:
        "Fast-loading pages improve user experience and reduce bounce rates. Professional On-Page SEO Services in Bangalore focus on optimizing website speed by compressing files, enabling browser caching, and minimizing unnecessary scripts.",
    },
    {
      id: 9,
      title: "Schema Markup Implementation  ",
      description:
        "Structured data helps search engines understand your website’s content better. On-Page SEO Services in Bangalore incorporate schema markup to improve rich snippets, enhancing visibility in search results.",
    },
    {
      id: 10,
      title: "Technical SEO Enhancements  ",
      description:
        "Ensuring proper indexing, fixing broken links, and improving site architecture are crucial technical aspects of on-page SEO. On-Page SEO Services in Bangalore cover all technical elements to ensure a fully optimized website.",
    },
  ];

  return (
    <>
      {key.map((x) => (
        <div className="onPageSeoKey-cardContainer" key={x.id}>
          <div className="onPageSeoKey-cardContent">
            <h4>{x.title} </h4>
            <p>{x.description}</p>
          </div>
          <div className="onPageSeoKey-cardContent">
            <div className="onPageSeoKey-cardImg">
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Frame-1437254184.jpg"
                alt=""
              />
            </div>
            <div className="onPageSeoKey-cardImg">
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Frame-1437254185.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OnPageSeoKeyCard;
