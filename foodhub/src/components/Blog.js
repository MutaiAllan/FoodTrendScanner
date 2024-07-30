// export default function UserBlog() {
//     return (
// <div className="BlogPage" style={{width: 1000, height: 1000, position: 'relative', background: 'white'}}>
//   <div className="Container" style={{width: 1000, height: 1000, left: 0, top: 0, position: 'absolute'}}>
//     <div className="Main" style={{width: 1000, height: 1000, left: 0, top: 327, position: 'absolute'}}>
//       <div className="Form" style={{width: 1, height: 1, left: 1324, top: 3724.63, position: 'absolute'}} />
//       <div className="Frame1321316148" style={{width: 1264, height: 1526, left: 328, top: 0, position: 'absolute', background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px black solid'}}>
//         <div className="Frame1321316165" style={{width: 934, height: 140, left: 165, top: 143, position: 'absolute', borderRadius: 50, overflow: 'hidden', border: '1px black solid'}}>
//           <div className="Title" style={{left: 409, top: 60, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: 36, wordWrap: 'break-word'}}>Title</div>
//         </div>
//         <div className="Frame1321316166" style={{width: 934, height: 140, left: 165, top: 408, position: 'absolute', borderRadius: 50, overflow: 'hidden', border: '1px black solid'}}>
//           <div className="Description" style={{left: 409, top: 60, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: 36, wordWrap: 'break-word'}}>Description </div>
//         </div>
//         <div className="Frame1321316167" style={{width: 934, height: 340, left: 165, top: 673, position: 'absolute', borderRadius: 50, overflow: 'hidden', border: '1px black solid'}}>
//           <div className="PlaceYourImageHere" style={{left: 341, top: 148, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', lineHeight: 36, wordWrap: 'break-word'}}>Place your image here</div>
//         </div>
//         <div className="Button" style={{width: 600, height: 140, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 332, top: 1194, position: 'absolute', background: 'black', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
//           <div className="Post" style={{width: 242, textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '500', lineHeight: 60, wordWrap: 'break-word'}}>Post</div>
//         </div>
//       </div>
//     </div>
//     <div className="Background" style={{width: 1920, height: 249, left: 0, top: 1, position: 'absolute', background: 'black'}}>
//       <div className="Header" style={{width: 1280, height: 82, left: 320, top: 84, position: 'absolute', background: 'black'}}>
//         <div className="NavList" style={{width: 660, height: 82, left: 310, top: 0, position: 'absolute', opacity: 0.50}}>
//           <div className="Item" style={{width: 66.56, height: 25, left: 24, top: 32.50, position: 'absolute'}} />
//           <div className="Item" style={{width: 123, height: 25, left: 67, top: 28, position: 'absolute'}}>
//             <div className="Trending" style={{width: 135, height: 24, left: -12, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', lineHeight: 16, letterSpacing: 1, wordWrap: 'break-word'}}>trending</div>
//           </div>
//           <div className="Item" style={{width: 140.22, height: 25, left: 214.11, top: 32.50, position: 'absolute'}}>
//             <div className="Blog" style={{width: 140.42, height: 16, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#F5CE35', fontSize: 20, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', lineHeight: 16, letterSpacing: 1, wordWrap: 'break-word'}}>Blog</div>
//           </div>
//           <div className="Item" style={{width: 128.14, height: 25, left: 378.33, top: 32.50, position: 'absolute'}}>
//             <div className="Profile" style={{width: 128.34, height: 16, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '900', textTransform: 'uppercase', lineHeight: 16, letterSpacing: 1, wordWrap: 'break-word'}}>Profile</div>
//           </div>
//           <div className="Item" style={{width: 80.83, height: 25, left: 530.47, top: 32.50, position: 'absolute'}} />
//         </div>
//         <div className="LinkSvg" style={{width: 150, height: 45, left: 32, top: 18.50, position: 'absolute'}}>
//           <div className="Vector" style={{width: 31.85, height: 38.13, left: 1, top: 5.51, position: 'absolute', background: 'white', border: '0.44px white solid'}}></div>
//           <div className="Vector" style={{width: 31.64, height: 30.05, left: 31.39, top: 13.80, position: 'absolute', background: 'white'}}></div>
//           <div className="Vector" style={{width: 31.64, height: 30.05, left: 64.73, top: 13.87, position: 'absolute', background: 'white'}}></div>
//           <div className="Vector" style={{width: 35.21, height: 43.13, left: 98.67, top: 0.75, position: 'absolute', background: 'white'}}></div>
//           <div className="Vector" style={{width: 35.65, height: 43.56, left: 98.45, top: 0.53, position: 'absolute', background: 'white'}}></div>
//         </div>
//         <div className="ButtonSignIn" style={{width: 21, height: 21, left: 1203, top: 30.50, position: 'absolute'}} />
//         <div className="Button" style={{width: 155, height: 69, paddingLeft: 24, paddingRight: 24, paddingTop: 14, paddingBottom: 14, left: 1069, top: 8, position: 'absolute', background: '#F5CE35', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
//           <div className="SignupRegister" style={{width: 171, height: 42, textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', lineHeight: 36, wordWrap: 'break-word'}}>Signup/Register</div>
//         </div>
//       </div>
//       <div className="Vector" style={{width: 12.22, height: 10.69, left: 438, top: 171, position: 'absolute', background: '#F4CF35'}}></div>
//       <div className="Hub" style={{left: 345, top: 166, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 38, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', textTransform: 'uppercase', lineHeight: 16, letterSpacing: 1, wordWrap: 'break-word'}}>Hub</div>
//     </div>
//     <div className="Form" style={{width: 1, height: 1, left: 1445, top: 0, position: 'absolute'}} />
//   </div>
// </div>
//  )
// }
import React from 'react';
import './BlogPage.css';

export default function UserBlog() {
  return (
    <div className="blog-page">
      <header className="header">
        <h1>Food HUB</h1>
        <nav>
          <ul>
            <li>Trending</li>
            <li>Blog</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <form className="blog-form">
          <input type="text" placeholder="Title" className="title-input" />
          <input type="text" placeholder="Description" className="description-input" />
          <div className="image-placeholder">
            <p>Place your image here</p>
          </div>
          <button type="submit" className="post-button">Post</button>
        </form>
      </main>
    </div>
  );
}
