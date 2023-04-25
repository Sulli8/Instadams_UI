import './StepOne.css';
function StepOne(props) {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target);
        props.setpost(data)
    }
    return (
        <div className={"StepOne " + (props.cpt == 1 ? 'active' : 'desactive')}>
            <form className="formStepOne" onSubmit={handleSubmit}>
                <input className="inputStepOne" placeholder="Ajouter une titre" type="text" name="title"></input>
                <div className="boxInput">
                    <input type="file" name="file" id="file" className="fileInputStepOne"></input>
                    <label htmlFor="file"> Sélectionner sur l'ordinateur</label>
                </div>
                <button className={"buttonSwitchStepSuiv " + (props.cpt == 1 ? "active" : "desactive")}onClick={
                    () => {
                        props.setCpt(props.cpt + 1)
                    }
                }>Suivant</button>
            </form>
        </div>
    );
}

export default StepOne;