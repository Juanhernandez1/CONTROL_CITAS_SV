import {
  SET_BUSINESS_SELECTED,
  SET_SEARCH_BUSINESS_NAME,
  SET_BUSINESS_SERVICES_SELECTED,
  SET_APPOINTMENT_TIME
} from './types';

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
    case SET_BUSINESS_SERVICES_SELECTED:
      return {
        ...state,
        businessServiceSelected: action.payload
      };
    case SET_APPOINTMENT_TIME:
      return {
        ...state,
        appintmentTime: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
