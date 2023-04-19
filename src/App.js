import './App.css';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Profil  from './Profil/Profil';
import CreatePost  from './CreatePost/CreatePost';
import Messages from './Messages/Messages';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [isloggedIn, setLoggedIn ] = useState(true)
  const [isloggedOut, setLoggedOut ] = useState(false)
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isloggedIn ? <Home /> : <Auth isLogged={loggedIn}/>}> </Route>
        <Route path="/home" element={isloggedIn ? <Home /> : <Auth isLogged={loggedIn}/>}></Route>
        <Route path="/profil" element={isloggedIn ? <Profil/> : <Auth isLogged={loggedIn}/> }></Route>
        <Route path="/createPost" element={ isloggedIn ? <CreatePost />  : <Auth isLogged={loggedIn}/>}></Route>
        <Route path="/messages" element={ isloggedIn ? <Messages /> : <Auth isLogged={loggedIn}/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
