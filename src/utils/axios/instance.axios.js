import { JSON_HEADER } from "./header.axios";
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api/v1',
  headers: { ...JSON_HEADER },
});

export default instance;