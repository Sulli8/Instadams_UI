const InformationPersonnelle = () => {
    return (
        <form className="form_edit_profil">
            <input type="text" className="input" placeholder="Nom"></input>
            <input type="text" className="input" placeholder="Mot de passe"></input>
            <button type="button" className="btn_submit">Envoyer</button>
        </form>
    )
}

export default InformationPersonnelle