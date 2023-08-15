import React from "react";
import "../index.css";
import charge600 from "../assets/charge600+.png";
import charge2 from "../assets/charge2+.png";
import section1 from "../assets/section1.png";

const SectionOne = () => {
  return (
    <div className="container">
      <div className="section-container">
        <div className="section-info">
          <h2>E-COURSE PLATFORM</h2>
          <h1>Learning and teaching online, made easy.</h1>
          <h3>Practice your English and learn new things with the platform.</h3>
          <button>About platform</button>
          <div className="charge-image-block">
            <img src={charge600} className="charge600" alt="" />
            <div class="vertical-line"></div>
            <img src={charge2} className="charge2" alt="" />
          </div>
        </div>
        <div className="section-image">
          <img src={section1} className="sectionOne-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
