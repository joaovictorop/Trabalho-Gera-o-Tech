
import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  
  const titleStyle = {
    color: '#474747',
    fontSize: '24px',
    textAlign: titleAlign,
  };

  const linkStyle = {
    color: '#C92071',
    fontSize: '18px',
    marginLeft: 'auto', 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={titleStyle}>{title}</h2>
      {link && (
        <a href={link.href} style={linkStyle}>
          {link.text}
        </a>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Section;
