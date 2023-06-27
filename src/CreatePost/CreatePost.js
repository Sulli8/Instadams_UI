import './CreatePost.css';
import Menu from '../Menu/Menu';
import ModalCreatePost from '../ModalCreatePost/ModalCreatePost';
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
function CreatePost(props) {
  const [load,setShowLoad] = useState(false);
  let alertDialog;
  if(load) {
    alertDialog = <Alert className="box_load" variant="warning">
        Patientez...
        <span className="material-symbols-outlined rotation_load">hourglass_top</span>
    </Alert>
}
  return (
    <>
    <div>
    {alertDialog}
    <div className="containerModalCreatePost">
      <ModalCreatePost setChild={props.setChild} load={load} setShowLoad={setShowLoad} setShowSuccess={props.setShowSuccess}></ModalCreatePost>
    </div>
    </div>
  
    </>
  );
}

export default CreatePost;