import './SuggestionProfile.css';


function SuggestionProfile(props) {

  return (
    <div className="SuggestionProfile">
      <div className="suggestion">
        <div className="suggestionPourVous">Suggestion Pour vous </div>
        <div className="voirTout">Voir tout</div>
      </div>
      {props.suggestionProfile.map((profil,i) => <div key={i} className="go_to_following">
        <div style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundImage: `url(${profil.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div>
          <p className="suggestionProfilFirstname">{profil.username}</p>
          <p className="suggestionProfilFollowing">Suivi(e) par {profil.goToFollowing}</p>
        </div>
        <div>
          <button className="followers">Suivre</button>
        </div>
      </div>)
      }
    </div>
  );
}

export default SuggestionProfile;