import React, { useEffect, useState } from "react";

// AXIOS
import axios from "axios";

// COMPONENTS
import SectionProductCard from "./SectionProductCard";

// MATERIAL-UI
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// CSS
import "../css/sectionProducts.css";

function SectionProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/product/");
      if (response.status === 200) setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

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
            {products.map((product) => (
              <SectionProductCard
                key={product._id}
                title={product.name}
                image={product.thumbnail}
                imageHover={product.imageHover}
                price={product.price}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProducts;
