import React from "react";
import Header from "../components/generalComponents/Header";
import { links } from "../assets/header/header";
import Footer from "../components/generalComponents/Footer";
import "../styles/commonCSS/App.css";
import Hero from "./Hero";
import CategorySection from "./CategorySection";
import { categories, instagram, recipe } from "../design/CategoryCard";
import RecipeSection from "./RecipeSection";
import Testimonial from "./Testimonial";

const App = () => {
  return (
    <div>
      <Header links={links} />
      <div className="sections-container">
        <Hero />
        <CategorySection categories={categories} columns={3} />
        <RecipeSection categories={recipe} columns={3} />
        <Testimonial categories={instagram} columns={4} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
