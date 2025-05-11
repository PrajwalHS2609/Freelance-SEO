import "./HomeAdv.css";
import costImg from "@/imgs/homeAdv/cost.jpg";
import attentionImg from "@/imgs/homeAdv/attention.jpg";
import flexibleImg from "@/imgs/homeAdv/flexibility.jpg";
import expertiseImg from "@/imgs/homeAdv/expertise.jpg";
import communication from "@/imgs/homeAdv/communication.jpg";
import Image from "next/image";

export default function HomeAdvMain() {
  const card = [
    {
      id: "1",
      img: costImg,
      head: "Cost-Effective:",
      para: " Freelancers often have lower overhead costs compared to agencies,allowing them to provide competitive pricing for their services.",
    },
    {
      id: "2",
      img: attentionImg,
      head: "Personalized Attention:",
      para: " Freelancers typically work with a limited number of clients, ensuring that each client receives personalized attention and a customized SEO strategy tailored to their unique needs.",
    },
    {
      id: "3",
      img: expertiseImg,
      head: "Expertise: ",
      para: "Many freelance SEO professionals in Bangalore have years of experience working in the industry and stay updated with the latest SEO trends and algorithms.",
    },
    {
      id: "4",
      img: flexibleImg,
      head: "Flexibility:",
      para: " Freelancers can adapt quickly to changes in your business or industry, making them agile partners in your SEO journey.",
    },
    {
      id: "5",
      img: communication,
      head: "Transparent Communication:",
      para: " Freelancers often maintain direct and transparent communication with clients, fostering trust and collaboration.",
    },
  ];
  return (
    <div className="homeAdvMain-container">
      {card.map((x) => (
        <div className="homeAdvMain-card" key={x.id}>
          <Image src={x.img} alt={x.head} />
          <div className="homeAdvMain-cardCover">
            <span>
              <h3>{x.head}</h3>
            </span>
            <p>{x.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
