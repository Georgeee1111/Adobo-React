import React from "react";
import PropTypes from "prop-types";
import CategoryCard from "../components/generalComponents/CategoryCard";
import { categoryCardPropType } from "../proptype/propTypes";
import "../styles/categoryCard/card.css";
import "../styles/instagram/instagram.css";
import GradientButton from "../components/generalComponents/GradientButton";

const Testimonial = ({ categories, columns }) => {
  return (
    <>
      <div className="container">
        <h1 data-translate="categories" className="header">
          Check our @Foodieland On Instagram
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a, quo
          et nam aliquid alias iusto minima dignissimos harum praesentium
          labore.
        </p>
      </div>
      <div className="category-section" style={{ "--columns": columns }}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            images={category.images}
            multipleImages={category.multipleImages}
          />
        ))}
      </div>
      <div className="button">
        <GradientButton href="/instagram" className="gbutton">
          View our Instagram
        </GradientButton>
      </div>
    </>
  );
};

Testimonial.propTypes = {
  categories: PropTypes.arrayOf(categoryCardPropType).isRequired,
  columns: PropTypes.number.isRequired,
};

export default Testimonial;
