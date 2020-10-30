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
      if (code.length !== 3) {
        return alert('Digite o código de 3 (três) números do seu restaurante');
      }

      if (isNaN(code)) {
        return alert('Informe o codigo numerico corretamente!')
      }

      localStorage.setItem('restaurantCode', Number(code));
      
      history.push('/orders');
    }
    
    else {
      if (code.length !== 6) {
        return alert('Digite o código de 6 (seis) números da mesa que deseja participar');
      }

      const restaurantID = code.slice(0, 3);
      if(isNaN(restaurantID)) {
        return alert('codigo errado!');
      }
      
      localStorage.setItem('restaurantID', Number(restaurantID));
      localStorage.setItem('tableCode', code);

      history.push('/menu');
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
    <section className="componentContainer" id="landingPage">
      <img src={appIcon} alt="Cardaphia"/>

      <form
        action="submit"
        onSubmit={redirectToNextPage}
      >
        <h2>
          Digite o código {isRestaurant
            ? 'do seu restaurante'
            : 'da mesa, e boa refeição'}
        </h2>

        <input
          type="text"
          name="code"
          placeholder={`# Código ${isRestaurant
            ? 'do seu restaurante'
            : 'da mesa'}`}
          onChange={handleChangeInput}
        />
        <button className="button" type="submit">Entrar</button>
      </form>
    </section>
  );

}
 
export default LandingPage;