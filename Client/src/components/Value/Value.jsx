import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="innerWidth flexCenter v-container">
        {/* Left Side - Text */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Core Values</span>
          <span className="primaryText">Why Choose AubriHomes</span>
          <span className="secondaryText">
            Discover what makes AubriHomes the trusted choice for finding your
            dream home or property. <br />
            We’re committed to providing exceptional service and reliable
            housing solutions.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon arrow">
                        <MdOutlineArrowDropDown size={22} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Right Side - Image */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="AubriHomes Value" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
