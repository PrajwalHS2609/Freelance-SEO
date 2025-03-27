import React from "react";
import "@/components/Style/style.css"

const OffPageSeoKeyCard = () => {
  const key = [
    {
      id: 1,
      title: "Link Building",
      description:
        "One of the most important aspects of Off-Page SEO Services in Bangalore is link building. High-quality backlinks from authoritative websites can enhance your site’s credibility.",
    },
    {
      id: 2,
      title: " Social Media Engagement",
      description:
        "Engaging on social media platforms is a crucial part of Off-Page SEO Services in Bangalore. A strong social media presence helps drive traffic to your website, increasing engagement and brand visibility. Our experts create and share engaging content to attract more users and improve your brand’s reputation.",
    },
    {
      id: 3,
      title: " Guest Blogging",
      description:
        "Publishing content on authoritative websites helps in brand building and earns quality backlinks. Our Off-Page SEO Services in Bangalore include guest blogging on top industry websites, ensuring your brand gains recognition and credibility.",
    },
    {
      id: 4,
      title: " Influencer Outreach",
      description:
        "Collaborating with influencers in your industry can help promote your website and services. We identify and connect with relevant influencers to boost brand visibility as part of our Off-Page SEO Services in Bangalore.",
    },
    {
      id: 5,
      title: "Forum Participation",
      description:
        "Actively participating in relevant industry forums and answering queries establishes your expertise and increases brand exposure. Our Off-Page SEO Services in Bangalore include engaging in online communities to build strong connections.",
    },
    {
      id: 6,
      title: " Business Listings and Citations",
      description:
        "Listing your business on high-authority directories is essential for local SEO. As part of our Off-Page SEO Services in Bangalore, we ensure your business is listed on platforms like Google My Business, Yelp, and industry-specific directories to boost your online presence.",
    },
    {
      id: 7,
      title: " Press Releases",
      description:
        "Publishing press releases about your business updates can enhance credibility and attract media coverage. Our Off-Page SEO Services in Bangalore include drafting and distributing press releases to relevant platforms.",
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

export default OffPageSeoKeyCard;
