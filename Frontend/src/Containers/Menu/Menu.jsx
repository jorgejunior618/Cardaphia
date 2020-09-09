import React from 'react';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';

const columns =  [
  {id: 1,prato: 'prato', preco: '88'},
  {id: 2,prato: 'prato2', preco: '9'},
  {id: 3,prato: 'prato3', preco: '55'},
  {id: 4,prato: 'prato4', preco: '66'},
]
function Menu (props) {
  return (
    <> 
      <Header
        title="Restauante Jorge"
        subtitle="Cardápio"
      />

      <List
        list={columns}
      />
    </>
  );
}
 
export default Menu;