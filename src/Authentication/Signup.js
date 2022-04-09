import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./UserAuthContext";
import './Auth.css'


const Signup = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      
      await signUp(name, email, password, role);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#feece98f";

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <>

  <section>
      <div className="p-4 box">
        <h2 >Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
            required
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
         
          
    <div key={`inline-radio`} className="mb-3">
      <Form.Check
        defaultChecked
        inline
        label="Student"
        name="role-group"
        type="radio"
        id={`role-1`}
        onChange={(e) => setRole(e.target.value)}
      />
      <Form.Check
        inline
        label="Teacher"
        name="role-group"
        type="radio"
        id={`role-2`}
        onChange={(e) => setRole(e.target.name)}
      />
     
    </div>
  
            
        

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </section>
      
    </>
  );
};

export default Signup;