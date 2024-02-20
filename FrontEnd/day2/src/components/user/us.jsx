import { useState } from 'react';
// import '../../assets/css/userlogin.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('User login with username:', username, 'and password:', password);
  };

  return (
    <div className="user-login-form">
      <h2>User Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
