import React, { Component } from 'react';
import history from '../../utils/history';

import './LandingPage.css'
import siteIcon from '../../assets/novoIcone.svg';

class LandingPage extends Component {
  componentDidMount() {
    localStorage.clear();
  }
  constructor(props) {
    super(props);
    this.code = '';
    this.isRestaurant = this.props.location.pathname === '/restaurant';
  }

  handleChangeInput(event) {
    event.stopPropagation();
    this.code = event.target.value;
  }

  getRestaurant(event) {
    event.preventDefault();
    localStorage.setItem('restaurantCode', this.code);

    if (this.isRestaurant) {
      history.push('/pedidos');
    } else {
      history.push('/menu');
    }
  }
  
  render() {
    if(
      !this.isRestaurant
      && this.props.location.pathname !== '/'
    ) {
      return (
        <div><h1>Not Found</h1></div>
      )
    }
    return (
      <section id="landingPage">
        <div>
          <img src={siteIcon} alt="Cardaphia"/>
          <h3>
            Digite o código {this.isRestaurant
              ? 'do seu restaurante'
              : 'da mesa, e boa refeição'}
            </h3>
        </div>
        <form
          action="submit"
          onSubmit={this.getRestaurant.bind(this)}
        >
          <input
            type="text"
            name="code"
            placeholder={`#Código ${this.isRestaurant
              ? 'do seu restaurante'
              : 'da mesa'}`}
            onChange={this.handleChangeInput.bind(this)}
          />
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
}
 
export default LandingPage;