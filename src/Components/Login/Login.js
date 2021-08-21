import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation,Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import './Login.css';
import googleSignIn from '../../images/google.png';
import { FcGoogle } from 'react-icons/fc';





firebase.initializeApp(firebaseConfig);

function Login() {
  
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn= () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then(res => {
    const {displayName, photoURL, email} = res.user;
      const signedInUser= {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: "Signed in with Google "
      };
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
      
    console.log(user)
  })
  .catch(err =>{
    console.log(err);
    console.log(err.message);
  })
  }


  const handleSignOut = () =>{
    firebase.auth().signOut().then((res) => {
      const signedOutUser = {
        isSignedIn: false,
         name: '',
         email: '',
         photo: ''
      }
      setUser(signedOutUser);
      
      
     
    }).catch((error) => {
      
    });
  }


  const handleSubmit = (e) =>{
    if(user.email && user.password)
    {
  


  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
 
    const { email} = res.user;
    const signedInUser = {...user};
    signedInUser.success = "Signed In";
    signedInUser.error = "";
    signedInUser.email = email;
    setUser(signedInUser);
    setLoggedInUser(signedInUser);
    history.replace(from);
  })
  .catch((err) => {
    var errorCode = err.code;
    var errorMessage = err.message;
    const updateUserInfo = {...user};
    updateUserInfo.success="";
    updateUserInfo.error = errorMessage;
    setUser(updateUserInfo);
  });
     }  
    else
    {console.log("form submitting error");}
    e.preventDefault();                                                                                                          

  }


  const handleBlur = (e) => {
    console.log(e.target.name , e.target.value);
    let isFieldValid;
    if( e.target.name === "email"){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
       console.log("Email from handleBlur",e.target.value);
    }

    if( e.target.name === "password"){
      isFieldValid = e.target.value.length >= 6;
      
      console.log("password from handleBlur",e.target.value);
    }

    if(isFieldValid)
    {
      const updateUserInfo = {...user};
      updateUserInfo[e.target.name] = e.target.value;
      setUser(updateUserInfo);
    }

  }

  return (


    <div className="Login loginStyle">
      <h2 className="text-center">Login Form</h2>
    <Form onSubmit={handleSubmit} >
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email" 
          name="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          required
          
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur}
          required
        />
      </Form.Group>
      <Button block size="lg" type="submit" >
        Login
      </Button>


      <Row className="g-2">
        <Col md>
          <Button block className="mt-3" variant="light" onClick={handleSignIn}>
          <FcGoogle /> Login with Google
          </Button>
        </Col>

        <Col md className="mt-4 mr-5 text-right">
          <Link to="/signup">Sign Up</Link>
        </Col>
      </Row>
            
      
    </Form>

    <p style={{color:"red"}}>{user.error}</p>
    <p style={{color:"green"}}>{user.success}</p>
  </div>
  );
}

export default Login;
