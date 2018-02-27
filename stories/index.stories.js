import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Homepage from '../src/components/homepage/Homepage/Homepage';
import Header from '../src/components/homepage/Header/Header';
import Footer from '../src/components/homepage/Footer/Footer';
import Button from '../src/components/homepage/Button/Button';
import CarList from '../src/components/homepage/CarList/CarList';
import CarTile from '../src/components/homepage/CarTile/CarTile';
import Dropdown from '../src/components/homepage/Dropdown/Dropdown';
import CarsResponse from '../src/services/mock/carsResponse.json';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Homepage', module)
  .add('Homepage', () => <Homepage />)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />)
  .add('Button', () => <Button />)
  .add('CarList', () => <CarList cars={CarsResponse.response} />)
  .add('CarTile', () => <CarTile {...CarsResponse.response[0]} availability="In Dealership" />)
  .add('Dropdown', () => <Dropdown sort={() => {}} />);
