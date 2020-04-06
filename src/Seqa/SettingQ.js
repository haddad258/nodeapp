import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddQs from './AddQs'
import DeleteQs from './DeleteQs'
import UpdateQs from './UpdateQs'
import ShowQs from './ShowQs'


const SettingQ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Setting</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <p></p><div><AddQs></AddQs> </div> <div><p></p> <DeleteQs></DeleteQs></div>  <div><p></p><UpdateQs> </UpdateQs><p></p><ShowQs></ShowQs></div>
          </CardBody>
          
        </Card>
      </Collapse>

    </div>
  );
}

export default SettingQ;
