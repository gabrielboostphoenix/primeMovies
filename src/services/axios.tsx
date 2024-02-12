// Importing Area
import axios from 'axios';

// Declaring the variable that will be used
const URL = import.meta.env.VITE_APP_API_URL ? import.meta.env.VITE_APP_API_URL : '';

// That's a service that does requests like a client to an API
const requestService = axios;

// Exporting Area
export { requestService, URL };