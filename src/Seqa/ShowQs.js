import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Form } from 'reactstrap';

import ShowtableQs from './ShowtableQs'

const ShowQs = (props) => {
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
               
                
                <Button color="info" onClick={toggle}>{buttonLabel} Show Seqa SENSOR</Button>
            </Form>
            <Modal size={"lg"} isOpen={modal} toggle={toggle} className={className}  unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Show Seqa SENSOR</ModalHeader>
                <ModalBody>
                   
               <div> <ShowtableQs></ShowtableQs></div>
              
                </ModalBody>
                
            </Modal>
        </div>
    ); 
}
export default ShowQs;