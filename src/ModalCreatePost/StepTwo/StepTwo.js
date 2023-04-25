import { useEffect, useState } from 'react';
import './StepTwo.css';
import Axios from 'axios'
function StepTwo(props) {
  const [selected_user,setSelectedUser] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target);
    props.setpost(data)
  }
  const select_user = async () => {
    const getResponse = await Axios
      .get("http://localhost:3001/api/users", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => response)
      .catch((err) => console.log(err)
      );
      console.log(getResponse.data)
      setSelectedUser(getResponse.data)
  }

  console.log(selected_user)
  const list_users = selected_user.response.map((user) => 
  
  <option id={user.id}>{user.username}</option>  );
  console.log(list_users)
  return (
    <>
      <form className={"StepTwo " + (props.cpt == 2 ? 'active' : 'desactive')} onSubmit={handleSubmit}>
        <input type="text" className="inputStepTwo" placeholder="Hashtag" name="hashtag" id="hashtag"></input>
        <select className="user_selected">
        <option defaultValue={'DEFAULT'}>Choissisez un utilisateur</option> 
          {list_users}
        </select>
        <input type="text" className="inputStepTwo" placeholder="Lien" name="link"></input>
        <select className="type_post">
          <option defaultValue={'DEFAULT'} disabled>Choissisez un type de post</option>
          <option value="Image">Image</option>
          <option value="Reel">Réel</option>
          <option value="Video">Video</option>
        </select>

        <button className={"buttonSwitchStepSuiv " + (props.cpt == 2 ? "active" : "desactive")} onClick={
          () => {
            props.setCpt(props.cpt + 1)
          }
        }>Suivant</button>
        <button className={"buttonSwitchStepPrev " + (props.cpt == 2 ? "active" : "desactive")} onClick={
          () => {
            props.setCpt(props.cpt - 1)
            if (props.cpt < 1) {
              props.setCpt(2)
            }
          }
        }>Précédent</button>
      </form>
    </>
  );
}

export default StepTwo;