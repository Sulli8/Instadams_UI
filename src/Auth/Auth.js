import './Auth.css';
import React, { useRef, useState } from 'react';
import Axios from 'axios'
import {
  BrowserRouter as Router, useNavigate
} from 'react-router-dom';
import ModalSubscribe from "../ModalSubscribe/ModalSubscribe"
function Auth(props) {

  const [error, setError] = useState({ message: "" });
  const userNameRef = useRef(null);

  const passwordRef = useRef(null);
  const [updatedUserName,setUpdatedUserName] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [stateModalSubscribe, setStateModalSubscribe] = useState('none');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()
    setUpdatedUserName(userNameRef.current.value)
    setUpdatedPassword(passwordRef.current.value)
    console.log(userNameRef.current.value,passwordRef.current.value)
    Axios.post(`http://localhost:3001/api/login`, {
      username: userNameRef.current.value,
      password: passwordRef.current.value
    })
      .then(res => {
        console.log("resultat :",res)
        if (res.data.token != null && res.data.token.length > 20) {
          let updatedError = { message: "" };
          setError(error => ({
            ...error,
            ...updatedError
          }));
          localStorage.setItem("token", res.data.token)
          if(localStorage.getItem('token').length > 0){
            props.isLogged()
            
            navigate("/home")
          }
       
        } else {
          let updatedError = { message: "Email or Password Incrorect" };
          setError(error => ({
            ...error,
            ...updatedError
          }));
        }
      })
  }

  return (
    <>
      <ModalSubscribe valueState={stateModalSubscribe} setStatutModalSubscribe={setStateModalSubscribe}/>
      <section className='section'>
        <div className='box_1'>
          <div>
            <h3 className="titleFirst">Instadams</h3>
            <h1 className="titleSecond"><span>Start your account with us</span>
            </h1>
          </div>
          <button className="btnSignIn" onClick={() => {
            setStateModalSubscribe('block')
          }}>Sign Up</button>
        </div>

        <div className="box_2">
          <form className="Auth" onSubmit={handleSubmit}>
            <h3 className="title_auth">Sign Up</h3>
            <label className="label">Username</label>
            <input type="mail" ref={userNameRef} className="input" required></input>
            <label className="label">Password</label>
            <input type="password" ref={passwordRef} className="input" required></input>
            <div className="error">{error.message}</div>
            <button className="login_auth">Login</button>
            <div>
              <div className="containerLine">
                <span className="line"></span>
                <p className="titleLine"><b>or</b></p>
                <span className="line"></span>
              </div>
              <button className="login_google">Sign in with Google</button>
            </div>

          </form>
        </div>

      </section>



    </>

  );
}

export default Auth;