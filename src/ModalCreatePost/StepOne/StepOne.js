import React, { useState } from 'react';
import './StepOne.css';

const StepOne = (props) => {
    return (
        <div className={"StepOne " + (props.cpt == 1 ? 'active' : 'desactive')}>
            <div className="formStepOne">
                <div className="boxInput">
                    <input required="required" accept="image/*, .jpg,.png,.jpeg" type="file" name="File" id="file" className="fileInputStepOne" onChange={props.handleChange}></input>
                    <label htmlFor="file"> Sélectionner sur l'ordinateur</label>
                </div>
               
                <button type="button" className={"buttonSwitchStepSuiv " + (props.cpt == 1 ? "active" : "desactive")} onClick={
                    () => {
                        if(props.frontFormData.File.length == 0){
                            console.log("valide le champs avant de passer àa l'éape suivante")
                        }
                        props.setCpt(props.cpt + 1)
                    }
                }>Suivant</button>
            </div>
        </div>
    );
}

export default StepOne;