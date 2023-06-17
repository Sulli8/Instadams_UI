import "./ButtonFollowing.css";
const ButtonFollowing = (props) => {

    let button;
    button = <button className="following_btn" onClick={()=> {
        props.setUnFollow(props.id_user)
    }}>
    Suivi(e)s
</button>
    return button
  }
  export default ButtonFollowing