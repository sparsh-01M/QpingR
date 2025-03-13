// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [siteContent, setSiteContent] = useState({});
  const [partners, setPartners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const siteResponse = await fetch('http://localhost:4000/api/site-content');
        console.log('Site response status:', siteResponse.status); // Debug
        if (!siteResponse.ok) {
          const errorText = await siteResponse.text();
          throw new Error(`Failed to fetch site content: ${siteResponse.status} - ${errorText}`);
        }
        const siteData = await siteResponse.json();
        console.log('Site content:', siteData);
        setSiteContent(siteData);

        const partnersResponse = await fetch('http://localhost:4000/api/partners');
        if (!partnersResponse.ok) throw new Error('Failed to fetch partners');
        const partnersData = await partnersResponse.json();
        console.log('Partners:', partnersData);
        setPartners(partnersData);

        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <Header setIsModalOpen={setIsModalOpen} />
      <Hero bannerImage={siteContent.bannerImage} />
      <Features
        featureImages={{
          featureImage1: siteContent.featureImage1,
          featureImage2: siteContent.featureImage2,
          featureImage3: siteContent.featureImage3,
          featureImage4: siteContent.featureImage4,
          featureImage5: siteContent.featureImage5,
        }}
      />
      <About aboutUsImage={siteContent.aboutUsImage} />
      <Partners partners={partners} />
      <Testimonials />
      <Footer />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;

// // src/App.jsx
// import React, { useState, useEffect } from 'react';
// import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from '@react-oauth/google';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import About from './components/About';
// import Partners from './components/Partners';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import Modal from './components/Modal';
// import './App.css';

// function AppContent() {
//   const [user, setUser] = useState(null);
//   const [siteContent, setSiteContent] = useState({});
//   const [partners, setPartners] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Google Login handler
//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         // Get user info from Google
//         const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
//           headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//         });
//         const userData = await userInfo.json();

//         // Send user data to backend
//         const response = await fetch('http://localhost:4000/api/auth/google', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             googleId: userData.sub,
//             name: userData.name,
//             email: userData.email,
//             picture: userData.picture,
//           }),
//         });

//         if (response.ok) {
//           const savedUser = await response.json();
//           setUser(savedUser);
//           localStorage.setItem('user', JSON.stringify(savedUser));
//         } else {
//           throw new Error('Failed to save user data');
//         }
//       } catch (error) {
//         console.error('Login failed:', error);
//         setError('Authentication failed');
//       }
//     },
//     onError: (error) => {
//       console.log('Login Failed:', error);
//       setError('Login failed');
//     },
//   });

//   // Logout handler
//   const logout = () => {
//     googleLogout();
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   // Fetch site content, partners, and check user session
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Check stored user
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         }

//         // Fetch site content
//         const siteResponse = await fetch('http://localhost:4000/api/site-content');
//         console.log('Site response status:', siteResponse.status); // Debug
//         if (!siteResponse.ok) {
//           const errorText = await siteResponse.text();
//           throw new Error(`Failed to fetch site content: ${siteResponse.status} - ${errorText}`);
//         }
//         const siteData = await siteResponse.json();
//         console.log('Site content:', siteData);
//         setSiteContent(siteData);

//         // Fetch partners
//         const partnersResponse = await fetch('http://localhost:4000/api/partners');
//         if (!partnersResponse.ok) throw new Error('Failed to fetch partners');
//         const partnersData = await partnersResponse.json();
//         console.log('Partners:', partnersData);
//         setPartners(partnersData);

//         setError(null);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="App">
//       <Header setIsModalOpen={setIsModalOpen} />
//       <div className="auth-container">
//         {user ? (
//           <div className="user-info">
//             <span>Welcome, {user.name}</span>
//             <button onClick={logout}>Sign Out</button>
//           </div>
//         ) : (
//           <button onClick={() => login()}>Sign in with Google</button>
//         )}
//       </div>
//       <Hero bannerImage={siteContent.bannerImage} />
//       <Features
//         featureImages={{
//           featureImage1: siteContent.featureImage1,
//           featureImage2: siteContent.featureImage2,
//           featureImage3: siteContent.featureImage3,
//           featureImage4: siteContent.featureImage4,
//           featureImage5: siteContent.featureImage5,
//         }}
//       />
//       <About aboutUsImage={siteContent.aboutUsImage} />
//       <Partners partners={partners} />
//       <Testimonials />
//       <Footer />
//       {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <GoogleOAuthProvider clientId="834852827199-5i7dop82urj0a9g0jvtnucl6qlrnaq6s.apps.googleusercontent.com">
//       <AppContent />
//     </GoogleOAuthProvider>
//   );
// }

// export default App;