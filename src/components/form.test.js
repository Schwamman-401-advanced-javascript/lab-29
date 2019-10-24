import React from 'react';
import Form from './form';
import renderer from 'react-test-renderer';

describe('<Form />', () => {
  it('can render initially', () => {
    let app = shallow(<Form />);

    expect(app.find('input#item').exists()).toBe(true);
  });
})