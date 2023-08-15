import React from "react";
import "../index.css";
import section3 from "../assets/section3.png";

const SectionThree = () => {
  return (
    <div className="container3">
      <div className="section-container3">
        <div className="section-info3">
          <h1>Increase your vocabulary</h1>
          <h3>Traditional and new effective approaches to word study</h3>
          <button>Textbook -{`>`} </button>
        </div>
        <div className="section-image3">
          <img src={section3} className="sectionThree-image3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
