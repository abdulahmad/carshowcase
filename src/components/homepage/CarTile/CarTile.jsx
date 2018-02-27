import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './CarTile.scss';

function getBuyButton(availability) {
  if (availability === 'In Dealership') {
    return <Button />;
  }
  return '';
}

const CarTile = ({
  image, name, availability,
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
};
