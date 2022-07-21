// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { deletepassword } from "../api/index";

// function DeletePassword() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const id = params.id;
//   // const [deletePassword, setDeletePassword] = useState();
//   // const [error, setError] = useState();
//   useEffect(() => {
//     deletepassword(id)
//       .then((response) => {
//         setDeletePassword(response.id);
//         navigate("/homepage");
//       }, [])
//       .catch((error) => {
//         console.log(error);
//         setError(error.response.data.message);
//       });
//   });
//   return (
//     <div>
//       <div>
//         <link rel="stylesheet" type="text/css" href="/style.css" />
//         <h2 className="main">Edit your Password</h2>

//         <div className="form-group">
//           <label className="main" htmlFor="img">
//             Name of Website:
//           </label>
//           <input
//             type="text"
//             id="link"
//             name="link"
//             className="form-control"
//             defaultValue={deletePassword.nameofwebsite}
//           />
//         </div>

//         <div className="form-group">
//           <label className="main" htmlFor="img">
//             Edit Username:{" "}
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="form-control"
//             defaultValue={deletePassword.username}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="img" className="password">
//             Edit Password:
//           </label>
//           <input
//             type="text"
//             id="password"
//             name="password"
//             className="form-control"
//             defaultValue={deletePassword.password}
//           />
//         </div>

//         <div className="form-group">
//           <label className="main" htmlFor="img">
//             Edit Link to Reset:
//           </label>
//           <input
//             type="text"
//             id="link"
//             name="link"
//             className="form-control"
//             defaultValue={deletePassword.linktoreset}
//           />
//         </div>

//         <button onClick={() => deletepassword()}>Delete</button>
//         <button onClick={() => navigate("/homepage")}>Cancel</button>
//       </div>
//     </div>
//   );
// }

// export default DeletePassword;
