import "./ButtonFollower.css";
const ButtonFollower = (props) => {
    let button;
    button = <button className="follower_btn" onClick={() => {
        props.setFollow(props.id_user)
    }}>
        Suivre
    </button>


    return button
  }
  export default ButtonFollower