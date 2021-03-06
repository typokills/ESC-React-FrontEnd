 
 import React from 'react'
import { Tooltip } from 'react-bootstrap';
 export const HomeTip = props => (
    <Tooltip
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
      
    </Tooltip>
  );

export default HomeTip
  