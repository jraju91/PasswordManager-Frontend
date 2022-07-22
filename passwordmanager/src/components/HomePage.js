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
      navigate("/homepage");
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
        <section>
          {passwords.map((password) => (
            <div>
              {/* change out of form into div/span */}
              <div>
                {/* <FloatingLabel> */}
                {/* Name of Website */}
                <input className="form" value={password.nameofwebsite} />
                {/* </FloatingLabel> */}
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
