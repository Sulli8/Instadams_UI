import './ModalCreatePost.css';
import React, { useRef, useState } from 'react';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
function ModalCreatePost(props) {
    const [cpt, setCpt] = useState(1)
    const [jsonPost,setJsonPost] = useState({})
    return (
        <div className="ModalCreatePost">
           <div className="titleStep">Etape {cpt} /3</div>
            <div className="switchStepBox">
                <StepOne cpt={cpt} ></StepOne>
                <StepTwo cpt={cpt} ></StepTwo>
                <StepThree cpt={cpt}></StepThree>
                <button className="buttonSwitchStepSuiv" onClick={
                    () => {
                        setCpt(cpt + 1)
                        console.log(cpt)
                        if (cpt > 2) {
                            setCpt(1)
                        }
                    }
                }>Suivant</button>
                <button className={"buttonSwitchStepPrev " + (cpt > 1 ? "active" : "desactive")} onClick={
                    () => {
                        setCpt(cpt - 1)
                        if (cpt < 1) {
                            setCpt(2)
                        }
                    }
                }>Précédent</button>
            </div>
        </div>
    );
}

export default ModalCreatePost;