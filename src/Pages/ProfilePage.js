import React from "react";
import "@fontsource/orbitron";
import "./index.css";

const ProfilePage = () => {
  const posts = [
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Jane Doe",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/1.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile1.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "John Smith",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/2.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile2.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Emily White",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/3.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile3.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Mark Green",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/4.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile4.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Sophia Brown",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/5.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile5.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Chris Blue",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/6.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile6.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Alice Grey",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/7.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile7.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tom Black",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/8.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile8.jpg",
    },
    {
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Rachel Gold",
      date: "August 20, 2022",
      image: process.env.PUBLIC_URL + "/profilepage/image/9.jpg",
      profileImage: process.env.PUBLIC_URL + "/profilepage/image/profile9.jpg",
    },
  ];

  return (
    <div className="container">
    <header className="header">
  <div className="header-content">
    {/* Logo Section */}
    <div className="logo">
      <h1>Your Name</h1>
    </div>

    {/* Navigation Section (aligned to the right) */}
    <nav className="navigation">
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><a href="#" style={{ color: '#ffffff', textDecoration: 'underline' }}>Blog</a></li>
        <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Search</a></li>
        <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>About</a></li>
        <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Post</a></li>
      </ul>
    </nav>

  </div>
</header>



{/* Profile Section */}
<section className="profile">
  <div
    className="profile-card"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#292b2c",
      padding: "24px",
      borderRadius: "8px",
      color: "#ffffff",
    }}
  >
    {/* Centered Profile Section */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        marginBottom: "16px",
      }}
    >
      <img
        src="./profile.png"
        alt="Profile"
        className="profile-image"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
        }}
      />
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Jonathan Doe
        </h2>
        <p
          style={{
            margin: "4px 0",
            fontSize: "14px",
            color: "#c7c7c7",
          }}
        >
          Collaborator & Editor
        </p>
      </div>
    </div>

    {/* Paragraph */}
    <p
      style={{
        fontSize: "14px",
        lineHeight: "1.5",
        margin: "0",
        textAlign: "center",
      }}
    >
      Meet Jonathan Doe, a passionate writer and blogger with a love for
      technology and travel. Jonathan holds a degree in Computer Science and has
      spent years working in the tech industry, gaining a deep understanding of
      the impact technology has on our lives.
    </p>

    {/* Social Links */}
    <div className="social-links">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>
          </div>
  </div>
</section>



<section className="posts">
  <h2 style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', fontFamily: 'Orbitron' }}>POSTS BY</h2>
  <div className="posts-grid">
    {posts.map((post, index) => (
      <div className="post-card" key={index} style={{ height: '350px', width: '90%' }}>
        <div style={{ position: 'relative' }}>
          <img src={post.image} alt={post.title} className="post-image" style={{ height: '180px', width: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
        <div style={{ marginTop: '8px', marginLeft: '8px', backgroundColor: '#4B6BFB0D', color: '#4B6BFB', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', width: 'fit-content' }}>
          Technology
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{post.title}</h3>
        <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }}>{post.description}</p>
        <div className="post-meta" style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
          <img
            src={post.profileImage}
            alt="Author"
            style={{
              height: '30px',
              width: '30px',
              borderRadius: '50%',
              marginRight: '8px',
            }}
          />
          <span style={{ marginRight: '16px' }}>By {post.author}</span> <span>{post.date}</span>
        </div>
      </div>
    ))}
  </div>
</section>


           {/* Footer Section */}
           <footer className="footer" style={{ backgroundColor: "#171721", color: "grey", padding: "20px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          {/* About Section */}
          <div className="footer-section about" style={{ flex: "1 1 200px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>About</h2>
            <p style={{ fontSize: "14px", lineHeight: "1.6" , color: "grey"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Email: <a href="mailto:info@jstemplate.net" style={{ color: "grey", textDecoration: "none" }}>info@jstemplate.net</a>
            </p>
            <p style={{ fontSize: "14px"  }}>Phone: <a href="880123456789" style={{ color: "grey", textDecoration: "none" }}>880 123 456 789</a></p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section links" style={{ flex: "1 1 150px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Quick Links</h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Home</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>About</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Blog</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Post</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="footer-section categories" style={{ flex: "1 1 150px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Category</h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Lifestyle</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Technology</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Travel</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Business</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Economy</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "grey", textDecoration: "none" }}>Sports</a></li>
            </ul>
          </div>

   {/* Newsletter Section */}
<div
  className="newsletter-container"
  style={{
    flex: "1 1 200px",
    backgroundColor: "#242535",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center", 
  }}
>
  <h2 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>
    Weekly Newsletter
  </h2>
  <p
    style={{
      fontSize: "14px",
      lineHeight: "1.6",
      marginBottom: "10px",
      color: "grey",
    }}
  >
    Get blog articles and offers via email.
  </p>
  <form style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%", maxWidth: "300px" }}>
    <input
      type="email"
      placeholder="Your Email"
      required
      style={{
        padding: "8px",
        border: "none",
        borderRadius: "4px",
        outline: "none",
        color: "white",
        backgroundColor: " #181A2A",
      }}
    />
    <style>
      {`
        input::placeholder {
          backgroundcolor: #181A2A;
        
        }
      `}
    </style>
    <button
      type="submit"
      style={{
        padding: "8px",
        backgroundColor: "#4B6BFB",
        color: "#ffffff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Subscribe
    </button>
  </form>
</div>


        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ textAlign: "center", marginTop: "20px", paddingTop: "10px", borderTop: "1px solid #444" ,background: "#171721"}}>
          <p style={{ fontSize: "14px" }}>MetaBlog © BB copyrights 2024. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default ProfilePage;
