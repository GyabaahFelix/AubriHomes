import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Get in Touch with AubriHomes</span>
          <span className="secondaryText">
            We’re always ready to assist you in finding your dream property.
            Reach out to us easily through any of the options below.
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText small">Call</span>
                    <span className="secondaryText small">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText small">Chat</span>
                    <span className="secondaryText small">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Us</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText small">Video Call</span>
                    <span className="secondaryText small">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText small">Message</span>
                    <span className="secondaryText small">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Message</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact AubriHomes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
