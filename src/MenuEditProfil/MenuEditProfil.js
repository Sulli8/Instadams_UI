  import './MenuEditProfil.css'
  import { useEffect, useState, useRef } from 'react';

  const MenuEditProfil = (props) => {
      const [checked, setChecked] = useState(false);
      const ref = useRef(null);
    //   <form className="form_edit_profil">
    //   <input type="text" className="input" placeholder="Nom"></input>
    //   <input type="text" className="input" placeholder="Mot de passe"></input>
    //   <button type="button" className="btn_submit">Envoyer</button>
    // </form>
      return (
              <div className="menu_editProfil">
                <a  onClick={()=> {
                  props.setForm('information_personnelle')
                }}>
                  <h3>Informations personnelles</h3>
                </a>
                <a onClick={()=> {
                  props.setForm('Commentaire')
                }}>
                  <h3>Commentaires</h3>
                </a>

                <a onClick={()=> {
                  props.setForm('Post')
                }}>
                  <h3>Post</h3>
                </a>

                <a onClick={()=> {
                  props.setForm('Conversations')
                }}>
                  <h3>Conversations</h3>
                </a>

                <a onClick={()=> {
                  props.setForm('Notifications')
                }}>
                <h3>Notifications</h3>
                </a>

                <a onClick={()=> {
                  props.setForm('Abonnements')
                }}>
                <h3> Abonnements</h3>
                </a>

                <a onClick={()=> {
                  props.setForm('Aide')
                }}>
                <h3> Aide</h3>
                </a>
              </div>
      )

  }




  export default MenuEditProfil;
