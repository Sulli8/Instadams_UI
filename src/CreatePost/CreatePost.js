import './CreatePost.css';
import Menu from '../Menu/Menu';
import ModalCreatePost from '../ModalCreatePost/ModalCreatePost';
function CreatePost(props) {

  return (
    <div className="containerModalCreatePost">
      <Menu></Menu>
      <ModalCreatePost></ModalCreatePost>
    </div>
  );
}

export default CreatePost;