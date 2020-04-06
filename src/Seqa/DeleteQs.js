import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';

import CameraDeleteQ from './CameraDeleteQ'

const DeleteQs = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    const [unmountOnClose] = useState(true);
  
    const toggle = () => setModal(!modal);
   
  
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Delete Seqa SENSOR</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Delete Seqa SENSOR</ModalHeader>
                <ModalBody>
                   
                <CameraDeleteQ></CameraDeleteQ>
              
                </ModalBody>
                
            </Modal>
        </div>
    ); 
}
export default DeleteQs;