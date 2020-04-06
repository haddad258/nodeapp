import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';

import CameraDeleteH from './CameraDeleteH'

const DeleteHs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Delete Humidity SENSOR</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Delete Humidity SENSOR</ModalHeader>
                <ModalBody>
                   
                <CameraDeleteH></CameraDeleteH>
              
                </ModalBody>
                
            </Modal>
        </div>
    ); 
}
export default DeleteHs;