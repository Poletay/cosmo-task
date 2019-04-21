import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions';

const mapStatToProps = () => ({});

const PlaceCard = ({ place: { img, title, description }, rotatePlaces }) => {
  const onClick = () => rotatePlaces();

  return (
    <div className="card place-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img className="place-img" src={img} alt={title} />
        <p className="card-text">{description}</p>
        <button onClick={onClick} type="button">Read more</button>
      </div>
    </div>
  );
}

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  rotatePlaces: PropTypes.func.isRequired,
};

export default connect(mapStatToProps, actionCreators)(PlaceCard);
