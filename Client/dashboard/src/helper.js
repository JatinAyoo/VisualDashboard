// export const BASE_URL = "https://dashboardserver-vzpj.onrender.com"
import {config} from 'dotenv';
config();
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_URL = REACT_APP_BASE_URL;