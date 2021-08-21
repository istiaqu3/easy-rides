import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Booking.css';
import travellingData from '../travellingData.js/travellingData';
import peopleIcon from '../../images/peopleicon.png'

const Booking = () => {
    const {id}= useParams();
    console.log("id",id);
    
    //  const [data,setData] = useState(travellingData);
    
    const {  passenger,fares,name,image } = travellingData.find(place => place.id === id);
    const fare = Math.floor(Math.random() * fares.length);

    const [searchClicked,setSearchClicked] = useState(false);
    const clicked =()=>{
        setSearchClicked(true);
    }
    return (
        <div className="style mt-5">
             <Row>
                <Col sm={3}  >
  
                  {
                      searchClicked ? 
                      <div className="container bg"  id="searchResult">
                          <div className="container bg-orange">
                          <p style={{padding:"10px"}}> <strong>{document.getElementById("from").value}</strong> - <strong>{document.getElementById("to").value}</strong>
                          </p>
                          </div>
                          <div id="resultInfo">
                              <div id="resultPic">
                                  <img src= {image} alt="vehicleImage">
                                  </img>

                              </div>
                              <div style={{padding:"5px"}}>
                                <h5>{name}</h5>
                              </div>
                              <div id="peopleIcon">
                                  <img src= {peopleIcon} alt="peopleIcon">
                                  </img>

                              </div>
                              <div >
                                <h5>{passenger}</h5>
                              </div>
                              <div style={{marginLeft:"auto", padding:"5px"}}>
                                <h5>${fares[fare]}</h5>
                              </div>
                              
                          </div>

                      </div> 
                      :
                       <div className="bg container " id="searchBox">
   


                        

                        <Form onSubmit={clicked}>
                            <Form.Group size="lg" controlId="from">
                                <Form.Label>From</Form.Label>
                                <Form.Control
                                autoFocus
                                type="text" 
                                id="from"
                                required
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>To</Form.Label>
                                <Form.Control
                                type="text"
                                id="to"
                                required
                                />
                            </Form.Group>
                            <Button block size="lg" type="submit" >
                                Submit
                            </Button>
                            </Form>

                      
                         </div>
                    
                  }
                        
                    
                   

                </Col>
                <Col sm={9} >
                    <div id="map">
                        <img src="../../images/Map.png" alt="map"></img>
                    </div>
                    
                </Col>
            </Row>
            
        </div>
    );
};

export default Booking;