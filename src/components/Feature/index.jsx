import PropTypes from 'prop-types';

import './style.css';

const Feature = ({ imageIcon, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imageIcon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>

  );
};

Feature.propTypes = {
  imageIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default Feature;