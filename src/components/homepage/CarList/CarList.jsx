import React from 'react';
import PropTypes from 'prop-types';
import './CarList.scss';
// import APIService from '../../../services/APIService';
import CarTile from '../CarTile/CarTile';

class CarList extends React.Component {
  render() {
    const carTiles = this.props.cars.map(car => <CarTile {...car} />);
    return (
      <div className="CarList">
        {carTiles}
      </div>
    );
  }
}

export default CarList;

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
