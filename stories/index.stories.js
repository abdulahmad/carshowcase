import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Homepage from '../src/components/homepage/Homepage/Homepage';
import Button from '../src/components/homepage/Button/Button';
import CarTile from '../src/components/homepage/CarTile/CarTile';
import Dropdown from '../src/components/homepage/Dropdown/Dropdown';
import CarsResponse from '../src/services/mock/carsResponse.json';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const car = CarsResponse.response[0];
storiesOf('Homepage', module)
  .add('Homepage', () => <Homepage />)
  .add('Button', () => <Button />)
  .add('CarTile', () => <CarTile {...CarsResponse.response[0]} availability="In Dealership" />)
  .add('Dropdown', () => <Dropdown />);
