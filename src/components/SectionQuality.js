import React from "react";

// COMPONENTS
import SectionQualityCard from "./SectionQualityCard";

// CSS
import "../css/sectionQuality.css";

function SectionQuality() {
  const highestQuality = {
    imgSrc:
      "https://arawaza.com/wp-content/themes/basel-child/images/arawaza-highest-quality.png",
    imgAlt: "Highest quality",
    title: ["Highest", <br />, "quality"],
    text: [
      "We offer high quality Martial Arts equipment: Karate, WKF products, Judo, Taekwondo, Kung Fu, Kobudo and much more…",
    ],
  };

  const largeInventory = {
    imgSrc:
      "https://arawaza.com/wp-content/themes/basel-child/images/arawaza-large-inventory.png",
    imgAlt: "Large inventory",
    title: ["Large", <br />, "inventory"],
    text: [
      "We hold a huge selection of martial arts inventory in our warehouses and offer multiple products to fulfill your needs.",
    ],
  };

  const fastShipping = {
    imgSrc:
      "https://arawaza.com/wp-content/themes/basel-child/images/arawaza-fast-shipping.png",
    imgAlt: "Fast shipping",
    title: ["Fast", <br />, "shipping"],
    text: [
      "Fast shipping at the best price all over the world within 24 hours when inventory permits.",
    ],
  };

  const wholesalePrices = {
    imgSrc:
      "https://arawaza.com/wp-content/uploads/2019/11/arawaza-wholesale-prices.png",
    imgAlt: "Wholesale prices",
    title: ["Wholesale", <br />, "prices"],
    text: [
      "Own a Martial Arts Club?",
      <p>
        Take advantage of our{" "}
        <a href="https://arawaza.com/wholesale/">wholesale prices</a>
      </p>,
    ],
  };

  return (
    <section className="sectionQuality">
      <div className="sectionQuality__container">
        <SectionQualityCard
          imgSrc={highestQuality.imgSrc}
          imgAlt={highestQuality.imgAlt}
          title={highestQuality.title}
          text={highestQuality.text}
        />
        <SectionQualityCard
          imgSrc={largeInventory.imgSrc}
          imgAlt={largeInventory.imgAlt}
          title={largeInventory.title}
          text={largeInventory.text}
        />
        <SectionQualityCard
          imgSrc={fastShipping.imgSrc}
          imgAlt={fastShipping.imgAlt}
          title={fastShipping.title}
          text={fastShipping.text}
        />
        <SectionQualityCard
          imgSrc={wholesalePrices.imgSrc}
          imgAlt={wholesalePrices.imgAlt}
          title={wholesalePrices.title}
          text={wholesalePrices.text}
        />
      </div>
    </section>
  );
}

export default SectionQuality;
