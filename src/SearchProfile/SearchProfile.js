import './SearchProfile.css';


function SearchProfile(props) {

  return (
    <div className="searchProfile">
     { props.user.map(data =><div key={data.id}> <div  style={{
        backgroundImage: `url(${data.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
        
        className="profile"></div><div className="informationUser">
          <p className="usernameData">{data.username}</p>
          <p className="nameData">{data.name}</p>
        </div><div className="buttonBascule">Basculer</div>
        </div> 
      )}
    </div>
  );
}

export default SearchProfile;