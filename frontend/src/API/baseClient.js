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
