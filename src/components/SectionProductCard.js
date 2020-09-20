import React from "react";

// CSS
import "../css/sectionProductCard.css";

function SectionProductCard({ title, image, imageHover, price, link }) {
  const src = image;

  return (
    <div className="sectionProductCard">
      <a href={link}>
        <img
          onMouseOver={(e) => (e.currentTarget.src = imageHover)}
          onMouseOut={(e) => (e.currentTarget.src = image)}
          className="sectionProductCard__image"
          src={src}
          alt=""
        />
      </a>
      <h3 className="sectionProductCard__productTittle">
        <a href={link}>{title}</a>
      </h3>
      <div className="wrapp-swap">
        <div className="swap-elements">
          &#36;{price}
          <div>
            <a className="productLink" href={link}>
              More details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProductCard;
