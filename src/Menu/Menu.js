
import "./Menu.css"
function Menu() {
    return (
        <div className="container">
            <aside>
                <div className="top">
                    <div className="logo">
                        <h2>Instadams</h2>
                    </div>
                    <div className="close" id="close-data"></div>
                </div>
                <div className="sidebar">
                    <a >
                        <span className="material-symbols-outlined">
                            home
                        </span>
                        <h3>Accueil</h3>
                    </a>

                    <a>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <h3>Profil</h3>
                    </a>


                    <a >
                        <span className="material-symbols-outlined">
                            share_reviews
                        </span>
                        <h3>Créer Post</h3>
                    </a>


                    <a >
                        <span className="material-symbols-outlined">
                            mail_lock
                        </span>
                        <h3>Messages</h3>
                    </a>

                    <a >
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