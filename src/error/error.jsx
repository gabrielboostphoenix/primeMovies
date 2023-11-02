import Style from './error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className={Style.errorContainer}>
            <p className={Style.errorMessage}>A página web que você está procurando provavelmente não existe...<span className={Style.errorAlert}>Page Not Found 404</span></p>
            <Link to='/' className={Style.explorerLink}>Explorar Filmes</Link>
        </div>
    )
};

export default Error;