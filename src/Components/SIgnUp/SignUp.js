import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { useHistory, useLocation } from 'react-router-dom';



const SignUp = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: ''
      });
      let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/login" } };

    const handleBlur = (e) => {
        console.log(e.target.name , e.target.value);
        let isFieldValid;
        if( e.target.name === "email"){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
           console.log("Email from handleBlur",e.target.value);
        }
    
        if( e.target.name === "password"){
          isFieldValid = e.target.value.length >= 6;
          // console.log("password",isPassValid);
          console.log("password from handleBlur",e.target.value);
        }
    
        if(isFieldValid)
        {
          const updateUserInfo = {...user};
          updateUserInfo[e.target.name] = e.target.value;
          setUser(updateUserInfo);
        }
    
      }

      const handleSubmit = (e) =>{
          console.log("Sign up submit successful");
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const updateUserInfo = {...user};
            updateUserInfo.success="Account Created Successfully";
            updateUserInfo.error = "";
            setUser(updateUserInfo);
            history.replace(from);
            // Signed in 
            
            // ...
          })
          .catch((err) => {
            var errorCode = err.code;
            var errorMessage = err.message;
            console.log(errorMessage);
            // ..
            const updateUserInfo = {...user};
            updateUserInfo.success="";
            updateUserInfo.error = errorMessage;
            setUser(updateUserInfo);
          });
      }
    return (
        <div className="Login loginStyle">
            <h2 className="text-center">Sign Up Form</h2>
    <Form onSubmit={handleSubmit} >
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email" 
          name="email"
          onBlur={handleBlur}
          required
          
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onBlur={handleBlur}
          required
        />
      </Form.Group>
      <Button block size="lg" type="submit" >
        Sign Up
      </Button>
            
      
    </Form>
    <p style={{color:"red"}}>{user.error}</p>
    <p style={{color:"green"}}>{user.success}</p>


  </div>
    );
};

export default SignUp;