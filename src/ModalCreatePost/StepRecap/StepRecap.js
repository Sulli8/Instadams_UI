import './StepRecap.css';
function StepRecap(props) {

  return (
    <div className={"StepRecap " + (props.cpt == 4 ? 'active' : 'desactive')}>
        <p>StepRecap</p>
    </div>
  );
}

export default StepRecap;