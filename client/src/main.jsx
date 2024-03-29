import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/_main.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './app/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)