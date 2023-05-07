import { useEffect, useState } from 'react';
import './StepThree.css';
import Axios from 'axios'
function StepThree(props) {
  return (
    <>
  
    <div className={"StepThree " + (props.cpt == 3 ? 'activeStepThree' : 'desactive')}>
        <div className="containerPost">
          <p className="usernamePost">Titre</p>
          <p className="descriptionPost">Description</p>
          <p>url</p>
        </div>
        
    </div>
     <button className={"buttonSwitchStepPrev " + (props.cpt == 3 ? "active" : "desactive")} onClick={
      (e) => {
        e.preventDefault()
        props.setCpt(props.cpt - 1)
        if (props.cpt < 1) {
          props.setCpt(2)
        }
      }
    }>Précédent</button>
      <button type="submit" className={"buttonSwitchStepSuiv " + (props.cpt == 3 ? "active" : "desactive")}>Suivant</button>
    </>
  );
}

export default StepThree;