import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
// import { prettyDOM } from '@testing-library/react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShipList from './ShipList';
// import ImageFallback from '../ImageFallback/ImageFallback';
// import img404 from '../../assets/error.webp';
// import * as apiTool from '../../utils/ApiTool';


// test('renders content using screen', () => {
//   render(<ShipList />);
//   const shipList = screen.getByTestId('ShipList');
//   expect(shipList).toBeInTheDocument();

//   const ship = screen.getByTestId('ShipList__Element');
//   expect(ship).toBeInTheDocument();

//   const image = screen.getByTestId('ShipList__Image');
//   expect(image).toBeInTheDocument();

//   const description = screen.getByTestId('ShipList__Description');
//   expect(description).toBeInTheDocument();

//   const name = screen.getByTestId('ShipList__Name');
//   expect(name).toBeInTheDocument();

//   const model = screen.getByTestId('ShipList__Model');
//   expect(model).toBeInTheDocument();

//   const pageLoader = screen.getByTestId('PageLoader');
//   expect(pageLoader).toBeInTheDocument();
// });

describe('<ShipList />', () => {
  let shipList;

  beforeEach(() => {
    shipList.cleanup();
  })

  shipList = render(
    <ShipList />
  );

  test('renders .ShipList', () => {
    expect(shipList.container.querySelector('.ShipList')).toBeDefined();
  })

  // test('at least 10 images in shiplist', () => {
  //   const imgs = screen.getAllByRole('link');
  //   expect(imgs.length).toBe(10);
  // })

  // test('renders content using screen', () => {
  
  //   const ship = screen.getByTestId('ShipList__Element');
  //   expect(ship).toBeInTheDocument();

  //   const image = screen.getByTestId('ShipList__Image');
  //   expect(image).toBeInTheDocument();

  //   const description = screen.getByTestId('ShipList__Description');
  //   expect(description).toBeInTheDocument();
  // })
});