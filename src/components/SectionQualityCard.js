import React from "react";

// CSS
import "../css/sectionQualityCard.css";

function SectionQualityCard({ imgSrc, imgAlt, title, text }) {
  return (
    <div className="sectionQualityCard">
      <img className="sectionQualityCard__image" src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      {text.map((line, index) => {
        return (
          <p className="sectionQualityCard__text" key={index}>
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default SectionQualityCard;
