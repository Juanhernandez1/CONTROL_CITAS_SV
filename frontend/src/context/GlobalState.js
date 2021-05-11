import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';
import { initialState } from './initialState';
import { SET_BUSINESS_SEARCH, SET_BUSINESS_SELECTED, SET_SEARCH_BUSINESS_NAME } from './types';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setBusinessSelected = business => {
    dispatch({ type: SET_BUSINESS_SELECTED, payload: business });
  };

  const setBusinessName = businessName => {
    dispatch({ type: SET_SEARCH_BUSINESS_NAME, payload: businessName });
  };

  return (
    <GlobalContext.Provider
      value={{
        businessSelected: state.businessSelected,
        businessSearchName: state.businessName,
        setBusinessName,
        setBusinessSelected
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
