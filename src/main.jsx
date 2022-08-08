import React from 'react'
import ReactDOM from 'react-dom/client'
import Juego from '../src/components/container/Juego';
import GlobalStyle from './components/styles/GlobalStyle';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Juego />
  </React.StrictMode>
)
