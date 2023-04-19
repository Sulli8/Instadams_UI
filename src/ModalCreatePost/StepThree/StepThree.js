import './StepThree.css';
function StepThree(props) {

  return (
    <div className={"StepThree " + (props.cpt == 3 ? 'activeStepThree' : 'desactive')}>
        <img className="recapImg" src="https://media.vanityfair.com/photos/57a2452c8c5707890d11095a/master/w_1600%2Cc_limit/boyz-in-the-hood-september-2016-02.jpg"></img>
        <div className="containerPost">
          <p className="usernamePost">Titre</p>
          <p className="descriptionPost">Description</p>
          <p>url</p>
        </div>
    </div>
  );
}

export default StepThree;