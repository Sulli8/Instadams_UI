import EditProfil from "../EditProfil/EditProfil";
import "./ButtonEditProfil.css";
const ButtonEditProfil = (props) => {
  const edit_account = () => {
    props.setChild(<EditProfil></EditProfil>)
  }
    return <button className="button_profil" onClick={edit_account}>Modifier profil</button>
  }
  export default ButtonEditProfil