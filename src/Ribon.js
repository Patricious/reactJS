import React from "react";
import 'bootstrap/scss/bootstrap.scss';
import 'react-bootstrap-grid-component/dist/sizingbreakpoints.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import {Image} from 'react-bootstrap';
import blue from './img/blue ribbon.png';

import "./App.css";





function Ribbon() {

  return (

    
    <Container className="ribbon">
    
                        <Row >
                            <Column className="col-4">
                            <Image responsive src={blue} alt='ribbon' className='robbon-pic'></Image>
                              <h1 className="h1">WELCOME</h1>
                            
                            
                            </Column>
                            <h3 className="h3">Your asset performance partner <br/>from the Earth’s surface down.</h3>
                        </Row>
                    </Container>
    
  
  );
}

export default Ribbon;


 
