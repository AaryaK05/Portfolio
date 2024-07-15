import './Home.css';
import pp from '../../assets/ProfilePic.jpg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
       <div className='home-center'>
        <div className='left-font'>
        <p className='home-font' id='hey'>Hey there!</p>
        <p className='home-font'>I'm Aarya</p>
        <p className='typewriter'>Web Developer</p>
        </div>
        <div id='image-bk'>
            <img src={pp}/>
            <div className='sm-links'>
            <Link to="https://github.com/SolarCat05">
            <img src={github} className='sm'/>
            </Link>
            <Link to="https://www.linkedin.com/in/aarya-kasbe-87bab3227/">
            <img src={linkedin} className='sm'/>
            </Link>
            </div>
        </div>
        {/* <p className='home-font'>Student</p> */}
       </div>
    </div>
  )
}

export default Home