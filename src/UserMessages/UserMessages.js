import '../UserMessages/UserMessages'
import './UserMessages.css'
function userMessages(props) {
    return (
       <> 
       {
            props.messages.map((message,i) => <div key={i} className="userMessages">
                <div className="boxContentMessagesDescription">
                    <div className="profilMessages"></div>
                    <div>
                        <div className="userMessagesSend">@Usain_bolt</div>
                        <div className="messagesDescription">Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
                <div>
                </div>
            </div>)
        }
        </>
    );
}



export default userMessages