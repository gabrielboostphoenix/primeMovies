// Importing Area
import { Link } from 'react-router-dom';
import Style from './Header.module.css';
import { userInformations } from '../../types/userInformations';
import { useState, useEffect } from 'react';

// That's a header component
const Header = () => {
    // This is a function that checks if exists user information
    const checkForUserInformation = () => {
        // Getting the user informations
        const result = localStorage.getItem('primeMovies');
        // Checking whether there are
        if (result) {
            // Extracting the converted informations
            const convertedInformations: userInformations = JSON.parse(result);
            // Filtering them to get the user credentials
            const loginInformations = convertedInformations.jwtUserCredentials;
            // Returning the correct information
            return loginInformations;
        } else {
            /*
                Returning a false boolean value like a response
                This information indicates that wasn't possible to find the jwt
            */
            return false;
        }
    };

    /*
        Using the react hook
    */
    useEffect(() => {

    }, []);

    return (
        <header className={Style.container}>
            <h1 className={Style.logo}>PrimeMovies</h1>
            <nav className={Style.navigationArea}>
                {
                    
                    <Link to={'/favoriteMovie'} className={Style.favoriteMoviesButton}>Meu Favoritos</Link>
                }
            </nav>
        </header>
    );
};

// Exporting Area
export { Header };