import Style from './moviesSaved.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api.jsx';

const MoviesSaved = () => {
    const [ accessedMovie, setAccessedMovie ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const { id } = useParams()
    const { navigation } = useNavigate()

    useEffect(() => {
        async function loadAccessedMovie() {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: "495b65ce4d8bf119654247e5fa0373c9",
                    language: "pt-BR"
                }
            }).then((response) => {
                setAccessedMovie(response.data);
            }).catch(() => {
                navigation("/", { replace: true });
                return;
            });
        }
        loadAccessedMovie();
        setLoading(false);
    }, [id, navigation]);

    function saveMovie() {
        const myMoviesList = localStorage.getItem('@primeFlix');
        let savedMovies = JSON.parse(myMoviesList) || [];
        const hasMovie = savedMovies.some((savedMovie) => {
            savedMovie.id === accessedMovie.id
        });
        if (hasMovie) {
            alert("Este filme já está salvo na lista!")
            return;
        } else {
            savedMovies.push(accessedMovie)
            localStorage.setItem('@primeFlix', JSON.stringify(savedMovies))
            alert("O filme foi salvo com sucesso!")
        }
    }

    if (loading) {
        return (
            <main className={Style.container}>
                <p className={Style.loadingMessage}>Carregando Filme Selecionado...</p>
            </main>
        )
    } else {
        return (
            <main className={Style.container}>
                <article className={Style.movieContainer}>
                    <h1 className={Style.movieTitle}>{accessedMovie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/original/${accessedMovie.backdrop_path}`} alt={`Poster de imagem relativa ao filme ${accessedMovie.original_title}`} className={Style.movieImage}/>
                    <p className={Style.movieDescription}><strong>Sinopse:</strong> {accessedMovie.overview}</p>
                    <p className={Style.voteAverage}><strong>Avaliação:</strong> {accessedMovie.vote_average} / 10</p>
                    <div className={Style.buttonsArea}>
                        <button className={Style.saveButton} onClick={ saveMovie }>SALVAR</button>
                        <button className={Style.trailerButton}><a href={`https://www.youtube.com/results?search_query=${accessedMovie.title}`} target='_blank' rel='noreferrer'>TRAILER</a></button>
                    </div>
                    <Link to="/" className={Style.backButton}>Voltar</Link>
                </article>
            </main>
        )
    }
};

export default MoviesSaved;