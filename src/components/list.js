import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = e => {
    let id = parseFloat(e.target.id);
    this.props.toggle(id);
  }

  handleDelete = e => {
    let id = parseFloat(e.target.value);
    this.props.delete(id);
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
                      <button onClick={this.handleDelete} className={this.displayClass(item.complete)} key={item.id + 1} value={item.id}>delete</button>
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