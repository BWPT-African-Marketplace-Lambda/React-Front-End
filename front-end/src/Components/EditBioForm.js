import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditBioForm(props) {
  const [update, setUpdated] = useState({
    email: "",
    about: "",
    username: ""
  })
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const saveInfo = () => {

  }

  const handleChange = event => {
    event.preventDefault()
    
  }

  return (
    <div>
      <Button color="link" onClick={toggle}>Edit Bio</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update your Bio Information</ModalHeader>
        <ModalBody>
          <form>
            <input type="text" name="username" onChange={handleChange} value={update.username} placeholder="Username" />
            <input type="email" name="email" onChange={handleChange} value={update.email} placeholder="Email" />
            <input type="textarea" name="about" onChange={handleChange} value={update.about} placeholder="About" />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle}>Save</Button>
          <Button color="link" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditBioForm
