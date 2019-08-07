import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

const GenericModal = ({show, handleClose, title, children}) =>{
    return (
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
             </Modal.Header>
            <Modal.Body>
            <Form>
                {children}
                <Button variant="primary" /*type="submit"*/>
                    Submit
                </Button>
            </Form>
              
            </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </React.Fragment>
    );
}

export default GenericModal;