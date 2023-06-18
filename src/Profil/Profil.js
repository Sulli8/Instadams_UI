        import './Profil.css';
        import Axios from 'axios';
        import { useDebugValue, useEffect, useState } from 'react';
        import ButtonEditProfil from '../ButtonEditProfil/ButtonEditProfil';
        import ButtonFollower from '../ButtonFollower/ButtonFollower';
      
        const Profil = (props) => {
          let repart_feed = []
          let matrice = [];
        
          let copied = props.profil[0].Posts
          let cpt = 0
          for (let i = -1; i < copied.length; i++) {
            matrice.push(copied[i])
            if(cpt % 3 == 0 ){
              matrice = []
              repart_feed.push(matrice) 
            }
            cpt+=1
          }
          const edit_account = () => {
            props.edit_account('flex','none')
          }

          return (
          <>
            <div className="profil_body">
              <div className='main_profil' >
              <div className="profil_nth_first">
                <div className="box_statistics">
                  <div className="round_circle"></div>
                  <div className="profil_param">
                    <div className="box_user_name">
                      <div className="user_name">{props.profil[0].username}</div>
                      {props.button_state}
                      <button className="contact_btn">Contacter</button>  
                    </div>
                    <div className='stats'>
                      <p><b>{copied.length}</b> Publication</p>
                        <p><b>{props.followers.length}</b> Abonné(e)s</p>
                        <p><b>{props.followings.length}</b> Suivi(e)s</p>
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
          
            </>

          );
        }
        export default Profil;
