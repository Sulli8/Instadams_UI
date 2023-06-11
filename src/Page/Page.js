import { useEffect, useState } from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import CreatePost from '../CreatePost/CreatePost';
import Messages from '../Messages/Messages';
import Auth from '../Auth/Auth';
import Profil from '../Profil/Profil';
import Axios from 'axios'
import ButtonFollowing from '../ButtonFollowing/ButtonFollowing';
import ButtonFollower from '../ButtonFollower/ButtonFollower';
import ButtonEditProfil from '../ButtonEditProfil/ButtonEditProfil';
import ModalFollowing from '../ModalFollowing/ModalFollowing';
import { Modal } from 'bootstrap';
function Page(props) {
  const [child,setChild] = useState(<Home></Home>)
  const [followings,setFollowings] = useState([])
  const [followers,setFollowers] = useState([])
  const [post_profil,setPostProfil] = useState([])
  const [modal_following,setModalFollowing] = useState('none')
  const [idUserFollowing,setIdUserFollowing] = useState(0)
  const setModalUnFollow = (string) => {
    setModalFollowing('flex')
  }

  const setCloseModale = () => {
    setModalFollowing('none')
  }
  const setUnFollow = (id) => {
    console.log("UNFOLLOW")
    if(localStorage.getItem('token')){
      Axios.delete('http://localhost:3001/api/users/unfollow/'+idUserFollowing,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then(function (response) {
          if(response.data.message == "Désabonnement réussi avec succès"){
            setFollowings(followings => followings.filter(res => {
              if(res != id){
                return res
              }
            }))
          
          setCloseModale()
          setChild(<Profil buttonChange={<ButtonFollower setFollow={setFollow} id_user={idUserFollowing}></ButtonFollower>} followers={followers} followings={followings} post_profil={post_profil}></Profil>)
          }
      })
    }
  }
  const setFollow = (id) => {
    if(localStorage.getItem('token')){
      Axios.post('http://localhost:3001/api/users/follow/'+id, {
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then(function (response) {
          setFollowings(followings => [...followings,id])
          console.log("POST PROFILE ",post_profil)
          setChild(<Profil buttonChange={<ButtonFollowing setModalUnFollow={setModalUnFollow}></ButtonFollowing>} followers={followers} followings={followings} post_profil={post_profil}></Profil>)
      })
    }
  }

  const search_user = (user_name,string,id_user) => {
    if(localStorage.getItem('token')){
      Axios.post('http://localhost:3001/api/post_profile', {
        username:user_name
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then(function (response) {
          setIdUserFollowing(id_user)
          setPostProfil(response.data.profil)
          let button;
          if(string == "follower"){
            button = <ButtonFollower setFollow={setFollow} id_user={id_user}></ButtonFollower>
          }
          if(string == "following"){
            button = <ButtonFollowing setModalUnFollow={setModalUnFollow}></ButtonFollowing>
          } 
          if(string == "edit"){
            button = <ButtonEditProfil></ButtonEditProfil>
          }
          setChild(<Profil buttonChange={button} followers={followers} followings={followings} post_profil={response.data.profil}></Profil>)
      })
    }

  }
  useEffect(()=> {
    if(localStorage.getItem('token')){
        Axios.post('http://localhost:3001/api/post_profile', {},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          })
            .then(function (response) {
              localStorage.setItem('user_main',response.data.profil[0].username)
              setPostProfil(response.data.profil)
          })
        }
        Axios.get('http://localhost:3001/api/users/followings',{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        })
          .then(function (response) {
            setFollowings(response.data.data)
        })


        Axios.get('http://localhost:3001/api/users/followers',{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        })
          .then(function (response) {
            setFollowers(response.data.data)
            console.log("Followers :",response.data.data)
        })
  },[])
  const setPage = (page_name) => {
    if(localStorage.getItem('token')){
      switch(page_name){
        case "home":
          setChild(<Home></Home>)
          break
        case "create_post":
          setChild(<CreatePost></CreatePost>)
          break
        case "profil":
          setChild(<Profil buttonChange={<ButtonEditProfil></ButtonEditProfil>} followers={followers} followings={followings} post_profil={post_profil}></Profil>)
          break
        case "messages":
          setChild(<Messages></Messages>)
          break
      }
    } else {
      setChild(<Auth></Auth>)
    }
  }

  return (
    <section className="child_page">
      <ModalFollowing setUnFollow={setUnFollow} setCloseModale={setCloseModale} modal_following={modal_following}></ModalFollowing>
      <Menu post_profil={post_profil} followings={followings} search_user={search_user} setPage={setPage}></Menu>
      {child}
    </section>
  );
  }



export default Page;