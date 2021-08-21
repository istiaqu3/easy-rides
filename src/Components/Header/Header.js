import React, { useContext } from 'react';
import {Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="style">
        
            <Navbar  collapseOnSelect expand="md" >
              <Container >
                <Navbar.Brand > <Link to="/home">Easy Rides</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
              
                  <Nav style={{marginLeft:"auto"}}>
                    <Nav.Link ><Link to="/contact">Contact Us</Link></Nav.Link>
                    
                    <Nav.Link ><Link to="/about">About Us</Link></Nav.Link>
                    
                    {
                      loggedInUser.email ? <img src={loggedInUser.photo} id="avatar" alt="User's Avatar"></img> 
                      :
                      <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                    }

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
        
    );
};

export default Header;