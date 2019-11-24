import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

function EditBioForm(props) {
  const [update, setUpdated] = useState({
    email: "",
    about: "",
    username: "",
    id: localStorage.getItem("user_id")
  })
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const saveInfo = (event) => {
    event.preventDefault()
    props.updateUserBio(update)
    setModal(!modal)
  }

  const handleChange = event => {

    setUpdated({
      ...update,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <Button color="link" onClick={toggle}>Edit Bio</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update your Bio Information</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" onChange={handleChange} value={update.username} placeholder="Username" />
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" onChange={handleChange} value={update.email} placeholder="Email" />
              <Label for="about">About</Label>
              <Input type="textarea" name="about" id="about" onChange={handleChange} value={update.about} placeholder="About" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={saveInfo}>Save</Button>
          <Button color="link" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditBioForm
