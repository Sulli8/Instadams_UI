      import './Profil.css';
    
      import { useState } from 'react';
      function Profil(props) {
        console.log(props.post_profil)
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
                    <button className="button_profil" onClick={
                      ()=> {
                        setProfilNthFirst('none')
                        setProfilNthSecond('flex')
                      }
                    }>Modifier Profil</button>
                    <button>Suivre</button>
                  </div>
                  <div className='stats'>
                    <p><b>{props.post_profil[0].Posts.length}</b> Publication</p>
                      <p><b>0</b> Abonnement</p>
                      <p><b>0</b> Suivi(e)s</p>
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