import "../../styles/gradientButton/GradientButton.css";

const GradientButton = ({ href, children }) => (
  <a href={href} className="gradient-button">
    {children}
  </a>
);

export default GradientButton;
