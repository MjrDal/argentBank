import PropTypes from "prop-types";

function FeaturesHome({ image, alt, title, description }) {
  return (
    <div className="feature-item">
      <img src={image} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

FeaturesHome.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeaturesHome;
