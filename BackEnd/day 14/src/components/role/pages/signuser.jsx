import { Link, useNavigate} from 'react-router-dom';
import  { useState } from 'react';
import '../../../assets/css/signuser.css';
import { signup } from '../../../api/api';
// import axios from 'axios';
// import { login } from '../../../api/api';
const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setUsername] = useState('');
  const nav=useNavigate();
  const handleSignIn= async (e) => {
    e.preventDefault();
    console.log('User login with username:', name, 'and password:', password, 'and email',email);
   
     if((await signup(name,email,password)).data)
     {
       console.log("Login successful");
       nav('/userlogin');
     }
     else
     {
      console.log("Login failed"); 
     }
   
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSignIn}>
      <input
          type="name"
          placeholder="username"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
          // required
        />
        <input
          // type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Sign In</button>
        <Link to='/userlogin'>Already have an account?</Link>
      </form>
    </div>
  );
};

export default SignInPage;
