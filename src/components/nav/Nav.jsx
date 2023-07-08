import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from './Nav.modules.css';

    
const Nav = ({onSearch, setAccess}) =>{
    

    const handleLogOut = ()=>{
        setAccess(false);
        
    }
    
    return(
        <nav className={styles['nav-container']}>
            <SearchBar onSearch={onSearch}/>
            <button className={styles['nav-button']}>
                <Link to = '/about'>About</Link>
            </button>

            <button className={styles['nav-button']}>
                <Link to = '/home'>Home</Link>
            </button>
            
            <button className={styles['nav-button']}>
                <Link to = '/favorites'>Favorites</Link>
            </button>

            <button onClick={handleLogOut} className={styles['nav-button']}>Log out</button>
        </nav>
    )
}

export default Nav;