import React, { useEffect } from 'react';

import Spin from '../../components/Spin';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Spin />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
