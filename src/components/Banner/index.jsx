import PropTypes from 'prop-types';

import './style.css';

const Banner = ({ imageBanner, subtitleFirst, subtitleSecond, subtitleThird, text }) => {
  return (
    <div className="banner">
      <div className={imageBanner}>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">{subtitleFirst}</p>
          <p className="subtitle">{subtitleSecond}</p>
          <p className="subtitle">{subtitleThird}</p>
          <p className="text">{text}</p>
        </section>
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageBanner: PropTypes.string.isRequired,
  subtitleFirst: PropTypes.string.isRequired,
  subtitleSecond: PropTypes.string.isRequired,
  subtitleThird: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default Banner;