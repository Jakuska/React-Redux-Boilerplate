import { combineReducers } from 'redux';
import addReducer from './example/exampleReducer';


const rootReducer = combineReducers({
  example: addReducer,
});

export default rootReducer;
