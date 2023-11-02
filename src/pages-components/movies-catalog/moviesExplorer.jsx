import Style from './moviesExplorer.module.css';
import { useEffect, useState } from 'react';
import api from '../../services/api.jsx';
import { Link } from 'react-router-dom';

const MoviesCatalog = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadMovies() {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "495b65ce4d8bf119654247e5fa0373c9",
                language: "pt-BR",
                page: 1
            }
        });
        setMovies(response.data.results);
    }

    useEffect(() => {
        loadMovies();
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <main className={Style.loadingContainer}>
                <h1 className={Style.loadingHeading}>Carregando Filmes...</h1>
            </main>
        )
    } else {
        return (
            <main className={Style.container}>
                <h1 className={Style.mainTitle}>Catálogo de Filmes</h1>
                <div className={Style.moviesContainer}>
                    {movies.map((movie, index) => (
                        <article className={Style.movieContainer} key={index}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`poster de imagem relativo ao filme ${movie.orginal_title}`} className={Style.movieImage}/>
                            <Link to={`/my-movies/${movie.id}`} className={Style.accessButton}>Acessar</Link>
                        </article>
                    ))}
                </div>
            </main>
        )
    }
}

export default MoviesCatalog;