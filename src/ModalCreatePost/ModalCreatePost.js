import './ModalCreatePost.css';
import React, { useEffect, useRef, useState } from 'react';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
function ModalCreatePost(props) {
    const [cpt, setCpt] = useState(1)
    const [jsonPost, setJsonPost] = useState([])
    const handle_post = (formData) => {
        setJsonPost([...jsonPost,
            formData
        ]);
    }
    useEffect(() => {
     
    })
    return (

        <div className="ModalCreatePost">
            <div className="titleStep">Etape {cpt} /3</div>
            <div className="switchStepBox">
                <StepOne setCpt={setCpt} cpt={cpt} setpost={handle_post} ></StepOne>
                <StepTwo setCpt={setCpt} cpt={cpt} ></StepTwo>
                <StepThree setCpt={setCpt} cpt={cpt}></StepThree>
            </div>
        </div>
    );
}

export default ModalCreatePost;