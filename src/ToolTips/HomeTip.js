 
 import React from 'react'
 export const HomeTip = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Back to Home Page
    </div>
  );

export default HomeTip
  