import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { store } from './store';
import { Provider } from 'react-redux';
import GlobalStyle from './style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);