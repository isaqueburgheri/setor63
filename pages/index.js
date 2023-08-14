import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Você pode criar um arquivo CSS para estilização
import Home from './Home'; // Importe o componente Home que você mencionou

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


export default Home