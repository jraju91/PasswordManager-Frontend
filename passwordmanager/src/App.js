import "./App.css";
// import Axios from "axios";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import AddPassword from "./components/AddPassword";
import EditPassword from "./components/EditPassword";

// import Navbar from "./components/Navbar";

// import ReactDOM from "react-dom/client";

function App() {
  // Axios({
  //   method: "GET",
  //   url: "http://localhost:3001/",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => {
  //   console.log(res.data.message);
  // });

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<AddPassword />} />
        <Route path="/edit/:id" element={<EditPassword />} />
      </Routes>
    </div>
  );
}

export default App;
