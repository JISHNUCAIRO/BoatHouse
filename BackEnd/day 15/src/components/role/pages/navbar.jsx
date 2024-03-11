import '../../../assets/css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Boathouse</h1>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><Link id='eye' to='/ud'><FontAwesomeIcon icon={faUserLock}/></Link></li>
    
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
