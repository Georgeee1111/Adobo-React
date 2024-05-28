import React, { useState, useEffect } from "react";
import "../styles/heroCSS/Hero.css";
import importImages from "../design/heroImages";
import GradientButton from "../components/generalComponents/GradientButton";

const Hero = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await importImages();
      setHeroImages(images);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (heroImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % heroImages.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [heroImages]);

  if (heroImages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="main-container" id="main-content">
        <section className="hero-section" id="hero-section">
          <div className="content-container">
            <article className="text-container">
              <div className="text-content">
                <h1 data-translate="spicy_delicious_chicken_adobo">
                  Spicy Delicious <br /> Chicken Adobo
                </h1>
                <p data-translate="lorem_ipsum">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  a, quo et nam aliquid alias iusto minima dignissimos harum
                  praesentium labore.
                </p>
              </div>
              <div className="description-container">
                <div className="clock-container">
                  <i className="fa-solid fa-clock"></i>
                  <span>30 Minutes</span>
                </div>
                <div className="category-container">
                  <i className="fa-solid fa-utensils"></i>
                  <span>Chicken</span>
                </div>
              </div>
              <div className="creator-wrapper">
                <img className="creator" src="Jasmin.jpg" alt="creator" />
                <div className="creator-container">
                  <span className="name">John Smith</span>
                  <span>15 March 2022</span>
                </div>
                <div className="btn">
                  <GradientButton
                    href="Adobo (1).html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipes &rarr;
                  </GradientButton>
                </div>
              </div>
            </article>
            <article className="image-container">
              <img
                src={heroImages[currentImageIndex].default}
                alt="hero-image"
              />
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
