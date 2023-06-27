import Axios from 'axios';
import { useEffect, useState } from 'react';
import Auth from '../Auth/Auth';
import ButtonEditProfil from '../ButtonEditProfil/ButtonEditProfil';
import ButtonFollower from '../ButtonFollower/ButtonFollower';
import ButtonFollowing from '../ButtonFollowing/ButtonFollowing';
import CreatePost from '../CreatePost/CreatePost';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Messages from '../Messages/Messages';
import Profil from '../Profil/Profil';
import SearchUser from '../SearchUser/SearchUser';
import MenuEditProfil from "../MenuEditProfil/MenuEditProfil";
import './Page.css';

const  Page = (props) => {
  const [child,setChild] = useState(<Home></Home>)
  const [followings,setFollowings] = useState([])
  const [followers,setFollowers] = useState([])
  const [post_profil,setPostProfile] = useState()
  const [styleProfilNthFirst,setProfilNthFirst] = useState('flex')
  const [styleProfilNthSecond,setProfilNthSecond] = useState('none')
  let data_details_refresh;
  const [showSearchBar,setShowSearchBar] = useState("none")
  const [data_details,setDataDetails] = useState({
    profil:[],
    followings:[],
    followers:[]
  })
  const setSearch = (username,type,id) => {
    search_user(username,type,id)
  }
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
  const setUnFollow = async(id_user,user_name) => {
    if(localStorage.getItem('token')){
      const response_profile = await Axios({
        url:'http://localhost:3001/api/post_profile',
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Security-Policy': 'script-src-attr "self";'
        },
        data: {
          username:user_name
        }
      })
      
  
      let user_array = {
        getIdUser:id_user
      }

      const response_delete = Axios.delete('http://localhost:3001/api/users/unfollow/'+id_user,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Content-Security-Policy": "script-src-attr 'self';"
        }
      })
    
    
      const response_followings = await Axios.post('http://localhost:3001/api/users/followings',user_array,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Content-Security-Policy": "script-src-attr 'self';"
        }
      })
  
      const response_followers = await Axios.post('http://localhost:3001/api/users/followers',user_array,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Content-Security-Policy": "script-src-attr 'self';"
        }
      })
      console.log("CALL : ",response_followers)
      if(response_profile.status == 200 
        && response_followers.status == 200 && 
        response_followings.status == 200){
      
   
        response_followers.data.followers.filter(res => {
          if(res.userId != response_profile.data.profil[0].id){
            return res
          }
        })
        data_details_refresh = {
          profil:response_profile.data.profil,
          followings:response_followings.data.followings,
          followers:response_followers.data.followers,
         
        }
        /*setFollowings(
          data_details.followings.filter(res => {
            if(res != id_user){
              return res
            }
          }))*/
        
      }
     setChild(<Profil setChild={setChild} setProfilNthSecond={setProfilNthSecond} styleProfilNthFirst={styleProfilNthFirst} setProfilNthFirst={setProfilNthFirst} styleProfilNthSecond={styleProfilNthSecond} user_name={user_name} id_user={id_user}  button_state={<ButtonFollower user_name={user_name} setFollow={setFollow} id_user={id_user}></ButtonFollower>} profil={data_details_refresh.profil} followings={data_details_refresh.followings} followers={data_details_refresh.followers}></Profil>)
        
    }
  }
  const setFollow = async (id_user,user_name) => {
    console.log("follow :::::: ",user_name,id_user)
    if(localStorage.getItem('token')){

      const response_follow = await Axios.post('http://localhost:3001/api/users/follow/'+id_user,{},{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Content-Security-Policy": "script-src-attr 'self';"
        }
      })

      if(response_follow.status == 200){
        const response_profile = await Axios({
          url:'http://localhost:3001/api/post_profile',
          method:'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Security-Policy": "script-src-attr 'self';"
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
            "Content-Security-Policy": "script-src-attr 'self';"
          }
        })
    
        const response_followers = await Axios.post('http://localhost:3001/api/users/followers',user_array,{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Security-Policy": "script-src-attr 'self';"
          }
        })
   
        if(response_profile.status == 200 && response_followers.status == 200 && response_followings.status == 200){
          console.log("API CALL : ",response_followings.data.followings,response_followers.data.followers,response_profile.data.profil)
          response_followers.data.followers.push(response_profile.data.profil)
          data_details_refresh = {
            profil:response_profile.data.profil,
            followings:response_followings.data.followings,
            followers:response_followers.data.followers,
           
          }
          setFollowings( [...data_details.followings,id_user])
          setChild(<Profil user_name={user_name} id_user={id_user}  button_state={<ButtonFollowing user_name={user_name} setUnFollow={setUnFollow} id_user={id_user}></ButtonFollowing>} profil={data_details_refresh.profil} followings={data_details_refresh.followings} followers={data_details_refresh.followers}></Profil>)
        }
      }
    }
  }
  const search_user = async (user_name,string,id_user) => {
    let button;
    if(string == "follower"){
      button = <ButtonFollower  user_name={user_name} setFollow={setFollow} id_user={id_user}></ButtonFollower>
    }
    if(string == "following"){
      button = <ButtonFollowing user_name={user_name} setUnFollow={setUnFollow} id_user={id_user}></ButtonFollowing>
    } 
    if(string == "edit"){
      button = <ButtonEditProfil  setChild={setChild} ></ButtonEditProfil>
    }
    const response_profile = await Axios({
      url:'http://localhost:3001/api/post_profile',
      method:'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Security-Policy": "script-src-attr 'self';"
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
        "Content-Security-Policy": "script-src-attr 'self';"
      }
    })

    const response_followers = await Axios.post('http://localhost:3001/api/users/followers',user_array,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Security-Policy": "script-src-attr 'self';"
      }
    })
    if(response_profile.status == 200 && response_followers.status == 200 && response_followings.status == 200){
    
      data_details_refresh = {
        profil:response_profile.data.profil,
        followings:response_followings.data.followings,
        followers:response_followers.data.followers,
        button:button
      }
      console.log(data_details_refresh)
      setChild(<Profil user_name={user_name} id_user={id_user}  button_state={button} profil={data_details_refresh.profil} followings={data_details_refresh.followings} followers={data_details_refresh.followers}></Profil>)
    }
    

  }
  useEffect(  ()=> {
    const getProfil = async ()=> {
      console.log('APPPELL REINITIALISATION')
      if(localStorage.getItem('token')){

          let response = await Axios.post('http://localhost:3001/api/post_profile', {},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              "Content-Security-Policy": "script-src-attr 'self';"
            }
          })
          const response_followings = await Axios.post('http://localhost:3001/api/users/followings',{},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              "Content-Security-Policy": "script-src-attr 'self';"
            }
          })
      
          const response_followers = await Axios.post('http://localhost:3001/api/users/followers',{},{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              "Content-Security-Policy": "script-src-attr 'self';"
            }
          })

      

          if(response.status == 200){
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
          setChild(<CreatePost setChild={setChild}></CreatePost>)
          break
        case "profil":
          setChild(<Profil user_name={localStorage.getItem('user_main')} button_state={<ButtonEditProfil  setChild={setChild}></ButtonEditProfil>} profil={data_details.profil} followers={data_details.followers} followings={data_details.followings}></Profil>)
          break
        case "messages":
          setChild(<Messages></Messages>)
          break
        default:
          setChild(<Home></Home>)
      }
    } else {
      setChild(<Auth></Auth>)
    }
  }

  return (
    <section className="child_page">
      <Menu setShowSearchBar={setShowSearchBar} profil={data_details.profil} followings={data_details.followings} followers={data_details.followers} search_user={search_user} setPage={setPage}></Menu>
      <SearchUser followings={data_details.followings}  setBtnChange={props.setBtnChange} search_user={setSearch} showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}></SearchUser>
      {child}
    </section>
  );
}

export default Page;