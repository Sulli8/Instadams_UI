
import "./ButtonEditProfil.css";
import ContainerForm from "../ContainerForm/ContainerForm";
const ButtonEditProfil = (props) => {
  const edit_account = () => {
    props.setChild(<ContainerForm></ContainerForm>)
  }
    return <button className="button_profil" onClick={edit_account}>Modifier profil</button>
  }
  export default ButtonEditProfil