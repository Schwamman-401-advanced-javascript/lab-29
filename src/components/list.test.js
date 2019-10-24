import React from 'react';
import List from './list';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  let mockList = [{ text: 'Item 1', id: 12345, complete: false}];

  it('can render initially', () => {
    let app = shallow(<List list = {mockList} />);

    expect(app.find('div#items').exists()).toBe(true);
  });

  it('can display a list of items', () => {
    let app = shallow(<List list = {mockList} />);

    expect(app.find('li').exists()).toBe(true);
  })
})