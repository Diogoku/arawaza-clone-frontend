import React from "react";

// COMPONENTS
import FooterNavList from "./FooterNavList";

// MATERIAL-UI
import PhoneIcon from "@material-ui/icons/Phone";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

// CSS
import "../css/footerNav.css";

function FooterNav() {
  const navLists = {
    Navigation: [
      "Home",
      "Our products",
      "Videos",
      "About us",
      "Contact",
      "My account",
    ],
    Products: [
      "All products",
      "WKF Products",
      "Training Gear",
      "Clothing/Apparel",
      "Acessories/Other",
      "On sale",
      "Promotions",
    ],
    Services: [
      "Embroidery",
      "Crests/Badges",
      "Label Style",
      "Price list",
      "Wholesale",
    ],
    Informations: ["Product care", "Terms & conditions", "Privacy"],
  };

  return (
    <div className="footerNav">
      {Object.keys(navLists).map((navList) => {
        return <FooterNavList title={navList} listLinks={navLists[navList]} />;
      })}

      <div className="footerNav__contact">
        <h5 className="footerNavList__title">Contact Arawaza</h5>
        <a className="footerNav__contactTel">
          <PhoneIcon /> 1-800-563-6785
        </a>
        <div className="footerNav__contactOtherTel">
          Local: <a>1 450-477-4410</a>
          <br />
          Fax: <a>1 450-477-4410</a>
        </div>

        <a className="footerNav__email">sales@arawaza.com</a>
        <div className="footerNav__socialMedia">
          <YouTubeIcon />
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
