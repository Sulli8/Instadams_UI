import { useEffect, useState} from "react"
import "./ModalFollowing.css"
const ModalFollowing = (props) => {
    const closeModale = () => {
        props.setCloseModale()
    }
    const setUnFollow = () => {
        props.setUnFollow()
    }
    return <div style={{display:props.modal_following}}  className="modal_following">
       <div className="box_following">
        <div className="account_profil">
         
            <span className="material-symbols-outlined close_modal_following" onClick={closeModale}>
            close
            </span>
            <div className="profil_img"></div>
            <div className="user_name"></div>
        </div>
        <button className="button_flollowing" onClick={setUnFollow}>Ne plus suivre</button>
        </div> 
    </div>
}

export default ModalFollowing