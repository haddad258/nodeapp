import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form } from 'reactstrap';


const UpdateTs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Update TEMPERATURE SENSOR</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Update TEMPERATURE SENSOR</ModalHeader>
                <ModalBody>
                   
                <p>en cours</p>
                </ModalBody>
                <ModalFooter>
               

                    <Button color="primary" onClick={toggle}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default UpdateTs;