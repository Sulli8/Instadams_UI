
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
        console.log("Mail : ", mailRef.current.value)
        console.log("Password : ", passwordRef.current.value)
        console.log("name : ", nameRef.current.value)

        event.preventDefault()
        setUpdatedMail(mailRef.current.value)
        setUpdatedPassword(passwordRef.current.value)
        Axios.post(`http://localhost:3001/api/signup`, {
            email: mailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value
        })
            .then(res => {
                if (!res.data.message) {
                    setBoolError("block")
                    setErrorSubscribe(res.data.message)
                } else {
                    setBoolError("none")
                    navigate("/home")
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