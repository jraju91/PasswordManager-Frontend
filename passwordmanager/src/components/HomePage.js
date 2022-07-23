import React, { useState, useEffect } from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { getpasswords, deletepassword } from "../api/index";
import "./style.css";

function HomePage() {
  const userId = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState([]);
  const deletePassword = (id) => {
    // e.preventDefault();
    console.log("hello");
    deletepassword(id).then(() => {
      window.location.reload();

      // navigate("/homepage");
    });
  };
  useEffect(() => {
    getpasswords(userId).then((response) => {
      setPasswords(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="container">
      <div>
        <h1>My Passwords</h1>
        <div>
          <h3 className="name">Name of Website</h3>
          <h3 className="name">Username</h3>
          <h3 className="name">Password</h3>
          <h3 className="name">Link to Reset</h3>
        </div>
        <section>
          {passwords.map((password) => (
            <div>
              <div>
                <input className="form" value={password.nameofwebsite} />

                <input className="form" value={password.username} />
                <input
                  className="form"
                  type="password"
                  value={password.password}
                />
                <input className="form" value={password.linktoreset} />
              </div>
              <button
                className="btn"
                onClick={() => navigate(`/edit/${password._id}`)}
              >
                View / Edit Password
              </button>
              <span></span>
              <button
                className="btn"
                onClick={() => {
                  deletePassword(password._id);
                }}
              >
                Delete Password
              </button>
            </div>
          ))}
        </section>
        <button className="btn" onClick={() => navigate(`/add`)}>
          Add A Password
        </button>
      </div>
    </div>
  );
}

export default HomePage;
