import React from "react";

// MATERIAL-UI
import Button from "@material-ui/core/Button";

// CSS
import "../css/footerBanner.css";

function FooterBanner() {
  return (
    <div className="footerBanner">
      <div className="footerBanner__content">
        <div className="footerBanner__contentLeft"></div>
        <div className="footerBanner__leftMini">
          <img
            src="https://arawaza.com/wp-content/themes/basel-child/images/aair-technology-logo.png"
            alt="AAIR technology logo"
          />
        </div>
      </div>
      <div className="footerBanner__content">
        <div className="footerBanner__rightMini">
          <img src="https://arawaza.com/wp-content/themes/basel-child/images/arawaza-professionnal-martial-arts-equipment-promotion.jpg" />
          <div className="footerBanner__rightMini__content">
            <h4>
              Get <span>5%</span> off
            </h4>
            <p>Your first order</p>
            <form>
              <input
                type="text"
                placeholder="Your email address"
                required={true}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
