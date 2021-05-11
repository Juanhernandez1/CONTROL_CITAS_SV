import { SET_BUSINESS_SELECTED, SET_SEARCH_BUSINESS_NAME } from './types';

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_BUSINESS_SELECTED:
      return {
        ...state,
        businessSelected: action.payload
      };
    case SET_SEARCH_BUSINESS_NAME:
      return {
        ...state,
        businessName: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
