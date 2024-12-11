import FaqAccordion from "./FaqAccordion";
import "./HomeFaq.css"; // Import the CSS file
import HomeFaqHead from "./HomeFaqHead";

export default function HomeFaq() {
  const faqs = [
    {
      title: "1. How long does it take to see SEO results?",
      content:
        "Information on the timeline for SEO results, considering factors like website age, competition, and optimization efforts.",
    },
    {
      title:
        "2. Do you offer custom SEO strategies, or is it a one-size-fits-all approach?",
      content:
        "Clarification on whether the SEO service provides tailored strategies based on individual website needs.",
    },
    {
      title: "3. Do you follow Google's guidelines and best practices for SEO?",
      content:
        "Assurance that the SEO service adheres to ethical practices and doesn’t engage in black-hat SEO techniques.",
    },
    {
      title:
        "4.What tools and software do you use for SEO analysis and tracking?",
      content:
        "Information about SEO tools and software used for keyword tracking, website audits, and performance monitoring.",
    },
    {
      title: "5.Do you offer any guarantees regarding SEO results?",
      content:
        "Clarification on what guarantees, if any, are provided in terms of SEO performance.",
    },
  ];

  return (
    <div className="homeFaq-container">
      <HomeFaqHead />
      <div className="homeFaq-content">
        {faqs.map((faq, index) => (
          <FaqAccordion key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
}
