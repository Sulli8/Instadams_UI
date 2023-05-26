import {
    BrowserRouter,
    Routes,
    Route,useNavigate
} from 'react-router-dom';
import {useState} from "react"
import "./Menu.css"
import SearchUser from '../SearchUser/SearchUser';
function Menu() {
    const navigate = useNavigate();
    const [showSearchBar,setShowSearchBar] = useState("none")
    return (
        <>
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
                    <a  onClick={() => {
                        setShowSearchBar('block')
                    }}>
                        <span className="material-symbols-outlined">
                        search
                        </span>
                        <h3>Rechercher</h3>
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
        <SearchUser showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></SearchUser>
        </>
    )
}
export default Menu