import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const middleware = [
  thunk // Enables actions to be async functions, not necessarily objects.
];


const store = createStore(
  rootReducer,
  composeWithDevTools( // Integrates Chrome extension "Redux DevTools Console".
    applyMiddleware(...middleware)
  )
);


export default store;
