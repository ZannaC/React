import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <LogoBlock />
        <ServicesBlock />
        <AboutBlock />
        <SocialMediaBlock />
      </div>
    </footer>
  );
}
function LogoBlock() {
  return (
    <div className="logo-block">
      <div className="footer-logo">
        <img src="images/footer-images/footer-logo.png" alt="Footer Logo" />
      </div>
      <div className="all-rights">
        Copyright © 2020. LogoIpsum. All rights reserved.
      </div>
      <div className="footer-subscribe">
        Subscribe to our <br />
        newsletter
      </div>
      <div className="email-btn">
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" className="email-btn-input" />
        </div>
        <div className="email-submit-btn">
          <img src="images/footer-images/submit.png" alt="Submit" />
        </div>
      </div>
    </div>
  );
}

function ServicesBlock() {
  return (
    <div className="services-block">
      <ul>
        <li className="li-title">Services</li>
        <li>Email Marketing</li>
        <li>Campaigns</li>
        <li>Branding</li>
        <li>Offline</li>
      </ul>
    </div>
  );
}

function AboutBlock() {
  return (
    <div className="about-block">
      <ul>
        <li className="li-title">About</li>
        <li>Our Story</li>
        <li>Benefits</li>
        <li>Team</li>
        <li>Careers</li>
      </ul>
    </div>
  );
}

function SocialMediaBlock() {
  return (
    <div className="btn-socialMedia">
      <div className="back-to-top-btn">
        <img src="images/footer-images/back-to-top.png" alt="Back to Top" />
      </div>
      <div className="socialMedia">
        <img src="images/footer-images/Facebook.svg" alt="Facebook" />

        <img src="images/footer-images/Twitter.svg" alt="Twitter" />

        <img src="images/footer-images/Instagram.svg" alt="Instagram" />
      </div>
    </div>
  );
}

export default Footer;
