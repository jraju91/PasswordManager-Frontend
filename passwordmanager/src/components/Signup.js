import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/index";
import "./style.css";

function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [error, setError] = useState();

  return (
    <div className="container">
      <h1>Signup Page</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            firstname,
            lastname,
            email,
            password,
          };
          signUp(formData)
            .then((data) => {
              // setlocalstorage same as login
              console.log(data);
              // setError("");
              navigate("/homepage");
            })
            .catch((error) => {
              console.log(error);
              // setError(error.response.data.message);
            });
        }}
      >
        <Form.Group controlId="firstName">
          <Form.Label>First Name: </Form.Label>
          <Form.Control
            className="form"
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name: </Form.Label>
          <Form.Control
            className="form"
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address: </Form.Label>
          <Form.Control
            className="form"
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            className="form"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => signUp()}>
          Submit
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => navigate("/login")}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
