import React from "react";
import PropTypes from "prop-types";
import CategoryCard from "../components/generalComponents/CategoryCard";
import { categoryCardPropType } from "../proptype/propTypes";
import "../styles/categoryCard/card.css";
import GradientButton from "../components/generalComponents/GradientButton";

const RecipeSection = ({ categories, columns }) => {
  return (
    <>
      <div className="category-content">
        <h1 data-translate="categories">Recipe</h1>
        <GradientButton href="/categories">View All Recipe</GradientButton>
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

RecipeSection.propTypes = {
  categories: PropTypes.arrayOf(categoryCardPropType).isRequired,
  columns: PropTypes.number.isRequired,
};

export default RecipeSection;
