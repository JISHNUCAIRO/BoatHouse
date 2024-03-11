import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleAdminLogin = () => {
    console.log('Admin login clicked');
  };

  const handleUserLogin = () => {
    console.log('User login clicked');
  };

  return (
    <div className='land'>
    <div className="login-page">
      <h2 className='l'>Welcome to My Website</h2>
      <p className='l'>Please select your login role:</p>
      <div className="login-buttons">
      <Link to="/adminlogin"><button className="admin-button" onClick={handleAdminLogin}>Login as Admin</button></Link>
        <Link to="/userlogin"><button className="user-button" onClick={handleUserLogin}>Login as User</button></Link>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;