import React, { useState } from "react";

// CSS
import "../css/sectionProductCard.css";

function SectionProductCard({
  productTitle,
  image,
  imageHover,
  price,
  productLink,
}) {
  const [src, setSrc] = useState(image);

  return (
    <div className="sectionProductCard">
      <a href={productLink}>
        <img
          onMouseOver={(e) => (e.currentTarget.src = imageHover)}
          onMouseOut={(e) => (e.currentTarget.src = image)}
          className="sectionProductCard__image"
          src={src}
        />
      </a>
      <h3 className="sectionProductCard__productTittle">
        <a href={productLink}>{productTitle}</a>
      </h3>
      <div className="wrapp-swap">
        <div className="swap-elements">
          {price}
          <div>
            <a className="productLink" href={productLink}>
              More details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProductCard;
