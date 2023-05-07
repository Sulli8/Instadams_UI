import FormRange from 'react-bootstrap/esm/FormRange';
import './StepOne.css';
function StepOne(props) {
    const handleChange = (e) => {
        const name = e.target.name
        console.log(name,e.target.value)
        console.log(props.frontFormData)
        props.setFormDataFront({...props.frontFormData,
            [name]:e.target.value
        })
    }
    return (
        <div className={"StepOne " + (props.cpt == 1 ? 'active' : 'desactive')}>
            <div className="formStepOne">
            <input className="inputStepOne" placeholder="Ajouter une titre" type="text" name="title" id="title" onChange={handleChange}></input>
                <div className="boxInput">
                    <input accept="image/*, .jpg,.png,.jpeg" type="file" name="File" id="file" className="fileInputStepOne" onChange={handleChange}></input>
                    <label htmlFor="file"> Sélectionner sur l'ordinateur</label>
                </div>
                <button type="button" className={"buttonSwitchStepSuiv " + (props.cpt == 1 ? "active" : "desactive")} onClick={
                    () => {
                        props.setCpt(props.cpt + 1)
                    }
                }>Suivant</button>
            </div>
        </div>
    );
}

export default StepOne;