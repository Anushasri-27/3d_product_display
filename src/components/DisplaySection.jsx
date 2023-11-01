import React from "react";

const DisplaySection = ({triggerPreview}) => {
  const handleScrollTo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brillient</p>
      <span className="description">
        A display that's up to 2x brighter in Sun.
      </span>
      <button className="button" onClick={triggerPreview}>Try me!</button>
      <button className="back-button" onClick={handleScrollTo}>Top</button>
    </div>
  );
};

export default DisplaySection;
