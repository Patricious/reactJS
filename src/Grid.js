import React from "react";
import 'bootstrap/scss/bootstrap.scss';
import 'react-bootstrap-grid-component/dist/sizingbreakpoints.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import {Image} from 'react-bootstrap';
import service from './img/Group 232.jpg';
import about from './img/Group 233.jpg';
import career from './img/Group 234.jpg';
import "./App.css";





function GridPage() {

  var background = {backgroundSize : 'cover'};
  var textStyle = {
    position: 'absolute', 
    top: '50%', 
    left: '50%'
  };
  return (

    
    <Container className="grid">
    <p className="P1">From electrical and mechanical component overhauls for surface and underground equipment through to billion-dollar mine and port construction projects, G&S Engineering offer comprehensive services that encompass the project lifestyle from construction, through maintenance and optimization to final decommissioning and deconstruction.</p>
                        <Row className="col-12">
                            <Column className="col-4">
                            <Image  style={background} responsive src={service} alt='sevice'></Image>
                              <h6 className="h6">sevices</h6>
                            <h4 className="h4">Calibre agrees to sell <strong style={{color :"#FAC913"}}>G&S Engineering  </strong>to <strong style={{color :"#FAC913"}} >DRA</strong></h4>
                            <button type="button" className="btn btn-warning" path="/">READ MORE</button>
                            </Column>
                            <Column className="col-4">
                          <Image  style={background} responsive src={about} alt='about'></Image>
                          <h6 className="h6">About Us</h6>
                            <h4 className="h4"> <strong style={{color :"#64BC4D"}}>Get to know</strong> <br/> us a little better</h4>
                            <button  class="btn btn-primary" path="/">VIEW ABOUT US</button>
                            </Column>
                            <Column className="col-4">
                            <Image  style={background} responsive src={career} alt='career'></Image>
                          <h6 className="h6">Careers</h6>
                            <h4 className="h4">Become one of the team, <strong style={{color :"#213B71"}}>join us</strong></h4>
                            <button class="btn btn-secondary" path="/">VIEW CAREERS</button>
                            </Column>
                           
                        </Row>
                    </Container>
    
  
  );
}

export default GridPage;


 
