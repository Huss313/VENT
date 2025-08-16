import React from 'react';
import PropTypes from 'prop-types';

function TeamMember({ image, name, position, title }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: '1rem'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ 
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          objectPosition: position || 'center 50%',
          borderRadius: '50%',
          border: '3px solid #fff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }} 
      />
      <h3 style={{ margin: '15px 0 5px' }}>{name}</h3>
      {title && <p style={{ color: '#666', margin: 0 }}>{title}</p>}
    </div>
  );
}

TeamMember.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  title: PropTypes.string
};

export default TeamMember;