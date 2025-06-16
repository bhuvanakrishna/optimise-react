import React, { useEffect } from 'react';

import Descriptions from '../../components/Descriptions';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Descriptions />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
