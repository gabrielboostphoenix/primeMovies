// Importing Area
import { AxiosResponse } from 'axios';
import { axiosClientService } from '../services/axios';
import { useEffect, useState } from 'react';

// That's a component relative to the movies exploring page
const MoviesExploring = () => {
    /*
        Using a react hook to define the necessary variables
    */
    const [ movies, setMovies ] = useState<AxiosResponse| null>(null);

    /*
        Using a react hook to load the movies
        They will be shown to the client
    */
    useEffect(() => {
        axiosClientService.get('').then((response) => { setMovies(response); }).then(() => { console.log(movies); });
    }, []);

    // Returning the result to the client
    return (
        <p>Olá, Mundo!</p>
    );
}

// Exporting Area
export { MoviesExploring };