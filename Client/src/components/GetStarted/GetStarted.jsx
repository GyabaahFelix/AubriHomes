import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="inner-container">
          <span className="primaryText">
            Start Your Journey with <strong className="highlight">XivhaWorld</strong>
          </span>
          <p className="secondaryText">
            Subscribe now and get exclusive property offers.
            <br />
            Find your dream home quickly and effortlessly.
          </p>
          <a href="mailto:support@xivhaworld.com" className="button">
            Get Started
          </a>
          <div className="circle-bg"></div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
