import React from 'react';
// import PropTypes from 'prop-types';
import './Homepage.scss';
import APIService from '../../../services/APIService';
import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import CarList from '../CarList/CarList';
import Footer from '../Footer/Footer';

class Homepage extends React.Component {
  componentWillMount() {
    this.setState({ cars: APIService.getCars().response });
    this.sort.bind(this);
  }

  sort(order) {
    this.setState({ order });
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
  // authorBio: PropTypes.object.isRequired,
};
