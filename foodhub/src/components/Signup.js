// // import './SignupForm.css'

// export default function SignupForm() {
//   return (
//     <div className="SignupForm" style={{width: 960, height: 1493.72, position: 'relative', background: '#F59F1E'}}>
//   <div className="Frame7" style={{width: 977, height: 1036, left: 29, top: 224, position: 'absolute'}}>
//     <div className="CreateAnAccount" style={{width: 602, height: 58, left: 150, top: 181, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Create an account</div>
//     <div className="Frame8" style={{width: 796, height: 84, left: 45, top: 766, position: 'absolute'}} />
//     <div className="Frame9" style={{width: 850, height: 90, left: 18, top: 760, position: 'absolute', borderRadius: 50, overflow: 'hidden', border: '1px black solid'}}>
//       <div className="Username" style={{left: 41, top: 16, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Username</div>
//     </div>
//     <div className="Button" style={{width: 600, height: 140, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 188, top: 896, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
//       <div className="Signup" style={{width: 242, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '500', lineHeight: 60, wordWrap: 'break-word'}}>Signup</div>
//     </div>
//   </div>
//   <div className="TheFoodHub" style={{width: 845, height: 74, left: 0, top: 154, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 72, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>The Food Hub</div>
//   <div className="AlreadyHaveAnAccountLogin" style={{ left: 267, top: 1300, position: 'absolute' }}>
//   <span style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
//     Already have an account?
//   </span>
//   <span style={{ color: '#151EFB', fontSize: 40, fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>
//     Login
//   </span>
// </div>

// </div>
//   )
// }
import React, {useState} from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router';
import loginPic from '../assets/loginpic.png'
// import axios from "axios";
// import { useMutation } from "react-query";


export default function SignupForm() {
  const navTo = useNavigate(null);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  
    const registerPayload = {
      fullname: fullname,
      email:email,
      password:password,
      username: username,
    }
    fetch("/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password, username, registerPayload }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
      })}
      else {
        r.json().then((err) => setErrors([err.errors]));
      }
    });
  };
  

  return (
    <div className="App">
      <div className="signup-container">
        <div className="signup-form">
          <h1>The Food Hub</h1>
          <h2>Create an account</h2>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <input type="text" placeholder="Full Name" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <button type="submit" className="signup-button">Signup</button>
            <p className="login-link">Already have an account? <a href="#" onClick={() => navTo("/login")}>Login</a></p>
          </form>
        </div>
        <div className="signup-image">
          <img src={loginPic} alt="Signup" />
        </div>
      </div>
    </div>
  );
}
