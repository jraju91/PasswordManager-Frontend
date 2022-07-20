import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createpassword } from "../api/index";

function AddPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState({
    nameofwebsite: "",
    username: "",
    password: "",
    linktoreset: "",
  });
  createpassword(newPassword).then((response) => {
    setNewPassword(response);
    console.log(response);
  });
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/style.css" />

      <h2 class="main">Add a new Password</h2>

      <div class="form-group field">
        <label class="main">Name Of Website:</label>
        <input type="text" class="form-control" required />
      </div>

      <div class="form-group field">
        <label>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          class="form-control"
        />
      </div>

      <div class="form-group field">
        <label for="img">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          required
          class="form-control"
        />
      </div>

      <div class="form-group field">
        <label for="img">Link to Reset Password:</label>
        <input type="text" id="link" name="link" class="form-control" />
      </div>

      <input type="submit" class="btn btn-primary" />

      <a href="/" class="btn btn-secondary">
        Cancel
      </a>
    </div>
  );
}

export default AddPassword;
