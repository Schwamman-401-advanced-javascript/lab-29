import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';

describe('<Header />', () => {
  it('can render initially', () => {
    let app = shallow(<Header />);

    expect(app.find('header#header').exists()).toBe(true);
  });
})