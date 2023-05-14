import React, { useState } from 'react';
import './InstadamsCard.css';
import { CiMenuKebab} from 'react-icons/ci';
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import {FiSend} from "react-icons/fi";

const InstadamsCard = (props) => {

return ( 
    <div className="card" style={{
        backgroundColor:props.backgroundColor,
        width:props.width,
        height:props.height,
        color:props.color
    }}>
    <div className='child_nth1'>
        <div className='child_child_nth1'>
            <div className="account"></div>
            <div className="user_profil">{props.username}</div>
        </div>
        <div className="option_menu"><CiMenuKebab/></div>
    </div>
    <img className="filePrev" src={props.filePrev} name="image" onChange={props.handleChange}></img>
    <div className='properties_card'>
        <AiOutlineHeart/>
        <TbMessageCircle2/>
        <FiSend/>
    </div>
    <div className='nb_like'>
        108 j'aimes
    </div>
    <div className="comment">
        <b>{props.username}</b>{props.text}
    </div>
    <div className="hashtag">
        <p>#{props.hashtag}</p>
    </div>
</div>
)
}
export default InstadamsCard;