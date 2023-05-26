import './Profil.css';
import Menu from '../Menu/Menu';
import Profil_nth_first from '../Profil_nth_first/Profil_nth_first';
import Profil_post from '../Profil_post/Profil_post';
function Profil(props) {

  return (

    <div className="profil_body">
      <Menu></Menu>
      <div className='main_profil'>
        <Profil_nth_first></Profil_nth_first>
        <Profil_post></Profil_post>
      </div>
    </div>

  );
}

export default Profil;