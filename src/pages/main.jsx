import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducerStore from '../reduxs/reducers';
import Rounter from './router';

const appStore = createStore(
  reducerStore,
  /* preloadedState, */ devToolsEnhancer()
  // Specify custom devTools options
);

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Provider store={appStore}>
          <div>Header</div>
          <Rounter />
        </Provider>
      </div>
    );
  }
}

export default Main;
