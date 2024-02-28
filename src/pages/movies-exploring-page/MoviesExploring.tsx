// Importing Area
import { Link } from 'react-router-dom';
import { requestServiceInstace } from '../../services/requestService';
import { useEffect, useState } from 'react';
import { movie } from '../../types/Movie';
import { apiResponse } from '../../types/ApiResponse';
import { AxiosResponse } from 'axios';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronRight } from 'react-icons/hi';
import Style from './MoviesExploring.module.css';

// That's a component relative to the movies exploring page
const MoviesExploring = () => {

    /*
        Using a react hook to declare the necessary variables
    */
    const [ movies, setMovies ] = useState<movie[]>([]);
    const [ pagesTotal, setPagesTotal ] = useState<number>(1);
    const [ currentPage, setCurrentPage ] = useState<number>(1);
    const [ loading, setLoading ] = useState<Boolean>(true);

    // This is a function that loads all of the movies
    async function loadMovies(): Promise<apiResponse> {
        try {

            // Using axios client request service to load the movies
            const operationResult: AxiosResponse = await requestServiceInstace.get(`movie/now_playing`, {
                params: {
                    language: 'pt-BR',
                    region: 'BR',
                    page: currentPage
                }
            });
            // Filtering the operation result of API request
            const filteredOperationResult: apiResponse = await operationResult.data;
            // Returning the filtered result
            return filteredOperationResult;

        } catch (error: any) {

            // Returning an error and your log message
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
            const result = await loadMovies();
            // Saving it
            setMovies(result.results);
            // Changing the loading state of movies
            setLoading(false);
            // Setting the pages total from API response
            setPagesTotal(result.total_pages);
        };
        initializeLoad();

    }, []);

    /*
        Using a react hook and a function to load again the movies
        This happens when the user decides to see new movie options
    */
    useEffect(() => {

        const loadAgain = async () => {
            // Using the function to load all of the avaliable movies
            const result = await loadMovies();
            // Saving it
            setMovies(result.results);
            // Changing the loading state of movies
            setLoading(false);
            // Setting the pages total from API response
            setPagesTotal(result.total_pages);
        };
        loadAgain();

    }, [currentPage]);

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
                {/* Movies Area */}
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
                <section className={Style.navigationContainer}>
                    <HiOutlineChevronDoubleLeft className={Style.navigationButton} onClick={(event) => {

                        // Setting the default behaviour for this event
                        event.preventDefault();
                        // Checking what is the current page
                        if (currentPage > 1 ) {

                            // Creating a new variable where can manipulate the value
                            let currentPageIndex = currentPage;
                            // Setting the current page to go back the navigation system
                            setCurrentPage(currentPageIndex - 1);

                        }

                    }}/>
                    <HiOutlineChevronDoubleRight className={Style.navigationButton} onClick={(event) => {

                        // Setting the default behaviour for this event
                        event.preventDefault();
                        // Checking what is the current page
                        if (currentPage < pagesTotal) {
                            
                            // Creating a new variable where can manipulate the value
                            let currentPageIndex = currentPage;
                            // Setting the current page to go ahead in the navigation system
                            setCurrentPage(currentPageIndex + 1);

                        }

                    }}/>
                </section>
            </main>

        );

    }
}

// Exporting Area
export { MoviesExploring };