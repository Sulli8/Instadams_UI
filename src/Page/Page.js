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

const  Page = (props) => {
  const [child,setChild] = useState(<Home></Home>)
  const [followings,setFollowings] = useState([])
  const [followers,setFollowers] = useState([])
  const [post_profil,setPostProfile] = useState()
  let data_details_refresh;
  const [data_details,setDataDetails] = useState({
    profil:[],
    followings:[],
    followers:[]
  })
  const [modal_following,setModalFollowing] = useState('none')
  const [idUserFollowing,setIdUserFollowing] = useState(0)
  /*const [{status,response},makeRequest] =  useApiRequest('http://localhost:3001/api/post_profile',{
          verb:'post',params:{username:user_name}});*/
  const setModalUnFollow = (string) => {
    setModalFollowing('flex')
  }
  const setCloseModale = () => {
    setModalFollowing('none')
  }
  const setUnFollow = async(id) => {
  console.log("unfollow :::::: ",id)
    if(localStorage.getItem('token')){
      const response_profile = await Axios({
        url:'http://localhost:3001/api/post_profile',
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        data: {
          id_user :id
        }
      })


      const response_delete = Axios.delete('http://localhost:3001/api/users/unfollow/'+id,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })

      if(response_delete.status == 200){
        setFollowings(
          data_details.followings.filter(res => {
            if(res != id){
              return res
            }
          }))
          let stats = {
            profil:data_details.profil,
            followings:followings,
            followers:followers,
          }
          setChild(<Profil buttonChange={<ButtonFollower setFollow={setFollow} id_user={idUserFollowing}></ButtonFollower>}  followers={stats.followers} followings={stats.followings}></Profil>)
      }
    }
  }
  const setFollow = async (id) => {
    console.log("follow :::::: ",id)
    if(localStorage.getItem('token')){
      const response_profile = await Axios({
        url:'http://localhost:3001/api/post_profile',
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        data: {
          id_user :id
        }
      })

      const response_follow = await Axios.post('http://localhost:3001/api/users/follow/'+id, {
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })

      setFollowings( [...data_details.followings,id])
      console.log(followings)
      let data_details_refresh = {
        profil:data_details.profil,
        followings:followings,
        followers:followers,
      }
    }
  }
  const search_user = async (user_name,string,id_user) => {
    console.log('APPPELL SEARCH REINIT',string,user_name,id_user)
    let button;
    if(string == "follower"){
      button = <ButtonFollower setFollow={setFollow} id_user={id_user}></ButtonFollower>
    }
    if(string == "following"){
      button = <ButtonFollowing setUnFollow={setUnFollow} id_user={id_user}></ButtonFollowing>
    } 
    if(string == "edit"){
      button = <ButtonEditProfil></ButtonEditProfil>
    }
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
     
      data_details_refresh = {
        profil:response_profile.data.profil,
        followings:response_followings.data.followings,
        followers:response_followers.data.followers,
        button:button
      }
    }
    setChild(<Profil id_user={id_user} buttonChange={button} profil={data_details_refresh.profil} followings={data_details_refresh.followings} followers={data_details_refresh.followers} ></Profil>)

  }
  useEffect(  ()=> {
    const getProfil = async ()=> {
      console.log('APPPELL REINITIALISATION')
      if(localStorage.getItem('token')){

          let response = await Axios.post('http://localhost:3001/api/post_profile', {},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          })
          const response_followings = await Axios.post('http://localhost:3001/api/users/followings',{},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          })
      
          const response_followers = await Axios.post('http://localhost:3001/api/users/followers',{},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          })

          if(response.status == 200 && response_followings.status == 200 && response_followers.status == 200){
            localStorage.setItem('user_main',response.data.profil[0].username)
            setDataDetails({
              ...data_details,
              profil:response.data.profil,
              followers:response_followers.data.followers,
              followings:response_followings.data.followings
            })
            console.log("Data_details : ",data_details)
          }
      }
    }
    getProfil()
   console.log("DATATATA : ",data_details)
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
          setChild(<Profil buttonChange={<ButtonEditProfil></ButtonEditProfil>} profil={data_details.profil} followers={data_details.followers} followings={data_details.followings}></Profil>)
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
      <Menu profil={data_details.profil} followings={data_details.followings} followers={data_details.followers} search_user={search_user} setPage={setPage}></Menu>
      {child}
    </section>
  );
}

export default Page;