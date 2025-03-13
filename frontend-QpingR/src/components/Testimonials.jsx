// src/components/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => (
  <section id="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <div className="star-rating">★★★★★</div>
        <p>"QpingR has completely transformed my parking experience. The app is a game changer!"</p>
        <span>- Jamie, Commuter</span>
      </div>
      <div className="testimonial-card">
        <div className="star-rating">★★★★☆</div>
        <p>"Effortless and secure communication. I love how simple and intuitive the app is!"</p>
        <span>- Taylor, Urban Driver</span>
      </div>
      <div className="testimonial-card">
        <div className="star-rating">★★★★★</div>
        <p>"QpingR connects me with vehicle owners quickly and safely. Truly innovative!"</p>
        <span>- Morgan, City Resident</span>
      </div>
    </div>
  </section>
);

export default Testimonials;