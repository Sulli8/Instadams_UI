  import './Profil.css';
  import Menu from '../Menu/Menu';
  import Profil_nth_first from '../Profil_nth_first/Profil_nth_first';
  import Profil_post from '../Profil_post/Profil_post';
  import { useEffect, useState } from 'react';
  import Axios from 'axios'
  import {
    BrowserRouter,
    Routes,
    Route,useNavigate,useParams, useLocation
  } from 'react-router-dom';
  function Profil(props) {
    const [post_profil,setPostProfil] = useState([])
    const { user_name } = useParams()
    const {state} = useLocation()
 
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
    const setAppel = () => {
      Axios.post('http://localhost:3001/api/post_profile',{
        username : user_name
      }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        })
          .then(function (response) {
            console.log(response.data.profil[0].Posts)
            setPostProfil(response.data.profil[0].Posts)
        })
    }
    /*useEffect(()=> {
      
      if(state){
        setPostProfil(state)
      } else {
        Axios.post('http://localhost:3001/api/post_profile',{
          username : user_name
        }, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          })
            .then(function (response) {
              setPostProfil(response.data.profil[0].Posts)
          })
      }
    },[])*/
    return (

      <div className="profil_body">
        <Menu setAppel={setAppel}></Menu>
        <div className='main_profil'>
          <Profil_nth_first></Profil_nth_first>
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
    
    
  
        </div>
      </div>

    );
  }

  export default Profil;