
import "./ModalSubscribe.css"
import React, { useRef, useState } from 'react';
import Axios from 'axios'
import {
    BrowserRouter as Router, useNavigate
} from 'react-router-dom';
import { CiWarning,CiMail,CiUser } from 'react-icons/ci';
import { TbPassword } from 'react-icons/tb';
function ModalSubscribe(props) {
    const mailRef = useRef(null);
    const firstNameRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [updatedMail, setUpdatedMail] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [errorSubscribe,setErrorSubscribe] = useState('')
    const [boolError,setBoolError] = useState('none');
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
           name:nameRef.current.value
         })
           .then(res => {
            if(!res.data.message){
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
            <section className="formHead">
                <div className="boxHead">
                    <h1 className="title">Sign In</h1>
                    <button className="onclose" onClick={() => {
                        props.setStatutModalSubscribe('none')
                    }
                    }>X</button>
                </div>
                <form className="formSign" onSubmit={handleSubmit}>
                    <div className="boxInput">
                        <label>< CiMail/> Email</label>
                        <input className="" minLength={10}  ref={mailRef} type="mail" required></input>
                    </div>
                    <div className="boxInput">
                        <label><TbPassword/> Password</label>
                        <input className="" minLength={4} ref={passwordRef} type="password" required></input>
                    </div>
                    <div className="boxInput">
                        <label><CiUser/>Name</label>
                        <input ref={nameRef} type="text" required></input>
                    </div>
                    <div className="errorSubscribe" style={{display:boolError}}><CiWarning/> {errorSubscribe}</div>
                    <div className="boxBtnAccount">
                        <button>Create an account</button>
                    </div>
                   
                </form>
            </section>
        </section>


    )
}
export default ModalSubscribe