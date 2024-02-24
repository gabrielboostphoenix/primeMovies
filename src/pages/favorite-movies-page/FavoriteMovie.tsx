// Importing Area
import { userInformations } from '../../types/userInformations';
import Style from './FavoriteMovie.module.css';
import { useState, useEffect } from 'react';

// That's a component relative to the favorite movies page
const FavoriteMovie = () => {

    /*
        Using the react hook to create the necessary variables that will be used
    */
    const [ savedMovies, setSavedMovies ] = useState<Number[] | Boolean>(false);

    // This is the function that loads the saved movies
    async function loadSavedMovies(): Promise<Number[] | Boolean> {

        // Extracting saved movies in the local storage
        const result = localStorage.getItem('primeMovies');

        // Checking whether there are movies
        if (typeof result === 'string') {

            // In this case there are movies
            // Converting the getted result
            const convertedResult: userInformations = await JSON.parse(result);
            // Filtering it
            const savedMovies: Number[] = convertedResult.favoriteMovies;
            // Returning the saved movies from user
            return savedMovies;

        } else {

            // In this case there aren't movies
            return false;

        }
    };

    /*
        Using a react hook to load all of the favorite movies
    */
    useEffect(() => {

        // That's a function that has the intial load
        const initializeLoad = async () => {

            // Using the function that loads the movie ID's
            const result = loadSavedMovies();
            // Setting the result of saved favorite movies
            setSavedMovies(await result);

        };
        // Using the function
        initializeLoad();

    }, []);

    // Returning the result to the client
    return (
        <main className={Style.container}>

        </main>
    );
};

// Exporting Area
export { FavoriteMovie };