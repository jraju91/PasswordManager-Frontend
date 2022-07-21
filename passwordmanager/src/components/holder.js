// <div className="container">
//   <div>
//     <h1>Current Passwords</h1>
//     <section>
//       {passwords.map((password) => (
//         <div>
//           {/* change out of form into div/span */}
//           <div>
//             <input value={password.nameofwebsite} />
//             <input value={password.username} />
//             <input type="password" value={password.password} />
//             <input value={password.linktoreset} />
//           </div>
//           <button onClick={() => navigate(`/edit/${password._id}`)}>
//             View / Edit Password
//           </button>
//           <span></span>
//           <button
//             className="delete"
//             onClick={() => deletePassword(password._id)}
//           >
//             Delete Password
//           </button>
//         </div>
//       ))}
//     </section>
//     <button className="add" onClick={() => navigate(`/add`)}>
//       Add A Password
//     </button>
//   </div>
// </div>
