import { useEffect, useState } from 'react';
import './StepThree.css';
function StepThree(props) {
  return (
    <>
    <div className={"StepThree " + (props.cpt == 3 ? 'activeStepThree' : 'desactive')}>        
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