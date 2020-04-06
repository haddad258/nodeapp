import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddTs from './AddTs'
import DeleteTs from './DeleteTs'
import UpdateTs from './UpdateTs'
import ShowTs from './ShowTs'
const SettingT = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Setting</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <p></p><div><AddTs></AddTs> </div> <div><p></p> <DeleteTs></DeleteTs></div>  <div><p></p><UpdateTs> </UpdateTs><p></p><ShowTs></ShowTs></div>
          </CardBody>
          
        </Card>
      </Collapse>

    </div>
  );
}

export default SettingT;
