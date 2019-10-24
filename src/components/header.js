import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <header id='header'>
          <h2>{`There are ${this.props.length} Items to Complete`}</h2>
        </header>
      </>
    )
  }
}

export default Header;
