import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducerStore from '../reducer-store';
import Header from './header';
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
          <Header />
          <Rounter />
        </Provider>
      </div>
    );
  }
}

export default Main;
