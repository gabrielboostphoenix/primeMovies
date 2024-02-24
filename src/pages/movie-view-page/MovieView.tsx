// Importing Area
import Style from './MovieView.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../../types/movieDetails';
import { requestServiceInstace } from '../../services/requestService';
import { AxiosResponse } from 'axios';

// That's a component relative to the movie view page
const MovieView = () => {

    // That's a function that loads the selected specific movie
    async function loadSelectedSpecificMovie(): Promise<movieDetails> {
        try {

            // Using axios client request service to load the movie and saving it
            const operationResult: AxiosResponse = await requestServiceInstace.get(`movie/${movieID}`, {
                params: {
                    language: 'pt-BR'
                }
            });
            // Returning the filtered operation result
            return operationResult.data;

        } catch (error: any) {

            // Returning an error and your log message
            console.log(error.message);
            return error;

        }

    };

    /*
        Using a react hook to define the necessary variables that will be used
    */
    const [ specifiedMovie, setSpecifiedMovie ] = useState<movieDetails>();
    const [ loadingMovie, setLoadingMovie ] = useState<Boolean>(true);

    /*
        Using a react hook to access the specific route param
    */
    const { movieID } = useParams();

    /*
        Using a react hook to load the movie when the user visit the page
    */
    useEffect(() => {

        // This is the function that initializes the loading
        async function initializeLoad() {

            // Using the function and saving your result
            const result: movieDetails = await loadSelectedSpecificMovie();
            // Setting the selected specific movie
            setSpecifiedMovie(result);
            console.log(specifiedMovie);
            // Setting the movie loading state
            setLoadingMovie(false);

        };
        // Using it
        initializeLoad();

    }, []);

    // Checking if the user content was loaded
    if (loadingMovie) {

        // Returning a loading message content to the user
        return (

            <main className={Style.container}>
                <article className={Style.contentBox}>
                    <p className={Style.loadingMessage}>OPS! Parace que ainda não foi possível carregar o filme selecionado...</p>
                </article>
            </main>

        );

    } else {

        // Returning the loaded content to the user
        return (

            <main className={Style.container}>
                <article className={Style.movie}>
                    <h2 className={Style.movieTitle}>{specifiedMovie?.title}</h2>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${specifiedMovie?.backdrop_path}`}
                        alt={`Imagem de poster relativo ao filme ${specifiedMovie?.title}`}
                        className={Style.poster}
                    />
                    <h3 className={Style.descriptionTitle}>Descrição:</h3>
                    <p className={Style.descriptionText}>{specifiedMovie?.overview}</p>
                    <h3 className={Style.releaseDateTitle}>Data de Lançamento:</h3>
                    <p className={Style.releaseDateText}>{specifiedMovie?.release_date}</p>
                </article>
            </main>

        );

    }
};

// Exporting Area
export { MovieView };