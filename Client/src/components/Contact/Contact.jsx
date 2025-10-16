import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">We’re Here to Help You</span>
          <span className="secondaryText">
            Whether you’re buying, renting, or listing a property, our team at
            <strong> AubriHomes</strong> is always ready to assist. Let’s make
            your home journey easy and stress-free.
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Start Video Call</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">024 540 2719</span>
                  </div>
                </div>
                <div className="flexCenter button">Send Message</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="/contact.jpg" alt="Contact AubriHomes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
