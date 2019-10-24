import React from 'react';
import List from './list';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  let mockList = [{ text: 'Item 1', id: 12345, complete: false}];
  let mockList2 = [{ text: 'Item 1', id: 12345, complete: false, showModal: true}]

  it('can render initially', () => {
    let app = shallow(<List list = {mockList} />);

    expect(app.find('div#items').exists()).toBe(true);
  });

  it('can display a list of items', () => {
    let app = shallow(<List list = {mockList} />);

    expect(app.find('li').exists()).toBe(true);
  })

  it('can toggle if item completed', () => {
    let onComplete = jest.fn();
    let app = mount(<List list={mockList} toggleComplete={onComplete} />);

    let span = app.find('span');
    span.simulate('click');

    expect(onComplete).toHaveBeenCalledWith(12345);
  })

  it('can toggle showModal if details is clicked', () => {
    let onClick = jest.fn();
    let app = mount(<List list={mockList2} toggleModal={onClick} />);

    let button = app.find('button.details');
    button.simulate('click');

    expect(onClick).toHaveBeenCalledWith(12345);
  })

  it('displays details if item.showModal is true', () => {
    let app = mount(<List list={mockList2} />);

    let toDo = app.find('p.toDoDetails');

    expect(app.find('div.modal').exists()).toBe(true);
    expect(toDo.text()).toEqual('To Do: Item 1');
  })

})