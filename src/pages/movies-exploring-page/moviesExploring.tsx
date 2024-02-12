// Importing Area
import { Link } from 'react-router-dom';
import { requestService, URL } from '../../services/axios';
import { useEffect, useState } from 'react';

// That's a component relative to the movies exploring page
const MoviesExploring = () => {
    /*
        Using a react hook to declare the necessary variables
    */
    const [ movies, setMovies ] = useState<Object[]>([]);
    const [ loading, setLoading ] = useState<Boolean>(true);

    // This is a function that loads all of the movies
    async function loadMovies() {
        try {

            // Using axios client request service to load the movies
            const operationResult = await requestService.get(URL);
            // Storing the data of result in another variable
            let result = await operationResult.data.results;
            // Setting the movies constant
            setMovies(result);

        } catch (error) {

            // Returning an erro log
            console.log(error);

        }
    }

    /*
        Using a react hook and a function to load the movies
        They will be shown to the client
    */
    useEffect(() => {

        // Using the function to load all of the avaliable movies
        loadMovies();
        // Changing the loading state of movies
        setLoading(false);

    }, []);

    // Checking if was possible to find the movies to load it
    if (loading === true) {

        // Returning a result of loading state to the client
        return (
            <main>
                <p>OPS! Infelizmente ainda não foi possível carregar os filmes...</p>
            </main>
        );

    } else {

        // Returning a result of loaded movies to the client
        return (
            <main>
                { movies.map((element: any, index: any) => {
                    <div key={index}>
                        <img src={element.poster_path} alt='Poster do filme em cartaz no cinema'/>
                        <Link to={'/'}>Ver Mais</Link>
                    </div>
                }) }
            </main>
        );

    }
}

// Exporting Area
export { MoviesExploring };