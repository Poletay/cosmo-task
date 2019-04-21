import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions';
import PlaceCard from './PlaceCard';

const mapStateToProps = ({ places: { placesList } }) => ({ places: [...placesList] });

const PlacesList = ({ places }) => {
  const listOfPlaces = places.map(place => (<PlaceCard key={place.id} place={place} />));
  return (
    <div className="places-list">
      {listOfPlaces}
    </div>
  );
};

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, actionCreators)(PlacesList);
