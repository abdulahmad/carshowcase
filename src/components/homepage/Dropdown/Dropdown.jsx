import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const Dropdown = ({ sort }) => (
  <select>
    <option selected disabled>Sort By</option>
    <option value="name" onClick={sort('name')}>Name</option>
    <option value="availability" onClick={sort('availability')}>Availability</option>
  </select>
);

export default Dropdown;

Dropdown.propTypes = {
  sort: PropTypes.func.isRequired,
};
