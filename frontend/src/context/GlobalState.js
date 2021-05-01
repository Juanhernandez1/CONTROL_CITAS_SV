import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';
import { initialState } from './initialState';
import { SET_BUSINESS_SELECTED } from './types';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setBusinessSelected = business => {
    dispatch({ type: SET_BUSINESS_SELECTED, payload: business });
  };

  return (
    <GlobalContext.Provider
      value={{
        businessSelected: state.businessSelected,
        setBusinessSelected
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
