import { INCREMENT, DECREASE } from 'redux/types';


export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decreaseAction() {
  return {
    type: DECREASE,
  };
}
