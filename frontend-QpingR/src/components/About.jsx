// src/components/About.js
import React from 'react';
import '../styles/About.css';

const About = ({ aboutUsImage }) => {
  return (
    <section className="about" id="about">
      <div className="about-video">
        {aboutUsImage ? (
          <video
            src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" // Sample video URL
            className="about-video-player" autoPlay loop muted playsInline controls/>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At QpingR, we’re revolutionizing how vehicle owners connect and communicate. Our mission is to simplify parking and enhance road safety through innovative technology. With a user-friendly platform, we empower users to manage their parking experience seamlessly, ensuring privacy and efficiency every step of the way.
        </p>
        <p>
          Founded in 2025, our team is dedicated to creating solutions that make urban mobility smarter and more connected. Join us in transforming the future of vehicle communication!
        </p>
      </div>
    </section>
  );
};

export default About;