import {
  SET_BUSINESS_SELECTED,
  SET_SEARCH_BUSINESS_NAME,
  SET_BUSINESS_SERVICES_SELECTED,
  SET_APPOINTMENT_TIME,
  SET_USER_AUTHENTICATED,
  SET_DETAIL_SERVICES,
  SET_REGISTER_TYPE
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
    case SET_USER_AUTHENTICATED:
      return {
        ...state,
        user: action.payload
      };

    case SET_DETAIL_SERVICES:
      return {
        ...state,
        detail: action.payload
      };

    case SET_REGISTER_TYPE:
      return {
        ...state,
        registerUserType: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
