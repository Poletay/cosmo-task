import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

const mapStatToProps = () => ({});

const MiddleBar = ({ sortPlaces, switchRotateDirection }) => {
  const onClick = () => {
    sortPlaces();
    switchRotateDirection();
  };

  return (
    <div className="middle-bar" onClick={onClick} onKeyDown={() => {}} role="button" tabIndex="0">
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  );
};

MiddleBar.propTypes = {
  sortPlaces: PropTypes.func.isRequired,
  switchRotateDirection: PropTypes.func.isRequired,
};

export default connect(mapStatToProps, actionCreators)(MiddleBar);
