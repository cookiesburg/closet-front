import React, { Component } from 'react';
import './App.css';
import Head from './Head';
import ShirtsContainer from './shirts/ShirtsContainer';
import AboutContainer from './AboutContainer';
import ClosetContainer from './ClosetContainer';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const middleWare = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Head />
        <Switch>
            <Route exact path='/' component={ShirtsContainer} />
            <Route path='/about' component={AboutContainer} />
            <Route path='/my-closet' component={ClosetContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
