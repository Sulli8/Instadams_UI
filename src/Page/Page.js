import { useEffect, useState } from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import CreatePost from '../CreatePost/CreatePost';
import Messages from '../Messages/Messages';
import Auth from '../Auth/Auth';
import Profil from '../Profil/Profil';
import Axios from 'axios'
function Page(props) {
  const [child,setChild] = useState(<Home></Home>)
  const [userByDefault,setUserByDefault] = useState([])
  const [followings,setFollowings] = useState([])
  const [followers,setFollowers] = useState([])
  const search_user = (user_name) => {
    if(localStorage.getItem('token')){
      Axios.post('http://localhost:3001/api/post_profile', {
        username:user_name
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then(function (response) {
          setChild(<Profil followers={followers} followings={followings} post_profil={response.data.profil}></Profil>)
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
              setUserByDefault(response.data.profil)
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
          console.log('Home')
          setChild(<Home></Home>)
          break
        case "create_post":
          console.log('CreatePost')
          setChild(<CreatePost></CreatePost>)
          break
        case "profil":
          setChild(<Profil followers={followers} followings={followings} post_profil={userByDefault}></Profil>)
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
      <Menu search_user={search_user} setPage={setPage}></Menu>
      {child}
    </section>
  );
  }



export default Page;