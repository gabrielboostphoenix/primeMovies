// Importing Area
import axios from 'axios';
import 'dotenv/config';

// Declaring the variable that will be used
const URL = process.env.VITE_APP_API_URL ? process.env.VITE_APP_API_URL : '';

// That's a service that does requests like a client to an API
const axiosClientService = axios.create({
    baseURL: URL,
    responseType: 'json',
    transformResponse: [(data) => {
        // Converting the operation result
        const result = JSON.parse(data);
        // Returning the result
        return result;
    }]
});

// Exporting Area
export { axiosClientService };