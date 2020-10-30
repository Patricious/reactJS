import React from "react";
import 'bootstrap/scss/bootstrap.scss';
import 'react-bootstrap-grid-component/dist/sizingbreakpoints.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import mm from './img/metals-minerals.png';
import infra from './img/infrastructure.png';
import industry from './img/industrial.png';
import energy from './img/energy.png';
import water from './img/water.png';
import "./App.css";





function Cards() {
  return (
   


    <Container className="markets">
    <p className="P3">Our Markets</p>
 
                        <Row className="col-10">
                            <Column className="col-2">
                            <img src={mm} alt='logo'/>
                            <p className="P2">Metals & Minerals</p>
                            </Column>
                            <Column className="col-2">
                            <img src={infra} alt='logo'/>
                            <p className="P2">Infrastructure</p>
                            </Column>
                            <Column className="col-2">
                            <img src={industry} alt='logo'/>
                            <p className="P2">Industrial</p>
                            </Column>
                            <Column className="col-2">
                            <img src={energy} alt='logo'/>
                            <p className="P2">Energy</p>
                            </Column>
                            <Column className="col-2">
                            <img src={water} alt='logo'/>
                            <p className="P2">Water</p>
                            </Column>
                           
                        </Row>
                        {/* <button class="">Button</button> */}
                       {/* <Button as="input" variant="success" type="button" value="Input" />{' hello'} */}
                    </Container>
    
  
  );
}

export default Cards;
