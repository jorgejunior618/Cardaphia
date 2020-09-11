import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './LandingPage.css'
import appIcon from '../../assets/novoIcone.svg';

function LandingPage(props) {
  const isRestaurant = props.location.pathname === '/restaurant';
  const history = useHistory();
  const [ code, setCode ] = useState('');

  localStorage.clear();

  function handleChangeInput(event) {
    event.stopPropagation();
    setCode(event.target.value);
  }

  function redirectToNextPage(event) {
    event.preventDefault();

    if (isRestaurant) {
      if (code.length === 6) {
        history.push('/orders');
        localStorage.setItem('restaurantCode', code);
      } else {
        alert('Digite o código de 6 (seis) números do seu restaurante');
      }
    } else {
      if (code.length === 3) {
        history.push('/menu');
        localStorage.setItem('tableCode', code);
      } else {
        alert('Digite o código de 3 (três) números da mesa que deseja participar');
      }
    }
  }
  
  if(
    !isRestaurant
    && props.location.pathname !== '/'
  ) {
    return (
      <div><h1>Not Found</h1></div>
    )
  }
  return (
    <section id="landingPage">
      <div>
        <img src={appIcon} alt="Cardaphia"/>
        <h3>
          Digite o código {isRestaurant
            ? 'do seu restaurante'
            : 'da mesa, e boa refeição'}
          </h3>
      </div>
      <form
        action="submit"
        onSubmit={redirectToNextPage}
      >
        <input
          type="text"
          name="code"
          placeholder={`#Código ${isRestaurant
            ? 'do seu restaurante'
            : 'da mesa'}`}
          onChange={handleChangeInput}
        />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );

}
 
export default LandingPage;