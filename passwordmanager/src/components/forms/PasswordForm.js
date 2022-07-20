// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createpassword,
//   updatepassword,
// } from "../../../../passwordmanager/src/api/index.js";

// const PasswordForm = ({ currentId, setCurrentId }) => {
//   // const user = JSON.parse(localStorage.getItem("profile"));

//   const [passwordData, setPasswordData] = useState({
//     nameofwebsite: "",
//     username: "",
//     password: "",
//     linktoreset: "",
//   });

//   const password = useSelector((state) =>
//     passwordData
//       ? state.password.find(
//           (specificPassword) => specificPassword._id === passwordData
//         )
//       : null
//   );
//   console.log(password);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (password) setPasswordData(password);
//   }, [password]);

//   const handleSubmit = async () => {
//     if (currentId === 0) {
//       dispatch(createpassword({ ...passwordData }));
//     } else {
//       dispatch(updatepassword(currentId, { ...passwordData }));
//     }
//   };

//   return (
//     <div>
//       <h1>Add Password Information</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           style={{ marginRight: 20 }}
//           name="nameofwebsite"
//           id="nameofwebsite"
//           onChange={(e) => {
//             setPasswordData({ ...passwordData, nameofwebsite: e.target.value });
//           }}
//           placeholder="Name of Website"
//           value={passwordData.nameofwebsite}
//         />
//         <input
//           style={{ marginRight: 20 }}
//           name="username"
//           id="username"
//           onChange={(e) => {
//             setPasswordData({ ...passwordData, username: e.target.value });
//           }}
//           placeholder="username"
//           value={passwordData.username}
//         />
//         <input
//           style={{ marginRight: 20 }}
//           name="password"
//           id="password"
//           onChange={(e) => {
//             setPasswordData({ ...passwordData, password: e.target.value });
//           }}
//           placeholder="password"
//           value={passwordData.password}
//         />
//         <input
//           style={{ marginRight: 20 }}
//           name="linktoreset"
//           id="linktoreset"
//           onChange={(e) => {
//             setPasswordData({ ...passwordData, linktoreset: e.target.value });
//           }}
//           placeholder="linktoreset"
//           value={passwordData.linktoreset}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default PasswordForm;
