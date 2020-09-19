import React from "react";

// COMPONENTS
import SectionProductCard from "./SectionProductCard";

// MATERIAL-UI
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// CSS
import "../css/sectionProducts.css";

function SectionProducts() {
  const OnyxZero = {
    productTitle: "Arawaza Onyx Zero Gravity, Karate",
    image:
      "https://arawaza.com/wp-content/uploads/2019/10/uniform-onyxzero-expert-arawaza-300x300.jpg",
    imageHover:
      "https://arawaza.com/wp-content/uploads/2019/11/uniform-onyxzero-expert-arawaza-1-300x300.jpg",
    price: <span className="price">&#36;174.16 - &#36;181.66</span>,
    productLink:
      "https://arawaza.com/product/arawaza-onyx-zero-gravity-karate/",
  };

  const kataGi = {
    productTitle: "Arawaza Black Diamond, Karate",
    image:
      "https://arawaza.com/wp-content/uploads/2019/10/uniform-blackdiamond-expert-white-arawaza-300x300.jpg",
    imageHover:
      "https://arawaza.com/wp-content/uploads/2019/11/uniform-blackdiamond-expert-white-arawaza-1-300x300.jpg",
    price: <span className="price">&#36;196.16 - &#36;204.40</span>,
    productLink: "https://arawaza.com/product/arawaza-black-diamond-karate/",
  };

  const arawazaBag = {
    productTitle: "Arawaza All - Around technical sport bag",
    image:
      "https://arawaza.com/wp-content/uploads/2019/10/bag-sport-allaround-technical-arawaza-300x300.jpg",
    imageHover:
      "https://arawaza.com/wp-content/uploads/2019/11/bag-sport-allaround-technical-arawaza-1-300x300.jpg",
    price: <span className="price">&#36;120</span>,
    productLink:
      "https://arawaza.com/product/arawaza-all-around-technical-sport-bag/",
  };

  const arawazaGloves = {
    productTitle: "Arawaza WKF Approved Fist Gear",
    image:
      "https://arawaza.com/wp-content/uploads/2019/10/fist-gear-wkf-approved-arawaza-300x300.jpg",
    imageHover:
      "https://arawaza.com/wp-content/uploads/2020/05/fist-gear-wkf-approved-arawaza-red-1-300x300.jpg",
    price: <span className="price">&#36;37.03</span>,
    productLink: "https://arawaza.com/product/arawaza-wkf-approved-fist-gear/",
  };

  return (
    <div className="sectionProducts">
      <div className="sectionProducts__container">
        <div className="sectionProducts__containerPromotion">
          <div className="sectionProducts__containerPromotionLeft">
            <img
              className="sectionProducts__containerPromotionImage"
              src="https://arawaza.com/wp-content/themes/basel-child/images/arawaza-equipment-designed-for-winner.png"
              alt="Arawaza martial arts equipment"
            />
          </div>
          <div className="sectionProducts__containerPromotionRight">
            <h2>
              Design for <span className="winners">Winners</span>
            </h2>
            <p>
              Arawaza® pioneers technical and innovative products in order to
              provide users with the highest performance equipment. We quest for
              perfection by committing to push the boundaries of innovation and
              design through the development of state-of-the-art equipment that
              allows martial arts enthusiasts to surpass their limits.
            </p>
          </div>
        </div>
        <div className="sectionProducts__container__headerProducts">
          <div className="btn__feature">Featured products</div>
          <a
            className="sectionProducts__viewAll"
            href="https://arawaza.com/shop/"
          >
            View all <ArrowForwardIosIcon />
          </a>
        </div>
        <div className="contentProducts">
          <div className="contentProducts__container">
            <SectionProductCard
              productTitle={OnyxZero.productTitle}
              image={OnyxZero.image}
              imageHover={OnyxZero.imageHover}
              price={OnyxZero.price}
              productLink={OnyxZero.productLink}
            />
            <SectionProductCard
              productTitle={kataGi.productTitle}
              image={kataGi.image}
              imageHover={kataGi.imageHover}
              price={kataGi.price}
              productLink={kataGi.productLink}
            />
            <SectionProductCard
              productTitle={arawazaBag.productTitle}
              image={arawazaBag.image}
              imageHover={arawazaBag.imageHover}
              price={arawazaBag.price}
              productLink={arawazaBag.productLink}
            />
            <SectionProductCard
              productTitle={arawazaGloves.productTitle}
              image={arawazaGloves.image}
              imageHover={arawazaGloves.imageHover}
              price={arawazaGloves.price}
              productLink={arawazaGloves.productLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProducts;
