import './Auth.css';
import React, { useRef, useState } from 'react';
import Axios from 'axios'
import {
  BrowserRouter as Router, useNavigate
} from 'react-router-dom';
import ModalSubscribe from "../ModalSubscribe/ModalSubscribe"
import Alert from 'react-bootstrap/Alert';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
function Auth(props) {
  let alertDialog;
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [show_success, setShowSuccess] = useState(false);
  const [show_error, setShowError] = useState(false);
  const [stateModalSubscribe, setStateModalSubscribe] = useState('none');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    Axios.post(`http://localhost:3001/api/login`, {
      username: userNameRef.current.value,
      password: passwordRef.current.value
      }, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
      }
    })
      .then(res => {
        if (res.data.token != null && res.data.token.length > 20) {
          localStorage.setItem("token", res.data.token)
          if(localStorage.getItem('token').length > 0){
            props.isLogged()
            navigate("/home")
          }
        }
      })
      .catch(error => {
        setShowError(true)
      })
  }
  const responseMessage = (response) => {
    console.log(response)
    let user_object_google = jwt_decode(response.credential)
    console.log(user_object_google)
    const raw =  {
      email: user_object_google.email,
      password: user_object_google.sub,
      username: "G_"+user_object_google.given_name
    }
  const auth_google = () => {
    Axios.post(`http://localhost:3001/api/login`,raw, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
      }
    })
      .then(res => {
        if (res.data.token != null && res.data.token.length > 20) {
          localStorage.setItem("token", res.data.token)
          console.log('Utilisateur existant : connexion ! ')
          if(localStorage.getItem('token').length > 0){
            props.isLogged()
            navigate("/home")
          }
        }
      })
      .catch(error => {
        setShowError(true)
      })
  }

  if(localStorage.getItem('login_google')){
    auth_google()
  } else {
      Axios.post(`http://localhost:3001/api/signup`,raw,{
        headers: {
            'Access-Control-Allow-Origin' : '*',
          }
      })
        .then(res => {
          console.log("respsone : ",res)
          if(res.data.message) {

            localStorage.setItem('login_google',true)
            auth_google()
          }
          

        })
    };
  }
  
  const errorMessage = (error) => {
    setShowError(true)
  };
  if(show_success) {
    alertDialog = <Alert  variant="success">
          Utilisateur ajouté avec succès ! Vous pouvez désormais vous connecté.
      <svg className="close" onClick={() => setShowSuccess(false)} stroke="currentColor" fill="#BCD7BE" stroke-width="0" viewBox="0 0 24 24"   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#BCD7BE" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
    </Alert>
  }
  if(show_error){
    alertDialog = <Alert variant="danger">
    Username ou mot de passe incorrect.
    <svg className="close" onClick={() => setShowError(false)} stroke="currentColor" fill="#BCD7BE" stroke-width="0" viewBox="0 0 24 24"   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#f4c7c7" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
    </Alert>
  }

  return (
    <>
      <ModalSubscribe  setStateModalSubscribe={setStateModalSubscribe} show={show_success} setShow={setShowSuccess} isLogged={props.isLogged} valueState={stateModalSubscribe} setStatutModalSubscribe={setStateModalSubscribe}/>
    
      {alertDialog}
    
      <section className='section'>
      
        <div className='box_1'>
          <div>
            <h3 className="titleFirst">Instadams</h3>
            <h1 className="titleSecond"><span>Démarre ton compte Instadams avec nous.</span>
            </h1>
          </div>
          <button className="btnSignIn" onClick={() => {
            setStateModalSubscribe('block')
          }}>S'inscrire</button>
        </div>
          <form className="Auth box_2" onSubmit={handleSubmit}>
            <div className="connecter_hambourg_icon">
              <h3 className="title_auth">Se connecter </h3>
              <span class="material-symbols-outlined" onClick={() => {
            setStateModalSubscribe('block')
          }}>menu</span>
            </div>
            <label className="label">Utilisateur</label>
            <input type="mail" ref={userNameRef} className="input" required></input>
            <label className="label">Mot de passe</label>
            <input type="password" ref={passwordRef} className="input" required></input>
            <button className="login_auth">Se connecter</button>
            <div>
              <div className="containerLine">
                <span className="line"></span>
                <p className="titleLine"><b>or</b></p>
                <span className="line"></span>
              </div>

              <GoogleLogin style={{height:300}} onSuccess={responseMessage} onError={errorMessage} />
            </div>

          </form>
      

      </section>
    </>

  );
}

export default Auth;