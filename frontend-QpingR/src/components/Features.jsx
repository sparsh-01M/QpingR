// src/components/Features.js
import React from 'react';
import '../styles/Features.css';

const Features = ({ featureImages }) => {
  const features = [
    { image: featureImages?.featureImage1, title: 'Feature 1', description: 'Instant vehicle owner notifications.' },
    { image: featureImages?.featureImage2, title: 'Feature 2', description: 'Secure and private communication.' },
    { image: featureImages?.featureImage3, title: 'Feature 3', description: 'Real-time parking updates.' },
    { image: featureImages?.featureImage4, title: 'Feature 4', description: 'User-friendly interface.' },
    { image: featureImages?.featureImage5, title: 'Feature 5', description: 'Customizable settings.' },
  ];

  return (
    <section className="features" id="features">
      <h1>Features</h1>
      <div className="features-grid">
        {featureImages ? (
          features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.image && (
                <img src={feature.image} alt={feature.title} className="feature-image" />
              )}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))
        ) : (
          <p>Loading features...</p>
        )}
      </div>
    </section>
  );
};

export default Features;