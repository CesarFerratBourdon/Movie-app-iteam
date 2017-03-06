import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import {Provider} from 'react-redux';
import configureStore from './store/reduxConfigureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
