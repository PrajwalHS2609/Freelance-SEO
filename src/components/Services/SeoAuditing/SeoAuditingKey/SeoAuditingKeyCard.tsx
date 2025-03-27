import React from "react";
import "@/components/Style/style.css";

const SeoAuditingKeyCard = () => {
  const key = [
    {
      id: 1,
      title: " Technical SEO Audit",
      description:
        " A technical SEO audit is an essential part of SEO Auditing Services in Bangalore. It evaluates the website’s structure, speed, and mobile-friendliness. Our experts check for:",
      list: [
        "Website crawling and indexing issues",
        "Site speed and performance",
        "Mobile optimization",
        "Secure HTTPS protocols",
      ],
    },
    {
      id: 2,
      title: "On-Page SEO Audit",
      description:
        "An on-page SEO audit is crucial for ensuring website elements are properly optimized. As part of our SEO Auditing Services in Bangalore, we analyze:",
      list: [
        "Meta titles and descriptions",
        "Header tags and keyword placement",
        "URL structure and internal linking",
        "Content relevance and quality",
      ],
    },
    {
      id: 3,
      title: " Off-Page SEO Audit ",
      description:
        "A strong backlink profile is essential for website authority. Our SEO Auditing Services in Bangalore include:",
      list: [
        "Analyzing backlink quality",
        "Identifying spammy or toxic links",
        "Competitor backlink analysis",
        "Recommendations for link-building strategies",
      ],
    },
    {
      id: 4,
      title: " Content Audit ",
      description:
        "Content is king in SEO. Our SEO Auditing Services in Bangalore include reviewing content to ensure it is engaging, informative, and optimized. We assess:",
      list: [
        "Content originality and uniqueness",
        "Keyword optimization and density",
        "Readability and engagement levels",
        "Content gaps and opportunities",
      ],
    },
    {
      id: 5,
      title: " Local SEO Audit ",
      description:
        "For businesses targeting local customers, a local SEO audit is crucial. Our SEO Auditing Services in Bangalore cover:",
      list: [
        "Google My Business profile optimization",
        "Local citations and directory listings",
        "Reviews and ratings analysis",
        "NAP (Name, Address, Phone) consistency",
      ],
    },
    {
      id: 6,
      title: " Competitor Analysis ",
      description:
        "Understanding competitor strategies can provide a competitive edge. Our SEO Auditing Services in Bangalore include:",
      list: [
        "Analyzing competitor keywords",
        "Evaluating backlink sources",
        "Assessing content strategies",
        "Identifying market opportunities",
      ],
    },
  ];
  return (
    <>
      {key.map((x) => (
        <div className="onPageSeoKey-cardContainer" key={x.id}>
          <div className="onPageSeoKey-cardContent">
            <h4>{x.title} </h4>
            <p>{x.description}</p>
            <ul>
              {x.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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

export default SeoAuditingKeyCard;
