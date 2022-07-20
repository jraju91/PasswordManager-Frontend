import React, { useState } from "react";
import { signIn } from "../api/index";
import { useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  return (
    <div>
      <h1>Login Page</h1>
      <div style={{ color: "red" }}>{error}</div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            email,
            password,
          };
          signIn(formData)
            .then((data) => {
              console.log(data);
              // setCookie that login succeded follow project 3 (search for localstorage.setItem)
              setError("");
            })
            .catch((error) => {
              console.log(error);
              setError(error.response.data.message);
            });
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => navigate("/homepage")}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
