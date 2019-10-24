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

  addItem = (string, assigned, date) => {
    let newList = this.state.toDo.concat(new Item(string, assigned, date));
    console.log(newList);
    this.setState({ toDo: newList});
  }

  deleteItem = (id) => {
    let newList = this.state.toDo.concat().filter(item => item.id !== id);
    this.setState({ toDo: newList});
  }

  //Need to refactor - state being modified directly
  toggleComplete = id => {
    let newList = this.state.toDo.map(item => 
        item.id === id ? 
          {
            ...item, 
            complete: !item.complete,
          } : item
      );

    this.setState({ toDo: newList });
  }

  toggleModal = id => {
   let newList = this.state.toDo.map(item => 
        item.id === id ? 
          {
            ...item, 
            showModal: !item.showModal,
          } : item
      );
    this.setState({ toDo: newList });
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
            toggleComplete = {this.toggleComplete}
            toggleModal = {this.toggleModal}
            delete = {this.deleteItem}
          />
        </section>
      </>
    );
  }
}

export default App;
