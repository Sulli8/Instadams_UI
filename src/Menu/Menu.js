import {
    BrowserRouter,
    Routes,
    Route, useNavigate
} from 'react-router-dom';
import "./Menu.css"
function Menu() {
    const navigate = useNavigate();
    return (
        <div className="containerMenu">
            <aside>
                <div className="top">
                    <div className="logo">
                        <h2>Instadams</h2>
                    </div>
                    <div className="close" id="close-data"></div>
                </div>
                <div className="sidebar">
                    <a onClick={() => {
                        navigate("/home")
                    }} >
                        <span className="material-symbols-outlined">
                            home
                        </span>
                        <h3>Accueil</h3>
                    </a>

                    <a onClick={() => {
                        navigate("/profil")
                    }}>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <h3>Profil</h3>
                    </a>


                    <a onClick={() => {
                        navigate("/createPost")
                    }}>
                        <span className="material-symbols-outlined">
                            share_reviews
                        </span>
                        <h3>Créer Post</h3>
                    </a>


                    <a onClick={() => {
                        navigate("/messages")
                    }}>
                        <span className="material-symbols-outlined">
                            mail_lock
                        </span>
                        <h3>Messages</h3>
                    </a>

                    <a onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = "/"
                    }}>
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                        <h3>Déconnexion</h3>
                    </a>
                </div>
            </aside>
        </div>
    )
}
export default Menu