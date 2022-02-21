import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PageLoader from '../../components/PageLoader/PageLoader';

describe('<PageLoader />', () => {
  // let pageLoader;
  let pageNumber = 1;


  beforeEach(() => {
    pageLoader.cleanup();
  })

  const { pageLoader } = render(
    <PageLoader pageNumber={pageNumber} />
  );

  test('renders .PageLoader', () => {
    expect(pageLoader.container.querySelector('.PageLoader')).toBeDefined();
  })
})