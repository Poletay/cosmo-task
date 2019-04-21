import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

const mapStatToProps = () => ({});

const Menu = ({ menuItems, fetchPlaces }) => {
  const onClick = () => fetchPlaces();

  const menuElements = menuItems.map(({ id, name }) => (
    <li key={id} className="nav-item">
      <div
        onClick={onClick}
        onKeyDown={() => {}}
        role="button"
        className="nav-link"
        tabIndex="0"
      >
        {name}
      </div>
    </li>
  ));

  return (
    <ul className="nav">
      {menuElements}
    </ul>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  fetchPlaces: PropTypes.func.isRequired,
};

export default connect(mapStatToProps, actionCreators)(Menu);
