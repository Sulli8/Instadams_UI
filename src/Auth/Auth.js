import './Auth.css';
import React, { useRef, useState } from 'react';
import Axios from 'axios'
import {
  BrowserRouter as Router, useNavigate
} from 'react-router-dom';
import Modal from "../Modal/Modal"
function Auth() {

  const [error, setError] = useState({ message: "" });
  const mailRef = useRef(null);

  const passwordRef = useRef(null);
  const [updatedMail, setUpdatedMail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [stateModal, setStateModal] = useState('none');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()

    setUpdatedMail(mailRef.current.value)
    setUpdatedPassword(passwordRef.current.value)

    Axios.post(`http://localhost:3333/api/auth/login`, {
      email: mailRef.current.value,
      password: passwordRef.current.value
    })
      .then(res => {
        console.log(res)
        if (res.data.token != null && res.data.token.length > 20) {
          let updatedError = { message: "" };
          setError(error => ({
            ...error,
            ...updatedError
          }));
          navigate("/home")

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
      <Modal valueState={stateModal} setStatutModal={setStateModal}/>
      <section className='section'>
        <div className='box_1'>
          <div>
            <h3 className="titleFirst">Instadams</h3>
            <h1 className="titleSecond"><span>Start your account with us</span>
            </h1>
          </div>
          <button className="btnSignIn" onClick={() => {
            setStateModal('block')
          }}>Sign Up</button>
        </div>

        <div className="box_2">
          <form className="Auth" onSubmit={handleSubmit}>
            <h3 className="title_auth">Sign Up</h3>
            <label className="label">Email</label>
            <input type="mail" ref={mailRef} className="input" required></input>
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