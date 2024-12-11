"use client";
import { useState } from "react";
import "./HomeFaq.css"; // Import the CSS file

export default function FaqAccordion({
  title = "Default Title",
  content = "Default Content",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h5 className="accordion-title">{title}</h5>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
