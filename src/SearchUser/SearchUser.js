import './SearchUser.css'
import {useState,useEffect} from "react"
import Axios from 'axios'
import {
  BrowserRouter,
  Routes,
  Route,useNavigate
} from 'react-router-dom';
const SearchUser = (props) =>{
    const navigate = useNavigate()
    const [datas,setDatas] = useState([])
    const [searchTerm,setSearchTerm] = useState([])
    useEffect(()=> {
      if(localStorage.getItem('token')){
        Axios.get('http://localhost:3001/api/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(function (response) {
            setDatas(response.data.response)
        })
      }
      }, [])
      const handleSearchTerm = (e) => {
        let value = e.target.value
        setSearchTerm(value)
      }
    let search = datas.filter(val => {
        return val.username.toLowerCase().includes(searchTerm)
    })
    return (
         <aside style={{display:props.showSearchBar}}  className="header">
            <div className="header_icon">
                <h2>Rechercher</h2>
                <span className="material-symbols-outlined" onClick={()=> {props.setShowSearchBar('none')}}>close</span>
            </div>
            <input className="rechercher" type="text" placeholder="Rechercher" onChange={handleSearchTerm}></input>
            <div className="lineBar"></div>
            <div className="search_results">
              {
                search.map(val => {
                    return <div onClick={(e) => {
                      props.search_user(val.username)
                    }} className="search_result" key={val.id}>{val.username}</div>
                })
              }
            </div>
        </aside>
    )
}

export default SearchUser