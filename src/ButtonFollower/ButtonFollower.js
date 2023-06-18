import "./ButtonFollower.css";
const ButtonFollower = (props) => {
    let button = <button className="follower_btn" onClick={() => {
        props.setFollow(props.id_user,props.user_name)
    }}>
    Suivre
    </button>

    return button
  }
  export default ButtonFollower