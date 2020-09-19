import React from "react";

// COMPONENTS
import FooterNav from "./FooterNav";
import FooterBanner from "./FooterBanner";

// CSS
import "../css/footer.css";

function Footer() {
  return (
    <div className="mainFooter">
      <FooterBanner />
      <div className="footer">
        <FooterNav />
        <div className="footer__bottom">
          <img
            className="footer__paymentsLogos"
            src="https://arawaza.com/wp-content/uploads/2019/12/payment-icon-1.png"
            alt="Payments Logos"
          />
          © Arawaza 2020. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
