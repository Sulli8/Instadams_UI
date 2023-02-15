import './StepThree.css';
function StepThree(props) {

  return (
    <div className={"StepThree " + (props.cpt == 3 ? 'active' : 'desactive')}>
        <p>StepThree</p>
    </div>
  );
}

export default StepThree;