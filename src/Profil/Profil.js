      import './Profil.css';
      import Axios from 'axios';
      import { useEffect, useState } from 'react';
   
      const Profil = (props) => {
        let repart_feed = []
        let matrice = [];
        let copied = props.post_profil[0].Posts
        let cpt = 0
        for (let i = -1; i < copied.length; i++) {
          matrice.push(copied[i])
          if(cpt % 3 == 0 ){
            matrice = []
            repart_feed.push(matrice) 
          }
          cpt+=1
        }
        let buttonFollowing_Edit_account;
        let filter_following =  props.followings.map(res => {return res.followedId})
        const [btn_follower_following,setBtnFollowerFollowing] = useState();
        const follow = (id) => {
          if(localStorage.getItem('token')){
            Axios.post('http://localhost:3001/api/users/follow/'+id, {
            },{
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
              }
            })
              .then(function (response) {
                filter_following.push(id)
                buttonFollowing_Edit_account = btn_following()
            })
          }
        }
      
       
        const btn_edit_account = () => {
          return <button className="button_profil" onClick={
            ()=> {
              setProfilNthFirst('none')
              setProfilNthSecond('flex')
            }
          }>Modifier Profil</button>
        }

        const btn_followers = () => {
          return <button className="follower_btn" onClick={()=> {
            follow(props.post_profil[0].id)
          }}>Suivre</button>
        }

        const btn_following = () => {
          return <button className="following_btn" onClick={()=> {
            //  unfollow(props.post_profil[0].id)
            }}>Suivi(e)</button>
        }

        if(localStorage.getItem('user_main') != props.post_profil[0].username){
          if(filter_following.includes(props.post_profil[0].id)){
            console.log(props.post_profil[0].id)
            buttonFollowing_Edit_account = btn_following()
          } else {
            buttonFollowing_Edit_account = btn_followers()
          }
        } else {
          buttonFollowing_Edit_account = btn_edit_account()    
        }
        const [styleProfilNthFirst,setProfilNthFirst] = useState('flex')
        const [styleProfilNthSecond,setProfilNthSecond] = useState('none')
        return (
        <>
          <div className="profil_body" style={{display:styleProfilNthFirst}}>
            <div className='main_profil' >
            <div className="profil_nth_first">
              <div className="box_statistics">
                <div className="round_circle"></div>
                <div className="profil_param">
                  <div className="box_user_name">
                    <div className="user_name">{props.post_profil[0].username}</div>
                    {buttonFollowing_Edit_account}  
                    <button className="contact_btn">Contacter</button>  
                  </div>
                  <div className='stats'>
                    <p><b>{props.post_profil[0].Posts.length}</b> Publication</p>
                      <p><b>{filter_following.length}</b> Abonnement</p>
                      <p><b>{props.followers.length}</b> Suivi(e)s</p>
                  </div>
                </div>   
                </div>
              </div>
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
          <div className="edit_account" style={{display:styleProfilNthSecond}}>
          <div>
            <button type='button' onClick={()=> {
               setProfilNthFirst('flex')
               setProfilNthSecond('none')
            }}>
             Retour 
            </button>
            <h1>Modification</h1>
          </div>
         
          </div>
          </>

        );
      }

      export default Profil;