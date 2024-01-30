// Importing Area
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={  } />
                    <Route path='/movies-exploring' element={  } />
                    <Route path='/movie-view:id' element={  } />
                    <Route path='/favorite-movies' element={  } />
                </Routes>
            </BrowserRouter>
        </>
    );

}

// Exporting Area
export { AppRoutes };