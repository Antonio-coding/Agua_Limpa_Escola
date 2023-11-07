import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Normalize } from 'styled-normalize'
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  // Suas opções de configuração aqui
  reducer: {
    // Configure seus redutores aqui
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // Outras opções de configuração, se necessário
})

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <App />
  </Provider>,
  document.getElementById('root')
)
