import "./ButtonFollower.css";
const ButtonFollower = (props) => {
    const follow = () => {
        props.setFollow(props.id_user)
        
    }
    let button;
    button = <button className="follower_btn" onClick={follow}>
        Suivre
    </button>


    return button
  }
  export default ButtonFollower