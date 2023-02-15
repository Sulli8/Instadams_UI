import './StepTwo.css';
function StepTwo(props) {

  return (
    <div className={"StepTwo " + (props.cpt == 2 ? 'active' : 'desactive')}>
        <input type="text" className="inputStepTwo" placeholder="Hashtag"></input>
        <input type="text" className="inputStepTwo" placeholder="Utilisateurs"></input>
        <input type="text" className="inputStepTwo" placeholder="Lien"></input>
        <select className="typePost">
        <option  disabled selected>Choissisez un type de post</option>
            <option value="Image">Image</option>
            <option value="Reel">Réel</option>
            <option value="Video">Video</option>
        </select>
   
    </div>
  );
}

export default StepTwo;