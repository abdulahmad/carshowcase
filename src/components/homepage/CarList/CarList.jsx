import React from 'react';
import PropTypes from 'prop-types';
import './CarList.scss';
// import APIService from '../../../services/APIService';
import CarTile from '../CarTile/CarTile';

// const carTiles = this.props.cars.map(car => <CarTile {...car} />);

function getCars(cars) {
  return cars.map(car => <CarTile {...car} />);
}

const CarList = props => (
  <div className="CarList">
    {getCars(props.cars)}
  </div>
);

export default CarList;

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
