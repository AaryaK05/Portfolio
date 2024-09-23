
import './Header.css';

function Header() {
  return (
    <div id='header'>
        <div>
            <a style={{textDecoration:'none'}} href="#">
            <p> {">"}_ </p>
            </a>
        </div>
        <div className='header-links'>
        <a style={{textDecoration:'none'}} href="#about">
            <p>About</p>
        </a>
        <a style={{textDecoration:'none'}} href="#projects">
            <p>Projects</p>
        </a>
        <a style={{textDecoration:'none'}} href="#contact">
            <p>Contact</p>
        </a>
        
        </div>
    </div>
  )
}

export default Header