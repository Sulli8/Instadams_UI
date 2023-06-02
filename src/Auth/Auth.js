import { GoogleLogin } from '@react-oauth/google';
import Axios from 'axios';
import jwt_decode from "jwt-decode";
import React, { useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import {
  useNavigate
} from 'react-router-dom';
import ModalSubscribe from "../ModalSubscribe/ModalSubscribe";
import './Auth.css';
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

  if(localStorage.getItem('login_google') != null && localStorage.getItem('login_google').toString() == "true"){
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
            auth_google()
            localStorage.setItem('login_google',true)
          } else {
            localStorage.setItem('login_google',false)
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
          <span className="close material-symbols-outlined" onClick={() => setShowSuccess(false)} >close</span>
    </Alert>
  }
  if(show_error){
    alertDialog = <Alert variant="danger">
    Username ou mot de passe incorrect.
    <span className="close material-symbols-outlined" onClick={() => setShowError(false)} >close</span>
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
              <span className="material-symbols-outlined" onClick={() => {
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