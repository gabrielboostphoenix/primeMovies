// Importing Area
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/sign-up-page/SignUp';
import { SignIn } from './pages/sign-in-page/SignIn';
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
                    <Route path='/signUp' element={ <SignUp /> } />
                    <Route path='/signIn' element={ <SignIn /> } />
                </Routes>
            </BrowserRouter>
        </>
    );

}

// Exporting Area
export { AppRoutes };