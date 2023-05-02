import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from 'easy-peasy';
import store from './store/store.js'

import('preline')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
