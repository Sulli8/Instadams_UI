import './Messages.css';
import UserMessages from '../UserMessages/UserMessages';
import SendBox from '../SendBox/SendBox';
import Menu from '../Menu/Menu';
function Messages(props) {
    const messages = [
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },
        {
            id: 1,
            content: "",
            created_at: "",
            updated_at: "",
            conversation_id: "",
            receiver_id: "",
            emmiter_id: ""
        },


    ]
    return (
        <>
            <div className="containerMesssages">
                <Menu></Menu>
                <div className="box_messages">
                    <div className="messageSending">
                        <UserMessages messages={messages}></UserMessages>
                    </div>
                    <div className="containMessageToSend">
                    <SendBox></SendBox>
                    </div>
                    
                </div>
                <div className="box_ghost">

                </div>
            </div>


        </>
    );
}

export default Messages;