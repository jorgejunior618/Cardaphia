import React, { Component } from 'react';

import './PopUpDetails.css';

class PopUpDetails extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.dish = props.dish
    this.abortShowDetails = props.abortShowDetails
    
  }
  
  render() { 
    return (
      <div id="PopUpDetails">
        <div id="infoName">
          <p id="back" onClick={this.abortShowDetails}>voltar</p>
          <h3>{this.dish.name}</h3>
        </div>
          <div id="details">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quisquam voluptas magni molestias ipsam assumenda odit 
              repellat libero suscipit ipsa quia?</p>
            <span>Valor do Pedido: {this.dish.price}</span>
          </div>        
      </div>
    );
  }
}
 
export default PopUpDetails;
