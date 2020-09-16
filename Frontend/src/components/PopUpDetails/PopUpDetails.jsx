import React, { Component } from 'react';
import ArrowLeft from '../../assets/arrowLeft.svg'
import './PopUpDetails.css';

class PopUpDetails extends Component {
  state = {
    dish: {}
  }

  constructor(props){
    super(props);
    this.abortShowDetails = props.abortShowDetails
  }
  
  static getDerivedStateFromProps(props, state) {
    if(props.dish) {
      if(props.dish.dishId !== state.dish.dishId) {
        return {
          dish: props.dish,
        };
      }
    }
    
    return {
      dish: {},
    }
  }

  render() { 
    return (
      <div id="PopUpDetails">
        <p id="back" onClick={this.abortShowDetails}><img src={ArrowLeft} alt="Voltar"/></p>
        <div id="infoName">
          <h3>{this.state.dish.name}</h3>
        </div>

        <div id="details">
          <dl>
            <dt>Ingredientes:</dt>
            <dd>
              {this.state.dish.ingredients}
            </dd>
            <dt id="valorNutricional"> Valor nutricional:</dt>
            <dd>
              {this.state.dish.nutritionalValue}
            </dd>            
          </dl>          
          <span>
            <strong>Valor do prato:</strong>
            {Number(this.state.dish.price)
              .toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL',
              }
            )}
          </span>
        </div>        
      </div>
    );
  }
}
 
export default PopUpDetails;
