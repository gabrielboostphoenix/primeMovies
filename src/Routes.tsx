// Importing Area
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MoviesExploring } from './pages/movies-exploring-page/MoviesExploring';
import { MovieView } from './pages/movie-view-page/MovieView';
import { Header } from './components/header-component/Header';

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={ <MoviesExploring /> } />
                    <Route path='/moviesExploring' element={ <MoviesExploring /> } />
                    <Route path='/movieView/:movieID' element={ <MovieView /> } />
                </Routes>
            </BrowserRouter>
        </>
    );

}

// Exporting Area
export { AppRoutes };