import React from 'react';
import '../styles/Partners.css';

const Partners = ({ partners }) => {
  console.log('Partners Received in Component:', partners);

  if (!partners || partners.length === 0) {
    return <div>No partners available</div>;
  }

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners-container" id="partners"> 
      <h2>Our Partners</h2>
      <div className="partners-row">
        {duplicatedPartners.map((partner, index) => (
          <div key={`${partner._id}-${index}`} className="partner-item">
            <img
              src={partner.imageUrl}
              alt={partner.name}
              onLoad={() => console.log(`Image loaded: ${partner.name}`)}
              onError={(e) => {
                console.error(`Image failed to load: ${partner.name} - ${partner.imageUrl}`);
                e.target.style.display = 'none'; // Hide broken images
              }}
            />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;