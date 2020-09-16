import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() { 
    return ( 
      <header>
        <h1>Restaurante</h1>
        <h2>{this.props.subtitle}</h2>
      </header>
     );
  }
}
 
export default Header;