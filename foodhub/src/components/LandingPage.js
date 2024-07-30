import React from 'react';
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="App">
      {/* <header className="header"> */}
        <div className="logo">Food HUB</div>
        <nav>
          <ul>
            <li>Trending</li>
            <li>Blog</li>
            <li>Profile</li>
          </ul>
        </nav>
        <button className="sign-in">Sign in / Sign up</button>
      {/* </header> */}
      <main>
        <div className="main-image">
          <img src="https://via.placeholder.com/1920x1080" alt="Main dish" />
        </div>
        <section className="trending-now">
          <h2>Trending Now</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search Recipe" />
            <button>Search</button>
          </div>
          <div className="recipe-grid">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index} className="recipe-card">
                <img src={`https://via.placeholder.com/150`} alt={`Recipe ${index + 1}`} />
                <p>Recipe {index + 1}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}









// import React from 'react';
// // import { useHistory } from 'react-router-dom';
// import './LandingPage.css'; // Assuming you have a separate CSS file for styling

// export default function LandingPage() {
//   const history = useHistory();

//   const handleNavigation = (path) => {
//     history.push(path);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     const query = event.target.elements.search.value;
//     alert(`Searching for: ${query}`);
//   };

//   const handleSignOut = () => {
//     alert('Signing out...');
//     history.push('/login');
//   };

//   // Placeholder data
//   const posts = Array.from({ length: 15 }, (_, index) => ({
//     id: index + 1,
//     title: `Post Title ${index + 1}`,
//     image: 'https://via.placeholder.com/150'
//   }));

//   return (
//     <div className="landing-page">
//       <header className="header">
//         <h1>Food HUB</h1>
//         <nav>
//           <ul>
//             {/* <li><button onClick={() => handleNavigation('/trending')}>Trending</button></li> */}
//             <li><button onClick={() => handleNavigation('/components/Blog')}>Blog</button></li>
//             <li><button onClick={() => handleNavigation('/components/ProfilePage')}>Profile</button></li>
//           </ul>
//         </nav>
//         <button className="subscribe-button" onClick={handleSignOut}>Sign Out</button>
//       </header>
//       <main className="main-content">
//         <div className="hero-image">
//           <img src="https://via.placeholder.com/600x300" alt="Hero" />
//         </div>
//         <section className="trending-section">
//           <h2>Trending Now</h2>
//           <form onSubmit={handleSearch} className="search-form">
//             <input type="text" name="search" placeholder="Search..." />
//             <button type="submit">Search</button>
//           </form>
//           <div className="posts-grid">
//             {posts.map(post => (
//               <div key={post.id} className="post-card">
//                 <img src={post.image} alt={post.title} className="post-image" />
//                 <p className="post-title">{post.title}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
