import React from "react";

// CSS
import "../css/footerNavList.css";

function FooterNavList({ title, listLinks }) {
  return (
    <div className="footerNavList">
      <h5 className="footerNavList__title">{title}</h5>
      <div className="footerNavList__list">
        {listLinks.map((link) => {
          return <a>{link}</a>;
        })}
      </div>
    </div>
  );
}

export default FooterNavList;
