import '../../../assets/css/navbar.css';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Boathouse</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><Link to ='/ud'><AccountCircleIcon/></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
