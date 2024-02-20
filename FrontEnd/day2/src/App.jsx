import './assets/css/land.css';
import './App.css'
import './assets/css/adminlogin.css';
import './assets/css/userlogin.css';
import LoginPage from './components/pages/land';
import UserLogin from './components/user/us';
import AdminLogin from './components/admin/ad';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './assets/images/beautiful-shot-lake-with-few-boats-with-female-standing-one-them.jpg';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
