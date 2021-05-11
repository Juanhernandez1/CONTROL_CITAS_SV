import React, { createContext, useEffect, useReducer } from 'react';
import { Redirect } from 'react-router';

import appReducer from './AppReducer';
import { initialState } from './initialState';
import { SET_BUSINESS_SELECTED, SET_BUSINESS_SEARCH } from './types';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setBusinessSelected = business => {
    dispatch({ type: SET_BUSINESS_SELECTED, payload: business });
  };

  const setBusinessSearch = search => {
    dispatch({ type: SET_BUSINESS_SEARCH, payload: search });
  };

  return (
    <GlobalContext.Provider
      value={{
        businessSelected: state.businessSelected,
        setBusinessSelected,
        setBusinessSearch,
        businessSearch: state.businessSearch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
