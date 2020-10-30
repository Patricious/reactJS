import React, { useState, useEffect } from "react";
import 'bootstrap/scss/bootstrap.scss';
import 'react-bootstrap-grid-component/dist/sizingbreakpoints.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import image from './img/bottom-image.jpg';
import { db } from "./Firebase/firebaseConfig";
import "./App.css";





// function Form() {
  const Form = () => {
    const [fName, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [cNumber, setCNumber] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    
  
    const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        fName: fName,
        email: email,
        cNumber: cNumber,
        fromDate: fromDate,
        toDate : toDate
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFName("");
    setEmail("");
   setCNumber("");
   setFromDate("");
   setToDate("");
  };

 
    
  return (
   
    
    <Container className="massage">
     <p className="P4">GET IN TOUCH</p>
                        <Row >
                            <Column className="col-6">
                            <img src={image} alt='logo'/>
                            
                            </Column>
                            <Column className="col-6">
                           
                            <form className="form" onSubmit={handleSubmit}>
                          
<p className="P5">   Complete the form to get in touch </p>
      <label>Your Name</label>
      <input
        type="text"
        required
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />

      <label>Email Address</label>
      <input
        type ="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

     
        <label>Phone Number</label>
      <input
        type = "text"
        required
        value={cNumber}
        onChange={(e) => setCNumber(e.target.value)}
      />
        <label>Start Date</label>
      <input
        type = "date"
        required
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

         <label>End Date</label>
      <input
        type="date"
        required
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />

      <button
        type="submit"
        class="btn-sucess"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
    </Column>               
                        </Row>
                    </Container>
    
  
  );
}

export default Form;


 
