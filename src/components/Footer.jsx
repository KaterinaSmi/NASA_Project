import PropTypes from 'prop-types';

const Footer = ({ handleToggleModel, data }) => {
  return (
    <footer>
      <div className='bgGradient'>
        <h2>{data?.title}</h2>
        <h1>APOD Project</h1>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  handleToggleModel: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default Footer;
