import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react'

export default function CreatePost({ show }) {

  const [seeModal, setSeeModal] = useState(false)

  useEffect(() => {
    setSeeModal(show)
  }, [show])

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setSeeModal(false)}
      show={seeModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setSeeModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
