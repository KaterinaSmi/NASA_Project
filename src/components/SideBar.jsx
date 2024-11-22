import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ handleToggleModel, data, open }) => {
  return (
    <div className={`sidebar ${open ? 'open' : 'closed'}`}>
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>{data?.title}</h2>
        <div className='descriptContainer'>
          <p className='descriptTitle'>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handleToggleModel: PropTypes.func.isRequired,
  data: PropTypes.object,
  open: PropTypes.bool.isRequired,
};

export default SideBar;
