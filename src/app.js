import React from 'react';
import Header from './components/header';
import List from './components/list';
import Form from './components/form';
import Item from './components/item';
import './reset.scss';
import './todo.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: [],
    }
  }

  addItem = (string) => {
    let newList = this.state.toDo.concat(new Item(string));
    this.setState({ toDo: newList});
    console.log(this.state);
  }

  deleteItem = (id) => {
    let newList = this.state.toDo.concat().filter(item => item.id !== id);
    this.setState({ toDo: newList});
  }

  //Need to refactor - state being modified directly
  toggleComplete = id => {
    console.log(id);
    let newList = this.state.toDo.map((e) => e);
    let item = newList.filter(item => item.id === id)[0] || {};
    if (item.id) {
      item.toggle();
      this.setState({ toDo: newList});
      console.log(this.state.toDo);
    }
  }

  render() {
    return (
      <>
        <section className='todo'>
          <Header
            length = {this.state.toDo.length}
          />
          <Form 
            add = {this.addItem}
          />
          <List 
            list = {this.state.toDo}
            toggle = {this.toggleComplete}
            delete = {this.deleteItem}
          />
        </section>
      </>
    );
  }
}

export default App;
