import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {signup } from '../../api/api';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('User login with username:', username, 'and password:', password);
   
    if (username === "admin" && password === "admin123") {
      console.log("Admin login successful");
      navigate("/adh");
      // Redirect or do whatever you need for admin login
    } else {
      // If not admin, proceed with regular login
      if((await signup(username,password)).data) {
        console.log("Login successful");
        navigate('/userlogin');
      } else {
        console.log("Login failed"); 
      }
    }
   
  };

  return (
    <div className="user-login-form">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* {loginError && <div className="alert alert-danger">{loginError}</div>} */}
        <button type="submit" className="btn btn-primary">Login</button>
        <p>Do not have an account? <Link to='/regu'>Please Sign Up</Link></p>
      </form>
    </div>
  );
};

export default UserLogin;
