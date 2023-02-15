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


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}> </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/createPost" element={<CreatePost />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
