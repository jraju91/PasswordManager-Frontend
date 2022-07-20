import React, { useState, useEffect } from "react";
// import PasswordForm from "./forms/PasswordForm";
import { useNavigate } from "react-router-dom";
import { getpasswords } from "../api/index";

function HomePage() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState([]);
  useEffect(() => {
    getpasswords().then((response) => {
      setPasswords(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1>Current Passwords</h1>
        <section>
          {passwords.map((password) => (
            <div>
              {/* change out of form into div/span */}
              <form>
                <input value={password.nameofwebsite} />
                <input value={password.username} />
                <input value={password.password} />
                <input value={password.linktoreset} />
              </form>
              <div>
                <button onClick={() => navigate(`/edit/${password._id}`)}>
                  Edit Password
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
