import Image from "next/image";
import "./HomeServices.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function HomeServiceMain() {
  const card = [
    {
      id: "1",
      head: "SEO",
      para: "Your trusted partner for Boosting Rankings,Driving Traffic, and Increasing Revenue.",
      color: "#FEBFDA",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276180-1.png",
    },
    {
      id: "2",
      head: "On-Page SEO",
      para: "Our experts optimize every element for Better Rankings and User Experience.",
      color: "#CAC6FD",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186-1.png",
    },
    {
      id: "3",
      head: "Off-Page SEO",
      para: "We build Quality Backlinks and Authority for lasting Search Engine Success.",
      color: "#FFE8A4",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276187-1.png",
    },
    {
      id: "4",
      head: "Google My Business Page",
      para: "Boost your local visibility and attract customers with our optimization services. Be where your customers search.",
      color: "#D4FFD6",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186-1.png",
    },
    {
      id: "5",
      head: "SEO Consultation",
      para: "Get expert Insights and Tailored Strategies for your SEO success with our SEO consultation services.",
      color: "#FEBFDA",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276188-1.png",
    },
    {
      id: "6",
      head: "SEO Auditing",
      para: "Enhance your website's performance with our thorough SEO Auditing Services. Uncover Optimization Opportunities and Boost Rankings.",
      color: "#CAC6FD",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276180-1.png",
    },
  ];
  return (
    <div className="homeServiceMain-container">
      {card.map((x) => (
        <div
          className="homeServiceMain-card"
          style={{ backgroundColor: x.color }}
          key={x.id}
        >
          <div className="homeServiceMain-cardContent4">
            <h3>{x.head}</h3>
          </div>
          <div className="homeServiceMain-cardContent4">
            <img src={x.img} alt={x.head} />
          </div>
          <div className="homeServiceMain-cardContent4">
            <p>{x.para}</p>
          </div>
        </div>
      ))}
      <div className="homeServiceMain-button">
        <Link href="/services">
          <button>
            View More Services <GoArrowUpRight className="homeServiceMain-arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
}
