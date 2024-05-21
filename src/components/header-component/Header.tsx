// Importing Area
import { Link } from 'react-router-dom';
import Style from './Header.module.css';
import { userInformations } from '../../types/UserInformations';
import { useState, useEffect } from 'react';

// That's a header component
const Header = () => {

    // That's a function that checks if exists user information
    const checkForUserInformation = () => {

        // Getting the user informations
        const result = localStorage.getItem('primeMovies');
        // Checking whether there are
        if (typeof result === 'string') {

            // Extracting the converted informations
            const convertedInformations: userInformations = JSON.parse(result);
            // Filtering them to get the user credentials
            const loginInformations = convertedInformations.jwtUserCredentials;

            // Checking whether the data type is undefined
            if (typeof loginInformations === 'undefined') {

                /*
                    Returning a false boolean value like a response
                    This information indicates that wasn't possible to find the jwt
                */
                return false;

            }

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
    const [activated, setActive] = useState<Boolean>(false);

    /*
        Using the react hook when the client enters in the application
    */
    useEffect(() => {

        // Using the function and storing your returned data
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

            <Link to={'/moviesExploring'} className={Style.linkEffect}>
                <h1 className={Style.logo}>PrimeMovies</h1>
            </Link>

            <div className={Style.burgerMenu} onClick={() => setActive(true)}>
                <span className={Style.layer_BurgerMenu}></span>
                <span className={Style.layer_BurgerMenu}></span>
                <span className={Style.layer_BurgerMenu}></span>
            </div>

            <aside className={activated ? Style.activatedAsideMenu : Style.disableAsideMenu }>

                <div className={Style.disableButtonContainer} onClick={() => setActive(false)}>
                    <span className={`${Style.disableButton_firstLayer} ${Style.disableButton_layer}`}></span>
                    <span className={`${Style.disableButton_secondLayer} ${Style.disableButton_layer}`}></span>
                </div>

                <ul className={Style.asideMenu_linksList}>

                    <li className={Style.linkContainer}>

                        {
                            loginStatus ?
                            <Link to={'/favoriteMovies'} className={Style.link}>Filmes Favoritos</Link> :
                            <Link to={'/signIn'} className={Style.link}>Login</Link>
                        }

                        {
                            loginStatus ?
                            <img src="../../../public/favorites.png" alt="Ícone de Favoritos"/> :
                            <img src="../../../public/login.png" alt="Ícone de Login"/>
                        }

                    </li>

                    <li className={Style.linkContainer}>

                        {
                            loginStatus ?
                            false :
                            <Link to={'/signUp'} className={Style.link}>SignUp</Link>
                        }

                        {
                            loginStatus ?
                            false :
                            <img src="../../../public/add.png" alt="Ícone de SignUp"/>
                        }

                    </li>

                    <li className={Style.linkContainer}>
                        <Link to={'/moviesExploring'} className={Style.link}>PrimeMovies</Link>
                        <img src="../../../public/home.png" alt="Ícone de Home"/>
                    </li>

                </ul>

            </aside>

            <nav className={Style.navigationArea}>

                {
                    loginStatus ?
                    <Link to={'/favoriteMovie'} className={Style.favoriteMoviesButton}>Meu Favoritos</Link> :
                    <Link to={'/signIn'} className={Style.loginButton}>Login</Link>
                }

                {
                    loginStatus ?
                    false :
                    <Link to={'/signUp'} className={Style.signUpButton}>Cadastrar</Link>
                }

            </nav>

        </header>
    );
};

// Exporting Area
export { Header };