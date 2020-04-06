import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';
import CameraAddT from './CameraAddT'

const AddTs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} ADD TEMPERATURE SENSOR</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>ADD TEMPERATURE SENSOR</ModalHeader>
                <ModalBody>
                   
                <CameraAddT></CameraAddT>
               
                </ModalBody>
              
            </Modal>
        </div>
    );
}


export default AddTs;