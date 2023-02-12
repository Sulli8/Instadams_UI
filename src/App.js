import './App.css';
import Auth from './Auth/Auth';
import Home from './Home/Home';

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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
