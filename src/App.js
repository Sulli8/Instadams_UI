import './App.css';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Profil  from './Profil/Profil';
import CreatePost  from './CreatePost/CreatePost';
import Messages from './Messages/Messages';
import Page from './Page/Page';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [isloggedIn, setLoggedIn ] = useState(true)
  useEffect(() => {
    if(localStorage.getItem('token')){
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  const loggedIn = () =>{
    console.log(isloggedIn)
    setLoggedIn(true)
  }
  const [show_success,setShowSuccess] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isloggedIn ? <Page setShowSuccess={setShowSuccess} show_success={show_success} /> : <Auth isLogged={loggedIn}/>}></Route>
        <Route path="/home" element={isloggedIn ? <Home setShowSuccess={setShowSuccess} show_success={show_success} /> : <Auth isLogged={loggedIn}/>}></Route>
        <Route path="/profil/:user_name" element={isloggedIn ? <Profil/> : <Auth isLogged={loggedIn}/> }></Route>
        <Route path="/createPost" element={ isloggedIn ? <CreatePost setShowSuccess={setShowSuccess} />  : <Auth isLogged={loggedIn}/>}></Route>
        <Route path="/messages" element={ isloggedIn ? <Messages /> : <Auth isLogged={loggedIn}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
