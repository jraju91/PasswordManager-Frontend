import React, { useState } from "react";
import { signIn } from "../api/index";
import { useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  return (
    <div className="container">
      <h1>Password Manager App</h1>
      <h1>Login</h1>
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
              console.log("in then block");
              localStorage.setItem("user", JSON.stringify(data.data.user));
              setError("");
              navigate("/homepage");
            })
            .catch((error) => {
              console.log(error);
              console.log("in catch block");
              setError(error.response.data.message);
            });
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            className="form"
            type="email"
            placeholder="Enter Email"
            value={email}
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
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          className="btn"
          variant="primary"
          type="submit"
          onClick={() => signIn()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
