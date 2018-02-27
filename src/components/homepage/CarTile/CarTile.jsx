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
    <div className="CarTile__name">{ name }</div>
    <div className="CarTile__availability">{availability}</div>
    {getBuyButton(availability)}
  </div>
);

export default CarTile;

CarTile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
};
