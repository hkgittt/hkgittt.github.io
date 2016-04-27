import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import todoApp from './reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App';
import Slide from './components/Slide';

import './style.css';

const store = createStore(
  combineReducers({
    todoApp,
    routing: routerReducer,
  })
);

const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => console.log(store.getState().routing.locationBeforeTransitions));

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={Slide} />
        <Route path="/:slide" component={Slide} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
