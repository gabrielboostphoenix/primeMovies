// Importing Area
import { Link } from 'react-router-dom';
import { requestServiceInstace } from '../../services/requestService';
import { useEffect, useState } from 'react';
import { movie } from '../../types/Movie';
import Style from './MoviesExploring.module.css';

// That's a component relative to the movies exploring page
const MoviesExploring = () => {

    /*
        Using a react hook to declare the necessary variables
    */
    const [ movies, setMovies ] = useState<movie[]>([]);
    const [ loading, setLoading ] = useState<Boolean>(true);

    // This is a function that loads all of the movies
    async function loadMovies(): Promise<movie[]> {
        try {

            // Using axios client request service to load the movies
            const operationResult = await requestServiceInstace.get(`movie/now_playing`, {
                params: {
                    language: 'pt-BR',
                    region: 'BR'
                }
            });
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
            <main className={Style.container}>
                <article className={Style.contentBox}>
                    <p className={Style.loadingMessage}>OPS! Infelizmente ainda não foi possível carregar os filmes...</p>
                </article>
            </main>
        );

    } else {

        // Returning a result of loaded movies to the client
        return (
            <main className={Style.container}>
                {movies.map((item: movie, index: number) => {
                    return (
                        <article key={index} className={Style.movie}>
                            <h2 className={Style.movieTitle}>{item.title}</h2>
                            <img
                                src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                                alt={`Imagem de poster relativo ao filme: "${item.title}".`}
                                className={Style.poster}
                                />
                            <Link to={`/movieView/${item.id}`} className={Style.seeMoreButton}>Ver Mais</Link>
                        </article>
                    );
                })}
            </main>
        );

    }
}

// Exporting Area
export { MoviesExploring };