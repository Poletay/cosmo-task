import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compact } from 'lodash';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { fetchPlaces, resetUserIdleTimer } from './actions';
import App from './components/App';
import './index.scss';


const ext = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle
const devToolsMiddleware = ext && ext();

const defaultState = {
  places: {
    isForwardDirection: true,
    placesList: [],
    rotateTimer: 0,
  },
  userIdleTimer: 0,
};

const middlewares = compact([
  applyMiddleware(thunk),
  devToolsMiddleware,
]);

const store = createStore(
  reducers,
  defaultState,
  compose(...middlewares),
);

store.dispatch(fetchPlaces());

const resetTimer = () => store.dispatch(resetUserIdleTimer());
document.onmousemove = resetTimer;
document.onkeyup = resetTimer;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
