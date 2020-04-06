import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddHs from './AddHs'
import DeleteHs from './DeleteHs'
import UpdateHs from './UpdateHs'
import ShowHs from './ShowHs'
const SettingH = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Setting</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <p></p><div><AddHs></AddHs> </div> <div><p></p> <DeleteHs></DeleteHs></div>  <div><p></p><UpdateHs> </UpdateHs><p></p><ShowHs></ShowHs></div>
          </CardBody>
          
        </Card>
      </Collapse>

    </div>
  );
}

export default SettingH;
