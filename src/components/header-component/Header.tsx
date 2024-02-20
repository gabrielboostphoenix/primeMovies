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
        if (typeof result === 'string') {
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
        Using the react hook to define the necessary variables that will be used
    */
    const [loginStatus, setLoginStatus] = useState<Boolean>(false);

    /*
        Using the react hook when the client enters in the application
    */
    useEffect(() => {

        // Using the function and storing your result
        const operationResult = checkForUserInformation();

        // Checking the data type of result
        if (typeof operationResult === 'boolean' && operationResult === false) {

            // So in this case doesn't have the jwt access
            // Setting the login button state
            setLoginStatus(false);

        } else {

            // So in this case has the jwt access
            // Setting the login button state
            setLoginStatus(true);

        }

    }, []);

    // Returning the result to the client
    return (
        <header className={Style.container}>
            <h1 className={Style.logo}>PrimeMovies</h1>
            <nav className={Style.navigationArea}>
                {
                    loginStatus? <Link to={'/favoriteMovie'} className={Style.favoriteMoviesButton}>Meu Favoritos</Link> : <Link to={'/signIn'} className={Style.loginButton}>Login</Link>
                }
                {
                    !loginStatus? <Link to={'/signUp'} className={Style.signUpButton}>Cadastrar</Link> : false
                }
            </nav>
        </header>
    );
};

// Exporting Area
export { Header };