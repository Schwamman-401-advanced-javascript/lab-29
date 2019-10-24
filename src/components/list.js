import React from 'react';
import { If } from './if';
import Modal from './modal'

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = e => {
    let id = parseFloat(e.target.id);
    this.props.toggleComplete(id);
  }

  handleDelete = e => {
    let id = parseFloat(e.target.value);
    this.props.delete(id);
  }

  handleDetails = id => {
    this.props.toggleModal(id);
  }

  displayClass(boolean) {
    return boolean ? 'complete-true' : 'complete-false';
  }

  render() {
    return (
      <>
        <div id='items'>
          <ul>
            {
              this.props.list
                .map((item) => (
                  <>
                    <li className={this.displayClass(item.complete)} key={item.id}>
                      <span onClick={this.handleToggle} id={item.id}>{item.text}</span>
                      <button onClick={this.handleDelete} value={item.id}>delete</button>
                      <button className='details' onClick={() => this.handleDetails(item.id)}>details</button>
                      <If condition={item.showModal}>
                        <Modal title='Details' close={() => this.handleDetails(item.id)}>
                          <p className='toDoDetails'>{`To Do: ${item.text}`}</p>
                          <p>{`Assigned To: ${item.assigned}`}</p>
                          <p>{`Due Date: ${item.dueDate}`}</p>
                          <p>{`Completed: ${item.complete}`}</p>
                        </Modal>
                      </If>
                    </li>
                  </>
                ))
            }  
          </ul>
        </div>
      </>
    )
  }
}

export default List;