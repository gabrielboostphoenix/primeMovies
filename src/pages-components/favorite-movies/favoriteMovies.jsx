import Style from './favoriteMovies.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FavoriteMovies = () => {
    const [favoriteMoviesList, setFavoriteMoviesList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const favoriteMovies = localStorage.getItem('@primeFlix');
        if (favoriteMovies.length > 0) {
            let moviesArray = JSON.parse(favoriteMovies);
            setFavoriteMoviesList(moviesArray);
            return;
        } else {
            navigate("/", { replace: true });
            return;
        }
    }, [])

    function deleteFavoritMovie(movieID) {
        let favoritMoviesList = localStorage.getItem("@primeFlix")
        let moviesArray = JSON.parse(favoritMoviesList)
        const newMoviesList = moviesArray.filter((item) => item.id !== movieID)
        setFavoriteMoviesList(newMoviesList)
        localStorage.setItem("@primeFlix", JSON.stringify(newMoviesList))
    }

    return (
        <main className={Style.container}>
            <h1 className={Style.mainTitle}>Lista de filmes favoritos salvos</h1>
            <ul className={Style.movieList}>
                {favoriteMoviesList.map((movie) => {
                    return (
                        <li key={movie.id} className={Style.listItem}>
                            <span className={Style.movieTitle}>{movie.title}</span>
                            <Link className={Style.deleteLink} onClick={ () => { deleteFavoritMovie(movie.id) } }>EXCLUIR</Link>
                            <Link to={`/my-movies/${movie.id}/`} className={Style.detailsLink} >VER DETALHES</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default FavoriteMovies;