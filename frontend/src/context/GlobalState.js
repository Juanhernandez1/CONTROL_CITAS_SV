import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';
import { initialState } from './initialState';
import {
  SET_BUSINESS_SELECTED,
  SET_SEARCH_BUSINESS_NAME,
  SET_BUSINESS_SERVICES_SELECTED
} from './types';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setBusinessSelected = business => {
    dispatch({ type: SET_BUSINESS_SELECTED, payload: business });
  };

  const setBusinessServicesSelected = services => {
    dispatch({ type: SET_BUSINESS_SERVICES_SELECTED, payload: services });
  };

  const setBusinessName = businessName => {
    dispatch({ type: SET_SEARCH_BUSINESS_NAME, payload: businessName });
  };

  return (
    <GlobalContext.Provider
      value={{
        businessSelected: state.businessSelected,
        businessSearchName: state.businessName,
        businessServiceSelected: state.businessServiceSelected,
        setBusinessName,
        setBusinessSelected,
        setBusinessServicesSelected
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
