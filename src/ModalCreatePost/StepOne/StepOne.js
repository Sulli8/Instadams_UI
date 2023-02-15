import './StepOne.css';
function StepOne(props) {

    return (
        <div className={"StepOne " + (props.cpt == 1 ? 'active' : 'desactive')}>
            <form className="formStepOne">
                <input className="inputStepOne" placeholder="Ajouter une titre" type="text"></input>
                <div className="boxInput">
                    <input type="file" name="file" id="file" className="fileInputStepOne"></input>
                    <label htmlFor="file"> Sélectionner sur l'ordinateur</label>
                </div>
            </form>
        </div>
    );
}

export default StepOne;