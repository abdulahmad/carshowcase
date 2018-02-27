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
      this.setState({ cars: APIService.getCars(this.state.order).response });
    }
  }

  sort(event) {
    this.setState({ order: event.target.value });
    this.setState({ cars: APIService.getCars(event.target.value).response });
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
