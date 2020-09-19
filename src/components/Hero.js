import React, { useState } from "react";

// FRAMER MOTION
import { motion } from "framer-motion";

// MATERIAL-UI
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

// CSS
import "../css/hero.css";

function Hero() {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * 2) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * 2 ? setX(0) : setX(x - 100);
  };

  return (
    <div className="hero">
      <div className="hero__slider">
        <div className="slide" style={{ transform: `translateX(${x}%)` }}>
          <img
            className="hero__sliderImage"
            src="https://arawaza.com/douglasbrose/wp-content/uploads/2019/10/uniform-onyxzero-expert-arawaza.jpg"
            alt=""
          />
        </div>
        <div className="slide" style={{ transform: `translateX(${x}%)` }}>
          <img
            className="hero__sliderImage"
            src="https://arawaza.com/wp-content/uploads/2019/10/uniform-blackdiamond-expert-white-arawaza.jpg"
            alt=""
          />
        </div>
        <div className="slide" style={{ transform: `translateX(${x}%)` }}>
          <img
            className="hero__sliderImage"
            src="https://arawaza.com/wp-content/uploads/2019/10/uniform-opal-expert-white-arawaza.jpg"
            alt=""
          />
        </div>
      </div>
      <button id="goLeft" className="hero__buttonSlide" onClick={goLeft}>
        <ArrowBackIosIcon />
      </button>
      <button id="goRight" className="hero__buttonSlide" onClick={goRight}>
        <ArrowForwardIosIcon />
      </button>
      <div className="hero__text">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__textTop"
        >
          <span className="hero__textTopLeft">pro</span>
          <span className="hero__textTopRight">fessional</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero__textMiddle"
        >
          martial arts
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero__textBottom"
        >
          equipment
        </motion.p>
        <Fade in={true} timeout={4000}>
          <Button variant="contained" color="primary" size="large">
            Shop Online Now
          </Button>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
