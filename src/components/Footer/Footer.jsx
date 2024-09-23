import { Link } from 'react-router-dom';
import './Footer.css';
import  facebook  from '../../assets/facebook.png';
import  linkedin  from '../../assets/linkedin.png';
import  github  from '../../assets/github.png';

function Footer() {
  return (
    <div id='footer'>
        <div>
        <p>© Aarya</p>
        </div>
        <div className='header-links'>
            <Link to='https://www.linkedin.com/in/aarya-kasbe-87bab3227'>
              <img src={linkedin} style={{width:'20px', height:'20px'}}/>
            </Link>
            <Link to='https://github.com/AaryaK05'>
              <img src={github} style={{width:'18px', height:'18px'}}/>
            </Link>
            {/* <Link to=''>
              <img src={facebook} style={{width:'20px', height:'20px'}}/>
            </Link> */}
        </div>
    </div>
  )
}

export default Footer