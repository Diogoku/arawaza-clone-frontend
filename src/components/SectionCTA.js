import React from "react";

// CSS
import "../css/sectionCTA.css";

function SectionCTA({ title, text, contentType, link, linkText }) {
  return (
    <section className={"sectionCTA" + contentType}>
      <div className={"sectionCTA__" + contentType}></div>
      <div className="sectionCTA__content">
        <div className="sectionCTA__contentLeft">
          <h2>{title}</h2>
          <p>
            {text.map((line) => {
              return line;
            })}
          </p>
        </div>
        <div className="sectionCTA__contentRight">
          <a href={link} target="_blank">
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionCTA;
