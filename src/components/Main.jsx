import PropTypes from 'prop-types';

const Main = ({ data }) => {
  return (
    <div className="main-container">
      <img
        className="main-image"
        src={data?.url}
        alt="NASA Image of the Day"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

Main.propTypes = {
  data: PropTypes.object.isRequired, // Ensure that data is always passed
};

export default Main;
