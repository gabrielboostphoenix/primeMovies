import Style from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={Style.headerContainer}>
            <h1 className={Style.logo}>Prime Flix</h1>
            <Link to='/favorite-movies/' className={Style.headerLink}>Meus Filmes</Link>
        </header>
    )
}

export default Header;