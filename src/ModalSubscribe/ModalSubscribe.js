
import "./ModalSubscribe.css"
import React, { useRef, useState } from 'react';
import Axios from 'axios'
import {
    BrowserRouter as Router, useNavigate
} from 'react-router-dom';
import { CiWarning} from 'react-icons/ci';
function ModalSubscribe(props) {
    const mailRef = useRef(null);
    const firstNameRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [updatedMail, setUpdatedMail] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [errorSubscribe, setErrorSubscribe] = useState('')
    const [boolError, setBoolError] = useState('none');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault()
        setUpdatedMail(mailRef.current.value)
        setUpdatedPassword(passwordRef.current.value)
        const raw =  {
            email: mailRef.current.value,
            password: passwordRef.current.value,
            username: nameRef.current.value
        }
        Axios.post(`http://localhost:3001/api/signup`,raw)
            .then(res => {
                if (!res.data.message) {
                    setBoolError("block")
                    setErrorSubscribe(res.data.message)
                } else {
                    Axios.post(`http://localhost:3001/api/login`, {
                        username: nameRef.current.value,
                        password: passwordRef.current.value
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
                }
            })
    }

    return (

        <section style={{ display: props.valueState }} className="modal">
            <div className="form-head">
                <form onSubmit={handleSubmit}>
                    <div className="field input-field">
                        <button className="onclose" onClick={() => {
                            props.setStatutModalSubscribe('none')
                        }
                        }>X</button>
                        <header className="title">Sign Up</header>
                    </div>
                    <div className="field input-field">
                        <input placeholder="Mail" className="" minLength={10} ref={mailRef} type="mail" required></input>
                    </div>
                    <div className="field input-field">
                        <input placeholder="Password" className="" minLength={4} ref={passwordRef} type="password" required></input>
                    </div>
                    <div className="field input-field">
                        <input placeholder="Name" ref={nameRef} type="text" required></input>
                        <div className="field button-field">
                            <button>Create an account</button>
                        </div>
                    </div>
                    <div className="errorSubscribe" style={{ display: boolError }}><CiWarning /> {errorSubscribe}</div>


                </form>
            </div>

        </section>



    )
}
export default ModalSubscribe