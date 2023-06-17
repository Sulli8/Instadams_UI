import { useEffect, useReducer, useState } from 'react';
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
import  useApiRequest  from '../Hooks/useApiRequest/useApiRequest';

const  Page = (props) => {
 
  const [child,setChild] = useState(<Home></Home>)
  const [followings,setFollowings] = useState([])
  const [followers,setFollowers] = useState([])
  const [data_details,setDataDetails] = useState({
    profil:""
  })
  const [modal_following,setModalFollowing] = useState('none')
  const [idUserFollowing,setIdUserFollowing] = useState(0)
  /*const [{status,response},makeRequest] =  useApiRequest('http://localhost:3001/api/post_profile',{
          verb:'post',params:{username:user_name}});*/
  let follower;
  const setModalUnFollow = (string) => {
    setModalFollowing('flex')
  }
  const setCloseModale = () => {
    setModalFollowing('none')
  }
  const setUnFollow = (id) => {
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
          setChild(<Profil buttonChange={<ButtonFollower setFollow={setFollow} id_user={idUserFollowing}></ButtonFollower>} followers={followers} followings={followings} post_profil={data_details.profil}></Profil>)
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
          setChild(<Profil buttonChange={<ButtonFollowing setModalUnFollow={setModalUnFollow}></ButtonFollowing>} followers={followers} followings={followings} post_profil={data_details.profil}></Profil>)
      })
    }
  }
  const search_user = async (user_name,string,id_user) => {
    const response_profile = await Axios({
      url:'http://localhost:3001/api/post_profile',
      method:'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      data: {
        username:user_name
      }
    })

    let user_array = {
      getIdUser:id_user
    }
    const response_followings = await Axios.post('http://localhost:3001/api/users/followings',user_array,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })

    const response_followers = await Axios.post('http://localhost:3001/api/users/followers',user_array,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
    console.log(response_followers.data)

    if(response_profile.status == 200 && response_followings.status == 200){
      setDataDetails({
        ...data_details,
        profil:response_profile.data.profil,
        followings:response_followings.data.followings,
        followers:response_followers.data.followers
      })
    }
  //  setChild(<Profil id_user={id_user} buttonChange={button} followers={followers} followings={followings} post_profil={response.data.profil}></Profil>)
   /* get_followings({getIdUser:id_user})
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
          
      })
    }*/
  }

  useEffect(  ()=> {
    const getProfil = async ()=> {
      if(localStorage.getItem('token')){

        let response = await Axios.post('http://localhost:3001/api/post_profile', {},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          })


          if(response.status == 200){
            localStorage.setItem('user_main',response.data.profil[0].username)
            setDataDetails(profil => ({
              ...profil,
              profil:response.data.profil,
            }))
          }
            
            /* setPostProfil(post_profil => ({
              ...post_profil,
              post_profil:response.data.profil,
            }))
          get_followings()
          get_followers()*/
      }
    }
    getProfil()
   
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
          setChild(<Profil buttonChange={<ButtonEditProfil></ButtonEditProfil>} followers={followers} followings={followings} post_profil={data_details.profil}></Profil>)
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
      <Menu  profil={data_details.profil} followings={followings} search_user={search_user} setPage={setPage}></Menu>
      {child}
    </section>
  );
  }



export default Page;