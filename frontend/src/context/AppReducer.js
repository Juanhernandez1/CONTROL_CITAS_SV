import { SET_BUSINESS_SELECTED, SET_BUSINESS_SEARCH } from './types';

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_BUSINESS_SELECTED:
      return {
        ...state,
        businessSelected: action.payload
      };
    case SET_BUSINESS_SEARCH:
      return {
        ...state,
        businessSearch: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
