import './ContainerForm.css'
import { useEffect, useState, useRef } from 'react';
import MenuEditProfil from "../MenuEditProfil/MenuEditProfil"
import InformationPersonnelle from "../InformationPersonnelle/InformationPersonnelle"
const ContainerForm = () => {
    const [checked, setChecked] = useState(false);
    const ref = useRef(null);
    const[form,setForm] = useState(<InformationPersonnelle></InformationPersonnelle>)

    const setPageForm = (state) => {
        switch(state){
            case "information_personnelle":
                setForm(<InformationPersonnelle></InformationPersonnelle>)
                break
            
        }
    }

    return (
        <div className="edit_account">
            <div>
              <h1>Paramètres</h1>
            </div>
            <div className="box_editProfil">
                <MenuEditProfil></MenuEditProfil>
                {form}  
            </div>
        </div>
        
    )

}




export default ContainerForm;
