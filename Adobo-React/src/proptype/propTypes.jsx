import PropTypes from "prop-types";

export const headerLinkPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTranslate: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
});

export const headerLinksPropType =
  PropTypes.arrayOf(headerLinkPropType).isRequired;

export const categoryCardPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
