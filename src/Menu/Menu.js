import {
    BrowserRouter,
    Routes,
    Route,useNavigate
} from 'react-router-dom';
import {useState,useEffect} from "react"
import "./Menu.css"
import Axios from 'axios';
import SearchUser from '../SearchUser/SearchUser';
function Menu(props) {
    const navigate = useNavigate();
    const [showSearchBar,setShowSearchBar] = useState("none")
    const [name,setName] = useState('none')
    useEffect(
        () => {
            Axios.get('http://localhost:3001/api/user', {
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(function (response) {
                    setName(response.data.response.username)
            })
        },[])
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
                        props.setPage("home")
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
                        props.setPage("profil")
                    }}>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <h3>Profil</h3>
                    </a>


                    <a onClick={() => {
                        props.setPage("create_post")
                    }}>
                        <span className="material-symbols-outlined">
                            share_reviews
                        </span>
                        <h3>Créer Post</h3>
                    </a>


                    <a onClick={() => {
                        props.setPage("messages")
                    }}>
                        <span className="material-symbols-outlined">
                            mail_lock
                        </span>
                        <h3>Messages</h3>
                    </a>

                    <a onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload()
                    }}>
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                        <h3>Déconnexion</h3>
                    </a>
                </div>
            </aside>
        </div>
        <SearchUser search_user={props.search_user} showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></SearchUser>
        </>
    )
}
export default Menu