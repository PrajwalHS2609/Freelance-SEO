import React from "react";
import "@/components/Style/style.css";

const SeoConsultationKeyCard = () => {
  const key = [
    {
      id: 1,
      title: " Website Audit & Performance Analysis",
      description:
        " A complete website audit is the first step in SEO Consultation in Bangalore. Experts analyze various elements of the website, including:",
      list: [
        " Technical SEO issues (crawling, indexing, loading speed, mobile-friendliness)",
        " On-page SEO factors (meta tags, headers, content optimization, keyword usage)",
        "Off-page SEO elements (backlink quality, domain authority, social signals)",
      ],
    },
    {
      id: 2,
      title: " Keyword Research & Strategy Development",
      description:
        "A successful SEO strategy starts with identifying the right keywords. SEO Consultation in Bangalore includes:",
      list: [
        "Competitor keyword analysis",
        "High-performing keyword recommendations",
        "Long-tail keyword optimization for better rankings",
        "Content strategy alignment with keyword trends",
      ],
    },
    {
      id: 3,
      title: " On-Page SEO Optimization",
      description:
        "Optimizing on-page elements is crucial for better rankings. SEO Consultation in Bangalore focuses on:",
      list: [
        "Improving title tags and meta descriptions",
        "Optimizing header tags and content readability",
        "Internal linking strategy for better navigation",
        "Image and multimedia optimization",
      ],
    },
    {
      id: 4,
      title: " Technical SEO Enhancements",
      description:
        "Technical SEO plays a vital role in improving website performance. SEO Consultation in Bangalore covers:",
      list: [
        "Fixing broken links and 404 errors",
        "Enhancing website speed and mobile responsiveness",
        "Structured data markup for better search engine understanding",
        "SSL certification and security enhancements",
      ],
    },
    {
      id: 5,
      title: "Content Strategy & Optimization",
      description:
        "High-quality content is at the core of SEO success. SEO Consultation in Bangalore helps businesses with:",
      list: [
        "Creating SEO-friendly, engaging content",
        "Improving readability and keyword placement",
        "Optimizing blog posts, landing pages, and product descriptions",
        "Ensuring content uniqueness and relevance",
      ],
    },
    {
      id: 6,
      title: "Backlink Profile Analysis & Off-Page SEO",
      description:
        "Backlinks are an important ranking factor for search engines. SEO Consultation in Bangalore includes:",
      list: [
        "Evaluating backlink quality and relevance",
        "Removing toxic or spammy links",
        "Competitor backlink analysis",
        "Strategic link-building recommendations,",
      ],
    },
    {
      id: 7,
      title: " Local SEO Optimization",
      description:
        "For businesses targeting customers in Bangalore, local SEO is a game-changer. SEO Consultation in Bangalore involves:",
      list: [
        "Google My Business (GMB) profile optimization",
        "Local citations and directory listings",
        "Customer review management and rating improvements",
        "Geo-targeted keyword recommendations",
      ],
    },
    {
      id: 8,
      title: " SEO Analytics & Reporting",
      description:
        "SEO success depends on tracking performance and making data-driven decisions. SEO Consultation in Bangalore provides:",
      list: [
        "Detailed SEO audit reports",
        "Google Analytics and Search Console integration",
        "Rank tracking for targeted keywords",
        "Regular performance updates and strategy revisions",
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

export default SeoConsultationKeyCard;
