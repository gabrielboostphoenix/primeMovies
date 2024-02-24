// Importing Area
import axios from 'axios';

// Declaring the variable that will be used
const URL = import.meta.env.VITE_APP_API_URL ? import.meta.env.VITE_APP_API_URL : '';
const accessToken = import.meta.env.VITE_APP_API_READING_TOKEN ? import.meta.env.VITE_APP_API_READING_TOKEN : '';

// This is a constant that stores the necessary settings to do requests
const defaultOptions = {
    baseURL: URL,
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }
}

// That's a service that does requests like a client to an API
const requestServiceInstace = axios.create(defaultOptions);

// Exporting Area
export { requestServiceInstace };