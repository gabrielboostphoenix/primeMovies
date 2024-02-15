// Importing Area
/* import { useEffect, useState } from 'react'; */
import { useParams } from 'react-router-dom';

// That's a component relative to the movie view page
const MovieView = () => {
    /*
        Using a react hook to access the specific route param
    */
    const { movieID } = useParams();

    return (
        <main>
            <p>Filme com ID: {movieID} Acessado com sucesso!</p>
        </main>
    );
};

// Exporting Area
export { MovieView };