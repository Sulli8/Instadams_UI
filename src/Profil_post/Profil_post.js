import './Profil_post.css';
import { useEffect, useState } from 'react';
import Axios from 'axios'
function Profil_post(props) {
  const [post_profil,setPostProfil] = useState([])
  useEffect(()=> {
      Axios.post('http://localhost:3001/api/post_profile',{
        username : props.user_name
       }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        })
          .then(function (response) {
            console.log("Profil Post :",response.data.profil[0].Posts)
            setPostProfil(response.data.profil[0].Posts)
        })
  },[])

  let repart_feed = []
  let matrice = [];
  
  let copied = post_profil
  let cpt = 0
  for (let i = -1; i < copied.length; i++) {
    matrice.push(copied[i])
    if(cpt % 3 == 0 ){
      matrice = []
      repart_feed.push(matrice) 
    }
    cpt+=1
  }
  return (
    <>
    <div className="navbar_post">
        <button className="btn_nav_account">Publication</button>
        <button className="btn_nav_account">Archive</button>
    </div>
    <div>
    <main className="main_post_user">
    {repart_feed.map((feed,i) => {
      return <div key={i} className="row_post_user">
       {feed.map((post,j) => {
        return <div key={j} style={{backgroundImage:`url(${post.url})`}} className="column_post_user"> </div>
       })
       } 
      </div>
    })}
    </main>
    </div>
   
  
 
    </>

  );
}

export default Profil_post;