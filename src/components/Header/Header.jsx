import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div id='header'>
        <div>
            <Link to="/">
            <p> {">"}_ </p>
            </Link>
        </div>
        <div className='header-links'>
        <Link to="/about">
            <p>About</p>
        </Link>
        <Link to="/projects">
            <p>Projects</p>
        </Link>
        <Link to="/contact">
            <p>Contact</p>
        </Link>
        </div>
    </div>
  )
}

export default Header