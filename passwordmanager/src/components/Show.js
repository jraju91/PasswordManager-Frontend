// import React, { useState, useEffect } from "react";
// import { getpasswords } from "../api/index";

// function Show() {
//   const [allPasswords, setAllPasswords] = useState([]);
//   const [myPasswords, setMyPasswords] = useState([]);
//   let userPasswords = [];
//   const userId = JSON.parse(localStorage.getItem("user"));
//   //   console.log(user);
//   useEffect(() => {
//     getpasswords(userId).then((response) => {
//       console.log(response);
//       setAllPasswords(response.data);
//     });
//     console.log(allPasswords[0].userId);
//     userPasswords = allPasswords
//       .filter
//       // (passwords) => passwords.userId === user
//       ();
//   }, []);
//   console.log(userPasswords);
//   //   console.log(allPasswords[0]);
//   // console.log(user);
//   //   getpasswords(() => { user.filter()

//   //   })

//   return <div>Show</div>;
// }

// export default Show;
