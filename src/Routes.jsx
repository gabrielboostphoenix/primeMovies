import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import FavoriteMovies from './pages-components/favorite-movies/favoriteMovies.jsx';
import MoviesCatalog from './pages-components/movies-catalog/moviesExplorer.jsx';
import MyMovies from './pages-components/my-movies/moviesSaved.jsx';
import Error from './error/error.jsx';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <MoviesCatalog/> }/>
                <Route path='/my-movies/:id' element={ <MyMovies/> }/>
                <Route path='/favorite-movies/' element={ <FavoriteMovies/> }/>
                <Route path='*' element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;