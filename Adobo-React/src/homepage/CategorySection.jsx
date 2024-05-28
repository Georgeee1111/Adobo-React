import React from "react";
import PropTypes from "prop-types";
import CategoryCard from "../components/generalComponents/CategoryCard";
import { categoryCardPropType } from "../proptype/propTypes";
import "../styles/categoryCard/card.css";
import GradientButton from "../components/generalComponents/GradientButton";

const CategorySection = ({ categories, columns }) => {
  return (
    <>
      <div className="category-content">
        <h1 data-translate="categories">Categories</h1>
        <GradientButton href="/categories">View all categories</GradientButton>
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
    </>
  );
};

CategorySection.propTypes = {
  categories: PropTypes.arrayOf(categoryCardPropType).isRequired,
  columns: PropTypes.number.isRequired,
};

export default CategorySection;
