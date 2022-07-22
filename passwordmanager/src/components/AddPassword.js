import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createpassword } from "../api/index";
import "./style.css";

function AddPassword() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [newPassword, setNewPassword] = useState({
    nameofwebsite: "",
    username: "",
    password: "",
    linktoreset: "",
    userId: user,
  });
  const createFunction = () => {
    createpassword(newPassword).then((response) => {
      console.log("hello");
      navigate("/homepage");
    });
  };
  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="/style.css" />

      <h2 class="main">Add a new Password</h2>

      <div class="form">
        <label className="name">Name Of Website: </label>
        <input
          type="text"
          class="form-control"
          placeholder="Name of Website"
          required
          defaultValue={newPassword.nameofwebsite}
          onChange={(e) => {
            const password = newPassword;
            password.nameofwebsite = e.target.value;
            setNewPassword(password);
          }}
        />
      </div>

      <div class="form">
        <label className="name">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          class="form-control"
          defaultValue={newPassword.username}
          onChange={(e) => {
            const password = newPassword;
            password.username = e.target.value;
            setNewPassword(password);
          }}
        />
      </div>

      <div class="form">
        <label className="name">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required
          class="form-control"
          defaultValue={newPassword.password}
          onChange={(e) => {
            const password = newPassword;
            password.password = e.target.value;
            setNewPassword(password);
          }}
        />
      </div>

      <div className="col-md-3 center">
        <label className="name">Link to Reset Password: </label>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="Link To Reset"
          class="form-control"
          defaultValue={newPassword.linktoreset}
          onChange={(e) => {
            const password = newPassword;
            password.linktoreset = e.target.value;
            setNewPassword(password);
          }}
        />
      </div>

      <button className="btn" onClick={() => createFunction()}>
        Create Password
      </button>
      <button className="btn" onClick={() => navigate("/homepage")}>
        Cancel
      </button>
    </div>
  );
}

export default AddPassword;
