import React, { useContext } from 'react';
import {Row, Col, Card, Button,} from 'react-bootstrap';
import frame from '../../images/Frame.png';
import frame1 from '../../images/Frame-1.png';
import frame2 from '../../images/Frame-2.png';
import frame3 from '../../images/Group.png';
import './Home.css'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="style mt-5" >
            <Row xs={1} md={2} lg={4} className="g-6">

    <Col>
      <Card className="card">
        <div className="container mt-5" >
        <Card.Img className="img" variant="top" src={frame} />
        </div>
        
        <div style={{margin:"auto"}}>
          <Card.Title>
            
            <Link to="/booking/:bike">
             <Button variant="primary" >Bike11</Button>
             </Link>
            
          </Card.Title>
          </div>

        
      </Card>
    </Col>

    <Col>
      <Card>
      <div className="container mt-5">
        <Card.Img className="img"  src={frame1} />
        </div>
        
        <div style={{margin:"auto"}}>
          <Card.Title>
          <Link to="/booking/:bus">
             <Button variant="primary">Bus</Button>
          </Link>
          </Card.Title>
        </div>
          

        
      </Card>
    </Col>

    <Col>
      <Card>
      <div className="container mt-5">
        <Card.Img class="img" variant="top" src={frame2} />
      </div>
      <div style={{margin:"auto"}}>
          <Card.Title>
          <Link to="/booking/:car">
             <Button variant="primary">Car</Button>
          </Link>
          </Card.Title>

        </div>
      </Card>
    </Col>

    <Col>
      <Card>
      <div className="container mt-5">
        <Card.Img class="img" variant="top" src={frame3} />
      </div>
      <div style={{margin:"auto"}}>
          <Card.Title>
          <Link to="/booking/:train">
             <Button variant="primary">Train</Button>
             </Link>
          </Card.Title>

        </div>
      </Card>
    </Col>
  
</Row>

<h2>Email:{loggedInUser.email}</h2>


        </div>
    );
};

export default Home;