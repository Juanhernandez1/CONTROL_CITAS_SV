// eslint-disable-next-line unicorn/filename-case
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const controlCitasApi = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Accept: 'application/json'
  }
});

export const getData = (path, params) => {
  return params ? controlCitasApi.get(path, { ...params }) : controlCitasApi.get(path);
};

export const postData = (path, params) => {
  return controlCitasApi.post(path, { ...params });
};

export const putData = (path, params) => {
  return controlCitasApi.put(path, { ...params });
};

export const deleteData = (path, params) => {
  return params ? controlCitasApi.delete(path, { ...params }) : controlCitasApi.delete(path);
};
