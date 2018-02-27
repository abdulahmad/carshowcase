import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const Dropdown = props => (
  <select className="Dropdown" onChange={props.sort}>
    <option selected disabled>Sort By</option>
    <option value="name">Name</option>
    <option value="availability">Availability</option>
  </select>
);

export default Dropdown;

Dropdown.propTypes = {
  sort: PropTypes.func.isRequired,
};
