import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditUserPhoto(props) {
  console.log("EditUserPhoto", props)

  const [photo, setPhoto] = useState({
    avatar_url: "",

  })
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const savePhoto = (e) => {
    localStorage.setItem("photo", photo.avatar_url)
    props.updateUserBio(photo)
    props.setDefaultImg(localStorage.getItem("photo"))
    toggle()
    
  }
  
  const handleChange = event => {
    let files = event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(files)
    reader.onload = (event) => {
      setPhoto({
        avatar_url: event.target.result
      })
    }
  }


  return (
    <div>
      <Button color="link" onClick={toggle}>Edit Photo</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a Profile Photo</ModalHeader>
        <ModalBody>
          <form>
            <input type="file" accept="image/*" name="avatar_url" onChange={handleChange} />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={savePhoto}>Save</Button>
          <Button color="link" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditUserPhoto;