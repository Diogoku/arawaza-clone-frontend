import React from "react";

// MATERIAL UI
import Button from "@material-ui/core/Button";

// CSS
import "../css/footerNavList.css";

function FooterNavList({ title, listLinks }) {
  return (
    <div className="footerNavList">
      <h5 className="footerNavList__title">{title}</h5>
      <div className="footerNavList__list">
        {listLinks.map((link, index) => {
          return (
            <Button key={index} size="small">
              {link}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default FooterNavList;
