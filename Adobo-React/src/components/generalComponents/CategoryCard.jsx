import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { categoryCardPropType } from "../../proptype/propTypes";

import "../../styles/categoryCard/card.css";

const CategoryCard = ({ title, images, multipleImages = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log("multipleImages prop:", multipleImages);
    if (multipleImages) {
      console.log("Entered useEffect hook for multiple images");
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [images, multipleImages]);

  return (
    <div className="category-card">
      <div
        className="category-card-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="category-card-content">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  ...categoryCardPropType,
  multipleImages: PropTypes.bool,
};

export default CategoryCard;
