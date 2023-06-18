import './EditProfil.css'
const EditProfil = () => {
    return (
        <div className="edit_account">
          <div>
            <h1>Paramètres</h1>
          </div>
          <form className="form_edit_profil">

            <input type="text" className="input" placeholder="Nom"></input>
            <input type="text" className="input" placeholder="Mot de passe"></input>
            <div className="checkbox">
            <input type="checkbox" className="btn_checkbox"></input>
              <p>  Désactiver les commentaires</p>
            </div>
            <button type="button" className="btn_submit">Envoyer</button>
          </form>
      </div>
    )
}

export default EditProfil;
