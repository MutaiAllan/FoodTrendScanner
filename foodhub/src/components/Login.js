// // import './LoginForm.css'

// export default function LoginForm() {
//   return (
//     <div className="LoginForm" style={{width: 960, height: 1493.72, position: 'relative', background: '#F59F1E'}}>
//   <div className="TheFoodHub" style={{width: 845, height: 74, left: 0, top: 154, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 72, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>The Food Hub</div>
//   <div className="Frame10" style={{width: 522, height: 156, left: 174, top: 292, position: 'absolute'}}>
//     <div className="WelcomeBack" style={{left: 68, top: 71, position: 'absolute', color: 'black', fontSize: 60, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Welcome Back!</div>
//   </div>
//   <div className="LoginToYourAccount" style={{left: 250, top: 512, position: 'absolute'}}><span style="color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'">Login to your account</span><span style="color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'">.</span></div>
//   <div className="Frame11" style={{width: 600, height: 140, left: 174, top: 646, position: 'absolute', borderRadius: 50, overflow: 'hidden', border: '1px black solid'}}>
//     <div className="Email" style={{left: 214, top: 39, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Email</div>
//     <div className="IcOutlineEmail" style={{width: 24, height: 24, left: 388, top: 58, position: 'absolute'}}>
//       <div className="Vector" style={{width: 20, height: 16, left: 2, top: 4, position: 'absolute', background: 'black'}}></div>
//       <div className="Vector" style={{width: 20, height: 16, left: 2, top: 4, position: 'absolute'}}>
//         <div className="Vector" style={{width: 20, height: 16, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
//       </div>
//     </div>
//   </div>
//   <div className="Button" style={{width: 600, height: 140, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 180, top: 1113, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
//     <div className="Login" style={{width: 242, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '500', lineHeight: 60, wordWrap: 'break-word'}}>LOGIN</div>
//   </div>
//   <div className="DonTHaveAnAccountSignUp" style={{left: 225, top: 1325, position: 'absolute', textAlign: 'center'}}><span style="color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', lineHeight: 48, wordWrap: 'break-word'">Don’t have an account?</span><span style="color: '#151EFB', fontSize: 40, fontFamily: 'Inter', fontWeight: '500', lineHeight: 60, wordWrap: 'break-word'">Sign up</span></div>
//   <div className="Frame12" style={{width: 600, height: 140, left: 174, top: 843, position: 'absolute', borderRadius: 50, overflow: 'hidden', border: '1px black solid'}}>
//     <div className="Password" style={{left: 185, top: 31, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Password</div>
//   </div>
//   <div className="ForgotPassword" style={{width: 377, height: 30, left: 432, top: 1013, position: 'absolute', color: '#151EFB', fontSize: 40, fontFamily: 'Inter', fontWeight: '500', lineHeight: 60, wordWrap: 'break-word'}}>Forgot password?</div>
// </div>
//   )
// }
import './LoginForm.css';
import React, { useState } from 'react';
import loginPic from '../assets/loginpic.png';
import { useNavigate } from 'react-router';

export default function LoginForm({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    // For example, check if email and password match your criteria
    // If successful, set the login state and navigate to the intended page

    const loginPayload = {
      email:email,
      password:password,
    }
    fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, loginPayload }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // localStorage.setItem('user', JSON.stringify(user)); 
          // const token = user.token
          // localStorage.setItem('token', token)
          console.log(user)
      })}
      else {
        r.json().then((err) => setErrors([err.errors]));
      }
    });

    // if (email === 'test@example.com' && password === 'password') {
    //   setIsLoggedIn(true);
    //   navigate('/');
    // } else {
    //   alert('Invalid login credentials');
    // }
  };

  return (

    <div className="App">
      <div className="login-container">
        <div className="login-form">
          <h1>The Food Hub</h1>
          <h2>Welcome Back!</h2>
          <h3>Login to your account.</h3>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="signup-link">Don't have an account? <a href="#" onClick={() => navigate("/signup")}>Sign up</a></p>

          </form>
        </div>
        <div className="login-image">
          <img src={loginPic} alt="Login" />
        </div>
      </div>
    </div>
  );
}
