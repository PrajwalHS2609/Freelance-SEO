import "./HomeSeoPractices.css";
import { FaCheck } from "react-icons/fa6";

export default function HomeSeoPracticesMain() {
  return (
    <div className="homeSeoPractices-mainContainer">
      <ul>
        <li>
          <FaCheck className="homeSeoIcon"/>
          Keyword Research
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          High-Quality Content
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          On-Page SEO
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          Mobile Optimization
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          Page Speed
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          SSL Certificate (HTTPS)
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          Backlink Building
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          Local SEO
        </li>
        <li>
          <FaCheck className="homeSeoIcon"/>
          Analytics and Monitoring
        </li>
      </ul>
      <p>
        Remember that SEO is an ongoing process, and results may take time.
        Staying updated with industry trends and algorithm changes is crucial to
        maintaining and improving your website’s search engine rankings.
      </p>
    </div>
  );
}
