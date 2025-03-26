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

        const siteResponse = await fetch('https://qpingr.onrender.com/api/site-content');
        console.log('Site response status:', siteResponse.status); // Debug
        if (!siteResponse.ok) {
          const errorText = await siteResponse.text();
          throw new Error(`Failed to fetch site content: ${siteResponse.status} - ${errorText}`);
        }
        const siteData = await siteResponse.json();
        console.log('Site content:', siteData);
        setSiteContent(siteData);

        const partnersResponse = await fetch('https://qpingr.onrender.com/api/partners');
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
