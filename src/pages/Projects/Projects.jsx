import { Link } from 'react-router-dom';
import './Projects.css';


function Projects() {
  return (
    <div className='project'>
    <div className='project-list'>
      <div>
        <p>⚫ E-commerce Project</p>
        <p>Github-{">"} 
        <Link to="https://github.com/SolarCat05/Bookstore_mern_app">
        <span className='links' style={{color:'white'}}>
        {"https://github.com/SolarCat05/Bookstore_mern_app"}
        </span>
        </Link>
        </p>

        <p>Live-{">"}
        <Link to="https://bookstore-mern-app-kfk9.onrender.com/">
        <span className='links' style={{color:'white'}}>
        {"https://bookstore-mern-app-kfk9.onrender.com/"}
        </span>
        </Link>
        </p>
      </div>
      <div>
        <p>⚫ Personal Portfolio</p>
        <p>Github-{">"} 
        <Link to="https://github.com/SolarCat05/Portfolio">
        <span className='links' style={{color:'white'}}>
        {"https://github.com/SolarCat05/Portfolio"}
        </span>
        </Link>
        </p>

        <p>Live-{">"}
        <Link to="https://portfolio-kpyo.onrender.com">
        <span className='links' style={{color:'white'}}>
        {"https://portfolio-kpyo.onrender.com"}
        </span>
        </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Projects