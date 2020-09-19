import React from "react";

// MATERIAL UI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// CSS
import "../css/sectionAbout.css";

function SectionAbout() {
  return (
    <div className="sectionAbout">
      <Container className="sectionAbout__container">
        <img
          src="https://arawaza.com/wp-content/themes/basel-child/images/discover-arawaza-martial-arts-equipment.png"
          alt
        />
        <div className="sectionAbout__content">
          <p>
            <img
              className="sectionAbout__arawazaLogo"
              src="https://arawaza.com/wp-content/uploads/2019/11/arawaza-martial-arts-equipment-logo-blue.png"
              alt="Arawaza"
            />
            <br />
            <strong>
              Arawaza® is a brand with a genuine passion for martial arts that
              pioneers technical and innovative products in order to provide
              users with the highest performance equipment for competition,
              training and instructing all around the world.
            </strong>
          </p>
          <p>
            We do not settle for the ordinary. We never did and never will. This
            is one of the reasons why we are a top supplier in martial arts
            equipment worldwide.
          </p>
          <p>
            <Button
              href="https://arawaza.com/about-us/"
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
            >
              Discover Arawaza®
            </Button>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SectionAbout;
