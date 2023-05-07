import { useEffect, useState } from 'react';
import './StepTwo.css';
import Axios from 'axios'
function StepTwo(props) {
  const handleChange = (e) => {
    const name = e.target.name
    console.log(name,e.target.value)
    console.log(props.frontFormData)
    props.setFormDataFront({...props.frontFormData,
        [name]:e.target.value
    })
  }
 /* Axios.get('http://localhost:3001/api/users', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(function (response) {
      list_users.push(response.data.response)
        <select className="user_selected">
          <option defaultValue={'DEFAULT'}>Choissisez un utilisateur</option>
          {list_users.map(
        (user) => <option id={user.id}>{user.username}</option>
      )}
        </select>
    })
  
    console.log(list_users)*/
  return (
    <>
      <div className={"StepTwo " + (props.cpt == 2 ? 'active' : 'desactive')} >
        <input type="text" className="inputStepTwo" placeholder="Hashtag" name="hashtag" id="hashtag" onChange={handleChange}></input>
      
        <input type="text" className="inputStepTwo" placeholder="Lien" name="url" id="url" onChange={handleChange}></input>
        <select className="type_post" name="content" onChange={handleChange}>
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