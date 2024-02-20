import  { useState } from 'react';
import '../../assets/css/adminlogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Admin login with username:', username, 'and password:', password);
  };

  return (
    <div className='d'>
    <div className="admin-login-form">
      <h2>Admin Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default AdminLogin;
