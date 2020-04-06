import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';

import ShowtableHs from './ShowtableHs'

const ShowHs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Show Humidity SENSOR</Button>
            </Form>
            <Modal size={"lg"} isOpen={modal} toggle={toggle} className={className}  unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Show Humidity SENSOR</ModalHeader>
                <ModalBody>
                   
               <div> <ShowtableHs></ShowtableHs></div>
              
                </ModalBody>
                
            </Modal>
        </div>
    ); 
}
export default ShowHs;