import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';

import CameraDeleteT from './CameraDeleteT'

const DeleteTs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Delete TEMPERATURE SENSOR</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Delete TEMPERATURE SENSOR</ModalHeader>
                <ModalBody>
                   
                <CameraDeleteT></CameraDeleteT>
              
                </ModalBody>
                
            </Modal>
        </div>
    );
}
export default DeleteTs;