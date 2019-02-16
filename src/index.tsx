import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import ConwaysGameOfLife from "./components/ConwaysGameOfLife";
import { Provider } from 'react-redux'
import { store } from './store'

  
  ReactDOM.render(
    <Provider store={store}>
      <ConwaysGameOfLife />
    </Provider>,
    document.getElementById('root')
  );
  