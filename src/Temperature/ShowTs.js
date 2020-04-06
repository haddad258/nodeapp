import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';

import ShowtableTs from './ShowtableTs'

const ShowTs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Show TEMPERATURE SENSOR</Button>
            </Form>
            <Modal size={"lg"} isOpen={modal} toggle={toggle} className={className}  unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Show TEMPERATURE SENSOR</ModalHeader>
                <ModalBody>
                   
               <div> <ShowtableTs></ShowtableTs></div>
              
                </ModalBody>
                
            </Modal>
        </div>
    ); 
}
export default ShowTs;