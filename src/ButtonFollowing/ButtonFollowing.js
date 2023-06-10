import "./ButtonFollowing.css";
const ButtonFollowing = (props) => {
    const modal_unfollow = () => {
        props.setModalUnFollow("flex")
    }
    return <button className="following_btn" onClick={modal_unfollow}>
                Suivi(e)s
        </button>
  }
  export default ButtonFollowing