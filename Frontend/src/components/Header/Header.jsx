import React, { Component } from 'react';

class Header extends Component {
  render() { 
    return ( 
      <header>
        <h1> --- {this.props.title} --- </h1>
        <h2>{this.props.subtitle}</h2>
      </header>
     );
  }
}
 
export default Header;