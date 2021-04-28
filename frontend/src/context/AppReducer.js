import { SET_BUSINESS_SELECTED } from './types';

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_BUSINESS_SELECTED:
      return {
        ...state,
        businessSelected: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
