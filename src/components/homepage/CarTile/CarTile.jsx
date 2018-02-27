import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import './CarTile.scss';

function getBuyButton(availability) {
  if (availability === 'In Dealership') {
    return <Button />;
  }
  return '';
}

const CarTile = ({
  image, name, make, model, year, availability,
}) => (
  <div className="CarTile">
    <img className="CarTile__img" src={image} alt={name} />
    <span className="CarTitle__name">{ name }</span>
    <span className="CarTitle__availability">{availability}</span>
    {getBuyButton(availability)}
  </div>
);

export default CarTile;

CarTile.propTypes = {
  // authorBio: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  availability: PropTypes.string.isRequired,
};
