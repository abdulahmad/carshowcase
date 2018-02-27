import React from 'react';
// import PropTypes from 'prop-types';
import './Homepage.scss';
import APIService from '../../../services/APIService';
import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import CarList from '../CarList/CarList';
import Footer from '../Footer/Footer';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { order: '' };

    this.sort = this.sort.bind(this);
  }
  componentWillMount() {
    if (typeof this.state.cars === 'undefined') {
      this.setState({ cars: this.getCarsFromAPIService(this.state.order) });
    }
  }

  // These API calls would normally be wrapped in promises
  // for a proper implementation against an API
  getCarsFromAPIService(order) { // eslint-disable-line
    const cars = APIService.getCars(order).response;
    for (let i = 0; i < cars.length; i += 1) {
      cars[i].availability = APIService.getAvailability(cars[i].id).available;
    }
    return cars;
  }

  sort(event) {
    this.setState({ order: event.target.value });
    this.setState({ cars: this.getCarsFromAPIService(this.state.order) });
  }

  render() {
    return (
      <div className="Homepage">
        <Header />
        <Dropdown sort={this.sort} />
        <CarList order={this.state.order} cars={this.state.cars} />
        <Footer />
      </div>
    );
  }
}

export default Homepage;

Homepage.propTypes = {
};
