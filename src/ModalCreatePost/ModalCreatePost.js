import './ModalCreatePost.css';
import React, { useEffect, useRef, useState } from 'react';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import Axios from 'axios';
function ModalCreatePost(props) {
    const [cpt, setCpt] = useState(1)
    const [front_form_data, setFormDataFront] = useState({
        title:"",
        File:"",
        hashtag:"",
        link:"",
        content:""
}) 

   const handleSubmitOne = (e) => {
        e.preventDefault()
        const form_data = new FormData(e.currentTarget)
        handleFormData(form_data)
    }

    const handleFormData = (form_data) => {
        const values = [...form_data.values()]
        const is_empty = values.includes("")
        const raw = Object.fromEntries(form_data)
        raw.userId = 1
        if(!is_empty){
            Axios.post(`http://localhost:3001/api/posts`,raw,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
            })
            .then(res => {
              console.log(res)
            })
        } else {
            console.log('remplissez toutes les valeurs !')
        }
    }

    return (

        <div className="ModalCreatePost">
            <div className="titleStep">Etape {cpt} /3</div>
            <div className="switchStepBox">
                <form onSubmit={handleSubmitOne}>
                    <StepOne setCpt={setCpt} cpt={cpt} frontFormData={front_form_data} setFormDataFront={setFormDataFront}></StepOne>
                    <StepTwo setCpt={setCpt} cpt={cpt} frontFormData={front_form_data} setFormDataFront={setFormDataFront} ></StepTwo>
                    <StepThree setCpt={setCpt} cpt={cpt} frontFormData={front_form_data} ></StepThree>
                </form>
            </div>
    <div style={{fontSize:15,color:"green"}}>{JSON.stringify(front_form_data)}</div>
        </div>
    );
}

export default ModalCreatePost;