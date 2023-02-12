
import "./Modal.css"
function Modal(props) {
    return (
        <section style={{ display: props.valueState }} className="modal">
            <section className="formHead">
                <div className="boxHead">
                    <h1 className="title">Sign In</h1>
                    <button className="onclose" onClick={() => {
                        props.setStatutModal('none')
                    }
                    }>X</button>
                </div>
                <form className="formSign">
                    <div className="boxInput">
                        <label>Email</label>
                        <input type="text"></input>
                    </div>
                    <div className="boxInput">
                        <label>Password</label>
                        <input type="text"></input>
                    </div>
                    <div className="boxInput">
                        <label>Name</label>
                        <input type="text"></input>
                    </div>
                    <div className="boxInput">
                        <label>FirstName</label>
                        <input type="text"></input>
                    </div>

                    <div className="boxBtnAccount">
                        <button>Create an account</button>
                    </div>
                </form>
            </section>
        </section>


    )
}
export default Modal