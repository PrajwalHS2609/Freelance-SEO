import "./HomeAdv.css";
export default function HomeAdvMain() {
  const card = [
    {
      id: "1",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/case-img2.png",
      head: "Cost-Effective:",
      para: " Freelancers often have lower overhead costs compared to agencies,allowing them to provide competitive pricing for their services.",
    },
    {
      id: "2",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/case-img3.png",
      head: "Personalized Attention:",
      para: " Freelancers typically work with a limited number of clients, ensuring that each client receives personalized attention and a customized SEO strategy tailored to their unique needs.",
    },
    {
      id: "3",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/case-img4.png",
      head: "Expertise: ",
      para: "Many freelance SEO professionals in Bangalore have years of experience working in the industry and stay updated with the latest SEO trends and algorithms.",
    },
    {
      id: "4",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/case-img5.png",
      head: "Flexibility:",
      para: " Freelancers can adapt quickly to changes in your business or industry, making them agile partners in your SEO journey.",
    },
    {
      id: "5",
      img: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/case-img6.png",
      head: "Transparent Communication:",
      para: " Freelancers often maintain direct and transparent communication with clients, fostering trust and collaboration.",
    },
  ];
  return (
    <div className="homeAdvMain-container">
      {card.map((x) => (
        <div className="homeAdvMain-card" key={x.id}>
          <img src={x.img} alt={x.head} />
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
