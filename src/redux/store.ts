import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from "./reducers";
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,{}, composeEnhancers())

export default store;