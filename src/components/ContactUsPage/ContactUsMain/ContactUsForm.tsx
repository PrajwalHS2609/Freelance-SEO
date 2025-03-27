"use client";
import { useState } from "react";
import "./ContactUsMain.css";
export default function ContactUsForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const onSubmit = () => {};
  return (
    <div className="contactUsForm">
      <h3>GET IN TOUCH</h3>
      <p>
        We’re here to help! If you have any questions or would like to discuss
        how our SEO and digital marketing services can benefit your business,
      </p>
      <form action="" onSubmit={onSubmit}>
        <div className="firstLayer">
          {" "}
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            autoComplete="off"
          />
          <input
            type="phone"
            placeholder="Phone number"
            required
            autoComplete="off"
            name="phone"
          />
        </div>
        <div className="secondLayer">
          <textarea
            placeholder="Your Message"
            required
            autoComplete="off"
            name="message"
          ></textarea>
        </div>
        <div className="thirdLayer">
          {" "}
          <button type="submit">Send Message</button>
        </div>
        <div className="privacy">
          {" "}
          <input
            type="checkbox"
            name="check"
            id="check"
            required
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          I give my consent to freelanceseo.Com's Digital Marketing team to
          reach out to me with updates and notifications through Email, SMS,
          WhatsApp, and Voice Calls, in accordance with their Privacy Policy.
          This authorization supersedes any registration under
          DNC/NDNC guidelines.
        </div>
      </form>
    </div>
  );
}
