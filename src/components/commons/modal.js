import React, {useState} from 'react';
import {Button, Modal, Form, Spinner} from 'react-bootstrap';

const GenericModal = (
    {
        show, 
        handleClose, 
        title, 
        children, 
        handleSubmit,
        btnText,
        loading,
        error,
        success
    }) =>{
        
    return (
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
             </Modal.Header>
            <Modal.Body>
            <Form>
                {children}
                <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                    {loading?  
                    <>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>:
                    btnText
                    }
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
      </React.Fragment>
    );
}

export default GenericModal;