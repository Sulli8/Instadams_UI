import { useEffect, useState } from 'react';
import './StepTwo.css';
import Axios from 'axios'
function StepTwo(props) {


  return (
    <>
      <div className={"StepTwo " + (props.cpt == 2 ? 'active' : 'desactive')} >
        <input type="text" className="inputStepTwo" placeholder="Hashtag" name="hashtag" id="hashtag" onChange={props.handleChange}></input>
        <select className="type_post" name="content" onChange={props.handleChange}>
          <option defaultValue={'DEFAULT'} disabled>Choissisez un type de post</option>
          <option value="Image">Image</option>
          <option value="Reel">Réel</option>
          <option value="Video">Video</option>
        </select>

        <button type="button" className={"buttonSwitchStepSuiv " + (props.cpt == 2 ? "active" : "desactive")} onClick={
          (e) => {
            e.preventDefault()
            props.setCpt(props.cpt + 1)
          }
        }>Suivant</button>
        <button type="button" className={"buttonSwitchStepPrev " + (props.cpt == 2 ? "active" : "desactive")} onClick={
          (e) => {
            e.preventDefault()
            props.setCpt(props.cpt - 1)
            if (props.cpt < 1) {
              props.setCpt(2)
            }
          }
        }>Précédent</button>
      </div>
    </>
  );
}

export default StepTwo;