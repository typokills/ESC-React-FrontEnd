 
 import React from 'react'
 export const newTicketTip = props => (
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
      Let us help! 
    </div>
  );

export default newTicketTip
  