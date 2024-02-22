import './assets/css/land.css';
import './App.css'
import './assets/css/adminlogin.css';
import './assets/css/userlogin.css';
import LoginPage from './components/role/pages/land';
import UserLogin from './components/role/us';
import AdminLogin from './components/role/ad';
import Home from './components/role/pages/home';
import { useLocation } from 'react-router-dom';
import SideBar from './components/role/pages/sidebar';
import NavBar from './components/role/pages/navbar';
import Footer from './components/role/pages/footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Userdetails from './components/role/pages/userdetails';
import './assets/images/beautiful-shot-small-lake-with-wooden-rowboat-focus-amazing-clouds-sky.jpg';

function App() {
  const Navi=()=>{
    const location=useLocation();
    if(location.pathname!='/' && location.pathname!='/signup' && location.pathname!='/adminlogin' && location.pathname!='/userlogin')
    {
      return(
        <>
        <NavBar loc={location.pathname}></NavBar>
        <SideBar />
        </>
        )
    }
    else{
      return null;
    }
  }
  return (
    <BrowserRouter>
    <div>
      <Navi/>
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/ud' element={<Userdetails/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App