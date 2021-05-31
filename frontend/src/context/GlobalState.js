import React, { createContext, useEffect, useReducer, useState } from 'react';
import { checkExpired, getCookie } from '../utils/Cookies';
import { business as getBusinessPath } from '../config/urls';
import { isEmpty } from 'lodash';
import appReducer from './AppReducer';
import { initialState } from './initialState';
import {
  SET_BUSINESS_SELECTED,
  SET_SEARCH_BUSINESS_NAME,
  SET_BUSINESS_SERVICES_SELECTED,
  SET_APPOINTMENT_TIME,
  SET_USER_AUTHENTICATED,
  SET_DETAIL_SERVICES,
  SET_REGISTER_TYPE
} from './types';
import { getData } from '../api/baseClient';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [AccesType, setAccesType] = useState('C');
  const setBusinessSelected = business => {
    dispatch({ type: SET_BUSINESS_SELECTED, payload: business });
  };

  const setBusinessServicesSelected = services => {
    dispatch({ type: SET_BUSINESS_SERVICES_SELECTED, payload: services });
  };

  const setBusinessName = businessName => {
    dispatch({ type: SET_SEARCH_BUSINESS_NAME, payload: businessName });
  };

  const setAppointmentTime = AppointmentTime => {
    dispatch({ type: SET_APPOINTMENT_TIME, payload: AppointmentTime });
  };
  const setuserauthenticates = user => {
    dispatch({ type: SET_USER_AUTHENTICATED, payload: user });
  };

  const setDetailServices = detail => {
    dispatch({ type: SET_DETAIL_SERVICES, payload: detail });
  };

  const setRegisterType = type => {
    dispatch({ type: SET_REGISTER_TYPE, payload: type });
  };

  useEffect(() => {
    const valid = checkExpired('authControlCitas');
    if (!valid) {
      const data = getCookie('authControlCitas');
      (async () => {
        const path = getBusinessPath.getUserPk(data.data.id);
        try {
          const { data, status } = await getData(path);
          console.log('contexto', data);
          if (status === 200) {
            setuserauthenticates(data.data);
            const accesType = isEmpty(data.data)
              ? 'C'
              : data.data.hasOwnProperty('type')
              ? data.data.type === null
                ? 'C'
                : data.type
              : data.data.hasOwnProperty('access')
              ? data.data.access.type === null
                ? 'C'
                : data.data.access.type
              : 'C';
            setAccesType(accesType);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        businessSelected: state.businessSelected,
        businessSearchName: state.businessName,
        businessServiceSelected: state.businessServiceSelected,
        appintmentTime: state.appintmentTime,
        user: state.user,
        detail: state.detail,
        registerUserType: state.registerUserType,
        AccesType,
        setAccesType,
        setBusinessName,
        setBusinessSelected,
        setBusinessServicesSelected,
        setAppointmentTime,
        setuserauthenticates,
        setDetailServices,
        setRegisterType
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
