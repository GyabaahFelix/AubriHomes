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
    <section id="value" className="value-wrapper">
      <div className="value-container">
        {/* Left Side */}
        <div className="value-left">
          <div className="value-image">
            <img src="./value.png" alt="Value Illustration" />
          </div>
        </div>

        {/* Right Side */}
        <div className="value-right">
          <span className="value-orangeText">Our Core Values</span>
          <span className="value-primaryText">Value We Give to You</span>
          <span className="value-secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="value-accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`value-accordionItem ${className}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="value-accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("value-expanded")
                            : setClassName("value-collapsed")
                        }
                      </AccordionItemState>

                      <div className="value-icon">{item.icon}</div>
                      <span className="value-heading">{item.heading}</span>
                      <div className="value-icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="value-detail">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
