import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatepassword, getpassword } from "../api/index";

function EditPassword(req) {
  //  make API call w/ id to fetch pw data , apply to state, do not rehash password unless specifically updated
  // const _id = req.params._id;
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [updatePassword, setUpdatePassword] = useState();
  useEffect(() => {
    getpassword(id).then((response) => {
      setUpdatePassword(response.data);
      console.log(response.data);
    });
  }, []);
  if (!updatePassword) {
    return null;
  }

  const updateFunction = () => {
    updatepassword(updatePassword).then(() => {
      navigate("/homepage");
      // setUpdatePassword();
    });
  };
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/style.css" />
      <h2 className="main">Edit your Password</h2>

      <div className="form-group">
        <label className="main" htmlFor="img">
          Name of Website:
        </label>
        <input
          type="text"
          id="link"
          name="link"
          className="form-control"
          defaultValue={updatePassword.nameofwebsite}
          onChange={(e) => {
            const password = updatePassword;
            password.nameofwebsite = e.target.value;
            setUpdatePassword(password);
          }}
        />
      </div>

      <div className="form-group">
        <label className="main" htmlFor="img">
          Edit Username:{" "}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
          defaultValue={updatePassword.username}
          onChange={(e) => {
            const password = updatePassword;
            password.username = e.target.value;
            setUpdatePassword(password);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="img" className="password">
          Edit Password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="form-control"
          defaultValue={updatePassword.password}
          onChange={(e) => {
            const password = updatePassword;
            password.password = e.target.value;
            setUpdatePassword(password);
          }}
        />
      </div>

      <div className="form-group">
        <label className="main" htmlFor="img">
          Edit Link to Reset:
        </label>
        <input
          type="text"
          id="link"
          name="link"
          className="form-control"
          defaultValue={updatePassword.linktoreset}
          onChange={(e) => {
            const password = updatePassword;
            password.linktoreset = e.target.value;
            setUpdatePassword(password);
          }}
        />
      </div>

      <button onClick={() => updateFunction()}>Update</button>
      <button onClick={() => navigate("/homepage")}>Cancel</button>
    </div>
  );
}

export default EditPassword;
