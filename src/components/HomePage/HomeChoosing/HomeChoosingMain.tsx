import "./HomeChoosing.css";
import { FaUserClock } from "react-icons/fa";
import { GiOpenFolder } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";

export default function HomeChoosingMain() {
  const card = [
    {
      id: "1",
      icon: <FaUserClock className="homeChoosing-icon" />,
      head: "Experience",
      para: "Experience: Look for professionals with a proven track record of delivering results for clients.",
    },
    {
      id: "2",
      icon: <GiOpenFolder className="homeChoosing-icon" />,
      head: "Portfolio",
      para: " Review their portfolio to assess the quality of their work and see if they have experience in your industry.",
    },
    {
      id: "3",
      icon: <FaUsers className="homeChoosing-icon" />,
      head: "Client Testimonials",
      para: " Read reviews and testimonials from previous clients to gauge client satisfaction.",
    },
    {
      id: "4",
      icon: <RiSpeakFill className="homeChoosing-icon" />,
      head: "Communication",
      para: " Ensure that the freelancer communicates clearly and can understand your business goals.",
    },
    {
      id: "5",
      icon: <GiBrain className="homeChoosing-icon" />,
      head: "Customized Strategy",
      para: " A good freelance SEO professional will develop a strategy tailored to your business rather than offering a one-size-fits-all approach.",
    },
  ];
  return (
    <div className="homeChoosingMain-container">
      <div className="homeChoosingMain-content">
        {" "}
        <div className="homeChoosingMain-circle1">
          <div className="homeChoosingMain-circle2">
            <div className="homeChoosingMain-circle3"></div>
          </div>
        </div>
        <div className="homeChoosingMain-cover">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/work-img1-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="homeChoosingMain-content">
        {card.map((x) => (
          <div className="homeChoosingMain-itemContainer" key={x.id}>
            <div className="homeChoosingMain-item">{x.icon}</div>
            <div className="homeChoosingMain-itemTxt">
              <h3>{x.head}</h3>
              <p>{x.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
