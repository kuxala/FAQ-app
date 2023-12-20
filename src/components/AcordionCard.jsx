import { useState } from "react";

function AcordionCard(props) {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);
  // const [isVisible2, setIsVisible2] = useState(false);
  // const [isVisible3, setIsVisible3] = useState(false);
  const handleClick = (number) => {
    if (activeAccordionNumber === number) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(number);
    }
  };

  return (
    <>
      <div onClick={() => handleClick(1)}>
        <p className="p-text">
          <div className="div-text">{props.title}</div>
          <img src="../images/icon-arrow-down.svg" className="arrow" />
        </p>

        <div className="droptext">
          {activeAccordionNumber === 1 ? <p>{props.dropdown}</p> : null}
        </div>
        <div className="underline"></div>
      </div>
    </>
  );
}

export default AcordionCard;
