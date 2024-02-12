// Importing Area
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MoviesExploring } from './pages/movies-exploring-page/moviesExploring';

const AppRoutes = () => {

    /*
        <Route path='/movies-exploring' element={  } />
        <Route path='/movie-view:id' element={  } />
        <Route path='/favorite-movies' element={  } />
    */

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <MoviesExploring /> } />
                </Routes>
            </BrowserRouter>
        </>
    );

}

// Exporting Area
export { AppRoutes };