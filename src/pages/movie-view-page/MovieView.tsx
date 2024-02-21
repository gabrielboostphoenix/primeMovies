// Importing Area
import Style from './MovieView.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../../types/movieDetails';
import { requestService } from '../../services/axios';

// That's a component relative to the movie view page
const MovieView = () => {

    // That's a function that loads the selected specific movie
    async function loadSelectedSpecificMovie(): Promise<movieDetails> {

        // Extracting the API key
        const apiKey = import.meta.env.VITE_APP_API_KEY ? import.meta.env.VITE_APP_API_KEY : '';
        // Using axios client request service to load the movie and saving it
        const operationResult: movieDetails = await requestService.get(`/movies/${movieID}`, {
            params: {
                api_key: apiKey,
                language: 'pt-BR'
            }
        });
        // Returning the operation result
        return operationResult;

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
        const initializeLoad = async () => {

            // Using the function and saving your result
            const result: movieDetails = await loadSelectedSpecificMovie();
            // Setting the selected specific movie
            setSpecifiedMovie(result);
            // Setting the movie loading state
            setLoadingMovie(false);

        };
        // Using it
        initializeLoad();

    }, []);

    // Checking if the user content was loaded
    if (!loadingMovie) {

        // Returning the loaded content to the user
        return (
            <main className={Style.container}>
                <article className={Style.movie}>
                    <h2 className={Style.movieTitle}>{specifiedMovie?.title}</h2>
                    <img
                        src=''
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

    } else {

        // Returning a loading message content to the user
        return (
            <main className={Style.container}>
                <article className={Style.contentBox}>
                    <p className={Style.loadingMessage}>OPS! Parace que ainda não foi possível carregar o filme selecionado...</p>
                </article>
            </main>
        )

    }
};

// Exporting Area
export { MovieView };