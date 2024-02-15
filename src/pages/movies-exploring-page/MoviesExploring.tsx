// Importing Area
import { Link } from 'react-router-dom';
import { requestService } from '../../services/axios';
import { useEffect, useState } from 'react';
import { movie } from '../../types/movie';

// That's a component relative to the movies exploring page
const MoviesExploring = () => {
    /*
        Using a react hook to declare the necessary variables
    */
    const [ movies, setMovies ] = useState<movie[]>([]);
    const [ loading, setLoading ] = useState<Boolean>(true);
    const apiKey: string = import.meta.env.VITE_APP_API_KEY ? import.meta.env.VITE_APP_API_KEY : '';

    // This is a function that loads all of the movies
    async function loadMovies(): Promise<movie[]> {
        try {

            // Using axios client request service to load the movies
            const operationResult = await requestService.get(`/movie/now_playing?api_key=${apiKey}`);
            // Storing the result data in another variable and filtering it
            let result: movie[] = await operationResult.data.results;
            // Returning the result
            return result;

        } catch (error: any) {

            // Returning an error and your log message
            console.log(error.message);
            return error;

        }
    }

    /*
        Using a react hook and a function to load the movies
        They will be shown to the client
    */
    useEffect(() => {
        const initializeLoad = async () => {
            // Using the function to load all of the avaliable movies
            const moviesResult = await loadMovies();
            // Saving it
            setMovies(moviesResult);
            // Changing the loading state of movies
            setLoading(false);
        };

        initializeLoad();
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
                {movies.map((item: movie, index: number) => {
                    return (
                        <article key={index}>
                            <h2>{item.title}</h2>
                            <img
                                src={`${import.meta.env.VITE_APP_SECURE_BASE_URL}${import.meta.env.VITE_APP_BACKDROP_SIZE}${item.backdrop_path}?api_key=${import.meta.env.VITE_APP_API_KEY}`}
                                alt={`Imagem de poster relativo ao filme ${item.title}`}
                            />
                            <Link to={`/movieView/:${item.id}`}>Ver Mais</Link>
                        </article>
                    );
                })}
            </main>
        );

    }
}

// Exporting Area
export { MoviesExploring };