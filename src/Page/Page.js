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

  const search_user = (user_name) => {
    console.log(user_name)
    Axios.post('http://localhost:3001/api/post_profile', {
      username:user_name
    },{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(function (response) {
        setChild(<Profil post_profil={response.data.profil}></Profil>)
    })
  }
  useEffect(()=> {
    Axios.post('http://localhost:3001/api/post_profile', {},{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then(function (response) {
          setUserByDefault(response.data.profil)
          
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
          setChild(<Profil post_profil={userByDefault}></Profil>)
          break
        case "messages":
          setChild(<Messages></Messages>)
          break
      }
    } else {
      setChild(<Auth></Auth>)
    }
    console.log("Page Name  : ",page_name)
  }
  return (
    <section className="child_page">
    <Menu search_user={search_user} setPage={setPage}></Menu>
      {child}
    </section>
  );
  }
 


export default Page;